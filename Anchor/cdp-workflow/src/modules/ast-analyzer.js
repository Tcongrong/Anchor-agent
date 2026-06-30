/**
 * AST 分析模块
 * 抓取页面可访问脚本，导出 AST 文件，并生成 function->标签映射
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const http = require('http');
const https = require('https');
const zlib = require('zlib');
const acorn = require('acorn');
const astring = require('astring');
const htmlScriptUtils = require('./html-script-utils');

class AstAnalyzer {
  constructor(connectionManager, fileSystem) {
    this.connectionManager = connectionManager;
    this.fileSystem = fileSystem;
    this.logMinIntervalMs = 300;
    this.defaultScriptSourceTimeoutMs = 20000;
    this.defaultScriptProcessTimeoutMs = 180000;
  }

  async exportAstAndFunctionTags(options = {}) {
    const normalizedOptions = typeof options === 'string'
      ? { outputDir: options }
      : (options || {});
    const {
      outputDir = 'cdp-ast-output',
      reloadBeforeCollect = false,
      collectMs = 3000,
      scriptSourceTimeoutMs = this.defaultScriptSourceTimeoutMs,
      scriptProcessTimeoutMs = this.defaultScriptProcessTimeoutMs
    } = normalizedOptions;

    const client = await this.connectionManager.connect();
    await this.connectionManager.enableDomains(['Runtime', 'Debugger', 'Network', 'Page']);

    const absoluteOutputDir = path.resolve(process.cwd(), outputDir);
    const astDir = path.join(absoluteOutputDir, 'asts');
    const sourceDir = path.join(absoluteOutputDir, 'sources');
    fs.mkdirSync(astDir, { recursive: true });
    fs.mkdirSync(sourceDir, { recursive: true });

    const scriptEntries = await this._collectScriptEntries({
      client,
      reloadBeforeCollect,
      settleMs: collectMs
    });
    const usableCount = scriptEntries.filter((s) => this._isUsableScriptId(s.scriptId)).length;
    let liveScriptIdIndex = null;
    if (usableCount === 0) {
      // 某些页面/协议下 getScripts 只能拿到伪ID，主动触发一次刷新以捕获真实 scriptId
      liveScriptIdIndex = await this._buildLiveScriptIdIndex(client, {
        triggerReload: true,
        settleMs: 1800
      });
    }

    const functionTagMap = {};
    const astFiles = [];
    let successCount = 0;

    console.log(`共发现 ${scriptEntries.length} 个脚本，开始逐个分析...`);
    for (let i = 0; i < scriptEntries.length; i += 1) {
      const entry = scriptEntries[i];
      const entryLabel = entry.url || entry.scriptId || `#${i}`;
      console.log(`[${i + 1}/${scriptEntries.length}] 正在处理: ${entryLabel}`);
      try {
        await this._withTimeout(
          this._processScriptEntryForExport({
            client,
            entry,
            liveScriptIdIndex,
            astDir,
            sourceDir,
            astFiles,
            functionTagMap,
            scriptSourceTimeoutMs,
            onUnitProcessed: () => { successCount += 1; }
          }),
          scriptProcessTimeoutMs,
          `分析脚本 ${entryLabel}`
        );
      } catch (error) {
        console.warn(`跳过脚本 ${entryLabel}: ${error.message}`);
      }
    }

    const mapFilePath = path.join(absoluteOutputDir, 'function-tag-map.json');
    const summaryFilePath = path.join(absoluteOutputDir, 'summary.json');

    console.log(`正在写入映射文件 (${Object.keys(functionTagMap).length} 个函数)...`);
    this._writeJsonFileSafe(mapFilePath, functionTagMap);
    this._writeJsonFileSafe(summaryFilePath, {
      generatedAt: new Date().toISOString(),
      totalDiscoveredScripts: scriptEntries.length,
      successfullyAnalyzedScripts: successCount,
      astFiles: astFiles.map((p) => path.relative(absoluteOutputDir, p)),
      functionCount: Object.keys(functionTagMap).length
    });

    return {
      outputDir: absoluteOutputDir,
      astDir,
      sourceDir,
      mapFilePath,
      summaryFilePath,
      scriptCount: scriptEntries.length,
      analyzedCount: successCount,
      functionCount: Object.keys(functionTagMap).length
    };
  }

  async _processScriptEntryForExport({
    client,
    entry,
    liveScriptIdIndex,
    astDir,
    sourceDir,
    astFiles,
    functionTagMap,
    scriptSourceTimeoutMs = this.defaultScriptSourceTimeoutMs,
    onUnitProcessed = null
  }) {
    const runtimeEntry = liveScriptIdIndex
      ? { ...entry, scriptId: this._pickScriptIdByUrl(liveScriptIdIndex, entry.url) || entry.scriptId }
      : entry;
    const sourceCode = await this._getScriptSource(client, runtimeEntry, { timeoutMs: scriptSourceTimeoutMs });
    if (!sourceCode || !sourceCode.trim()) {
      return;
    }

    const scriptUnits = this._splitSourceIntoScriptUnits(sourceCode, entry.url || '');
    for (const unit of scriptUnits) {
      if (!unit.code || !unit.code.trim()) continue;

      const { ast, sourceType } = this._parseScript(unit.code);
      const astWrite = this._writeAstFileSafe(astDir, unit.scriptUrl, ast);
      if (astWrite.path) {
        astFiles.push(astWrite.path);
      } else if (astWrite.reason) {
        console.warn(`AST 文件落盘失败，改为仅导出映射: ${unit.scriptUrl} (${astWrite.reason})`);
      }

      const sourceFilePath = this._writeSourceFile(sourceDir, unit.scriptUrl, unit.code);
      const pageUrl = String(entry.url || unit.scriptUrl || '').split('#')[0];
      let htmlContext = unit.htmlContext || null;
      if (!htmlContext && htmlScriptUtils.isHtmlLikeUrl(pageUrl) && !htmlScriptUtils.isHtmlContent(unit.code)) {
        htmlContext = await this._resolveHtmlInlineScriptContext(unit.code, pageUrl);
      }
      const effectiveScriptUrl = htmlContext?.pageUrl || unit.scriptUrl;
      const tags = this._buildFunctionTagMap(
        ast,
        unit.code,
        effectiveScriptUrl,
        astWrite.path || null,
        sourceFilePath,
        htmlContext
      );
      Object.assign(functionTagMap, tags);
      if (unit.inlineScriptAlias && unit.inlineScriptAlias !== effectiveScriptUrl) {
        const aliasTags = this._buildFunctionTagMap(
          ast,
          unit.code,
          unit.inlineScriptAlias,
          astWrite.path || null,
          sourceFilePath,
          htmlContext
        );
        Object.assign(functionTagMap, aliasTags);
      }
      if (typeof onUnitProcessed === 'function') {
        onUnitProcessed();
      }

      const unitLabel = unit.fromHtml ? `${unit.scriptUrl} (html-script)` : unit.scriptUrl;
      console.log(`已处理脚本: ${unitLabel} (${sourceType})`);
    }
  }

  async injectFunctionTagLogs(options = {}) {
    const {
      inputDir = 'cdp-ast-output',
      mapFile = null,
      outputDir = null
    } = options;

    const absoluteInputDir = path.resolve(process.cwd(), inputDir);
    const mapFilePath = mapFile
      ? path.resolve(process.cwd(), mapFile)
      : path.join(absoluteInputDir, 'function-tag-map.json');
    const absoluteOutputDir = outputDir
      ? path.resolve(process.cwd(), outputDir)
      : path.join(absoluteInputDir, 'instrumented');

    if (!fs.existsSync(mapFilePath)) {
      throw new Error(`映射文件不存在: ${mapFilePath}`);
    }

    const client = await this.connectionManager.connect();
    await this.connectionManager.enableDomains(['Runtime', 'Debugger']);
    fs.mkdirSync(absoluteOutputDir, { recursive: true });

    const mapJson = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));
    const tagsByScriptAndLoc = this._groupTagsByScriptAndLocation(mapJson);
    const scriptEntries = await this._collectScriptEntries();

    let processedScripts = 0;
    let modifiedFunctions = 0;
    const outputs = [];

    for (const entry of scriptEntries) {
      const scriptUrl = entry.url || '';
      const tagMapForScript = tagsByScriptAndLoc.get(scriptUrl);
      if (!tagMapForScript || tagMapForScript.size === 0) {
        continue;
      }

      try {
        const sourceCode = await this._getScriptSource(client, entry);
        const { ast } = this._parseScript(sourceCode);
        const injectedCount = this._injectLogsIntoAst(ast, tagMapForScript);
        if (injectedCount === 0) {
          continue;
        }

        const generatedCode = astring.generate(ast);
        const outFile = this._writeInstrumentedFile(absoluteOutputDir, scriptUrl, generatedCode);
        outputs.push(outFile);
        processedScripts += 1;
        modifiedFunctions += injectedCount;
        console.log(`已注入脚本: ${scriptUrl} (函数 ${injectedCount} 个)`);
      } catch (error) {
        console.warn(`注入失败，跳过脚本 ${scriptUrl || entry.scriptId}: ${error.message}`);
      }
    }

    const summaryPath = path.join(absoluteOutputDir, 'inject-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify({
      generatedAt: new Date().toISOString(),
      mapFile: mapFilePath,
      outputDir: absoluteOutputDir,
      processedScripts,
      modifiedFunctions,
      outputFiles: outputs.map((f) => path.basename(f))
    }, null, 2), 'utf8');

    return {
      mapFilePath,
      outputDir: absoluteOutputDir,
      summaryPath,
      processedScripts,
      modifiedFunctions,
      outputFiles: outputs
    };
  }

  async injectFunctionTagLogsToRuntime(options = {}) {
    const {
      inputDir = 'cdp-ast-output',
      mapFile = null,
      reload = false,
      watch = false,
      watchMs = 30000
    } = options;

    const absoluteInputDir = path.resolve(process.cwd(), inputDir);
    const mapFilePath = mapFile
      ? path.resolve(process.cwd(), mapFile)
      : path.join(absoluteInputDir, 'function-tag-map.json');

    if (!fs.existsSync(mapFilePath)) {
      throw new Error(`映射文件不存在: ${mapFilePath}`);
    }

    const client = await this.connectionManager.connect();
    await this.connectionManager.enableDomains(['Runtime', 'Debugger', 'Page']);

    const mapJson = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));
    const tagsByScriptAndLoc = this._groupTagsByScriptAndLocation(mapJson);
    let scriptEntries = await this._collectScriptEntries();
    let latestScriptIdIndex = await this._buildScriptIdIndex();

    // 用户要求 reload 时，先刷新再注入，避免“注入后被刷新覆盖”
    if (reload) {
      await client.Page.reload({ ignoreCache: true });
      // 等待脚本重新加载并通过 scriptParsed 抓取真实 ID
      latestScriptIdIndex = await this._buildLiveScriptIdIndex(client, {
        triggerReload: false,
        settleMs: 1800
      });
      scriptEntries = await this._collectScriptEntries();
      console.log('页面已刷新，正在对刷新后的脚本进行注入...');
    }

    // 若当前索引可用ID太少，主动触发一次预刷新收集真实 scriptId
    if (this._countIndexedScriptIds(latestScriptIdIndex) === 0) {
      latestScriptIdIndex = await this._buildLiveScriptIdIndex(client, {
        triggerReload: true,
        settleMs: 1800
      });
      scriptEntries = await this._collectScriptEntries();
    }

    let patchedScripts = 0;
    let patchedFunctions = 0;

    for (const entry of scriptEntries) {
      const scriptUrl = entry.url || '';
      const tagMapForScript = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, scriptUrl);
      if (!tagMapForScript || tagMapForScript.size === 0) {
        continue;
      }

      // setScriptSource 需要 scriptId，优先使用当前会话最新 scriptId
      let currentScriptId = this._pickScriptIdByUrl(latestScriptIdIndex, scriptUrl) || entry.scriptId;
      if (!currentScriptId) {
        continue;
      }

      try {
        const runtimeEntry = { ...entry, scriptId: currentScriptId };
        const sourceCode = await this._getScriptSource(client, runtimeEntry);
        const { ast } = this._parseScript(sourceCode);
        const injectedCount = this._injectLogsIntoAst(ast, tagMapForScript);
        if (injectedCount === 0) {
          continue;
        }

        const generatedCode = astring.generate(ast);
        try {
          await client.Debugger.setScriptSource({
            scriptId: currentScriptId,
            scriptSource: generatedCode
          });
        } catch (firstError) {
          // 常见场景：scriptId 已失效，按 URL 重新索引并重试一次
          if (!String(firstError.message || '').includes('No script with given id found')) {
            throw firstError;
          }
          latestScriptIdIndex = await this._buildLiveScriptIdIndex(client, {
            triggerReload: false,
            settleMs: 1200
          });
          currentScriptId = this._pickScriptIdByUrl(latestScriptIdIndex, scriptUrl);
          if (!currentScriptId) {
            throw firstError;
          }
          await client.Debugger.setScriptSource({
            scriptId: currentScriptId,
            scriptSource: generatedCode
          });
        }

        patchedScripts += 1;
        patchedFunctions += injectedCount;
        console.log(`已热更新脚本: ${scriptUrl} (函数 ${injectedCount} 个)`);
      } catch (error) {
        console.warn(`运行时注入失败，跳过脚本 ${scriptUrl || entry.scriptId}: ${error.message}`);
      }
    }

    if (watch) {
      console.log(`进入监听模式，持续 ${watchMs}ms 捕获新脚本并自动注入...`);
      const watchResult = await this._watchAndInjectNewScripts({
        client,
        tagsByScriptAndLoc,
        watchMs
      });
      patchedScripts += watchResult.patchedScripts;
      patchedFunctions += watchResult.patchedFunctions;
    }

    return {
      mapFilePath,
      patchedScripts,
      patchedFunctions,
      reloaded: !!reload
    };
  }

  async injectViaFetchInterception(options = {}) {
    const {
      inputDir = 'cdp-ast-output',
      mapFile = null,
      reload = true,
      watchMs = 30000,
      logMinIntervalMs = 300,
      hydrateMissed = false,
      hydrateMs = 8000
    } = options;

    const absoluteInputDir = path.resolve(process.cwd(), inputDir);
    const mapFilePath = mapFile
      ? path.resolve(process.cwd(), mapFile)
      : path.join(absoluteInputDir, 'function-tag-map.json');

    if (!fs.existsSync(mapFilePath)) {
      throw new Error(`映射文件不存在: ${mapFilePath}`);
    }

    const client = await this.connectionManager.connect();
    await this.connectionManager.enableDomains(['Fetch', 'Page', 'Runtime', 'Debugger', 'Network']);

    try {
      await client.Network.setCacheDisabled({ cacheDisabled: true });
    } catch (e) {
      // ignore cache disable failure
    }

    const mapJson = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));
    const tagsByScriptAndLoc = this._groupTagsByScriptAndLocation(mapJson);
    this.logMinIntervalMs = Number.isFinite(logMinIntervalMs) ? Math.max(0, logMinIntervalMs) : 300;

    const prebuiltHtmlByUrl = await this._buildPrebuiltHtmlInstrumentations(client, tagsByScriptAndLoc);

    const patchedRequestIds = new Set();
    const seenTargetScriptUrls = new Set();
    const injectedScriptUrls = new Set();
    const warmedOnlyScriptUrls = new Set();
    let patchedScripts = 0;
    let patchedFunctions = 0;

    // getResponseBody 对同一 requestId 只能调用一次；之后必须用 fulfillRequest 交回（含未改动的）响应体
    const fulfillWithBufferedBody = async (reqId, buffered, evt) => {
      const responseHeaders = this._sanitizeFetchResponseHeaders(evt.responseHeaders || []);
      const bodyB64 = buffered.base64Encoded
        ? buffered.body
        : Buffer.from(buffered.body || '', 'utf8').toString('base64');
      const responseCode = typeof evt.responseStatusCode === 'number' ? evt.responseStatusCode : 200;
      await client.Fetch.fulfillRequest({
        requestId: reqId,
        responseCode,
        responseHeaders,
        body: bodyB64
      });
    };

    const safeContinueRequest = async (reqId) => {
      try {
        await client.Fetch.continueRequest({ requestId: reqId });
      } catch (e) {
        const msg = String(e && e.message ? e.message : '');
        // 高频并发下 requestId 可能已失效/已被处理，属于可忽略竞态
        if (msg.includes('Invalid InterceptionId') || msg.includes('No request with given id')) return;
        throw e;
      }
    };

    const onRequestPaused = async (event) => {
      const { requestId } = event;
      if (!requestId) return;
      if (patchedRequestIds.has(requestId)) {
        await safeContinueRequest(requestId);
        return;
      }

      const url = event.request?.url || '';
      const atResponseStage =
        typeof event.responseStatusCode === 'number' || !!event.responseErrorReason;

      // 只在响应阶段处理（状态码可能为 0，不能仅用 truthy 判断）
      if (!atResponseStage) {
        await safeContinueRequest(requestId);
        return;
      }

      const tagMapForScript = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, url);
      const htmlDocumentCandidate = this._looksLikeHtmlResponse(event) || this._isHtmlLikeUrl(url);
      const hasMappedHtmlScripts = htmlDocumentCandidate && this._pageHasMappedHtmlScripts(tagsByScriptAndLoc, url);

      if ((!tagMapForScript || tagMapForScript.size === 0) && !hasMappedHtmlScripts) {
        await safeContinueRequest(requestId);
        return;
      }
      seenTargetScriptUrls.add(this._normalizeUrl(url));

      const htmlDocumentRequest = htmlDocumentCandidate && (
        this._looksLikeHtmlResponse(event) || hasMappedHtmlScripts
      );
      const jsLikeResponse = this._looksLikeJavaScriptResponse(event);

      // HTML 文档：提取 <script> 内 JS 后插桩；纯 JS 响应走原有逻辑
      if (!jsLikeResponse && !htmlDocumentRequest) {
        await safeContinueRequest(requestId);
        return;
      }
      const executableScriptRequest = this._isExecutableScriptRequest(event);
      if (!this._canReadResponseBody(event)) {
        await safeContinueRequest(requestId);
        return;
      }

      const normalizedRequestUrl = this._normalizeUrl(url);
      const prebuiltHtml = prebuiltHtmlByUrl.get(normalizedRequestUrl);
      if (prebuiltHtml && htmlDocumentRequest) {
        try {
          const responseHeaders = this._sanitizeFetchResponseHeaders(
            event.responseHeaders || [],
            true
          );
          await client.Fetch.fulfillRequest({
            requestId,
            responseCode: typeof event.responseStatusCode === 'number' ? event.responseStatusCode : 200,
            responseHeaders,
            body: Buffer.from(prebuiltHtml.html, 'utf8').toString('base64')
          });
          patchedRequestIds.add(requestId);
          patchedScripts += 1;
          patchedFunctions += prebuiltHtml.injectedCount;
          injectedScriptUrls.add(normalizedRequestUrl);
          for (const inlineKey of prebuiltHtml.inlineKeys || []) {
            injectedScriptUrls.add(inlineKey);
          }
          console.log(`HTML注入脚本: ${url} (函数 ${prebuiltHtml.injectedCount} 个, 预构建)`);
          return;
        } catch (error) {
          console.warn(`预构建 HTML 注入失败，回退在线注入 ${url}: ${error.message}`);
        }
      }

      let bodyRes = null;
      try {
        bodyRes = await client.Fetch.getResponseBody({ requestId });
        let sourceCode = bodyRes.body || '';
        if (bodyRes.base64Encoded) {
          sourceCode = Buffer.from(sourceCode, 'base64').toString('utf8');
        }

        if (!sourceCode || !sourceCode.trim()) {
          await fulfillWithBufferedBody(requestId, bodyRes, event);
          return;
        }

        let modifiedCode = null;
        let injectedCount = 0;

        if (htmlScriptUtils.isHtmlContent(sourceCode)) {
          const htmlInject = this._injectIntoHtmlDocument(sourceCode, url, tagsByScriptAndLoc, {
            onBlockInjected: (block) => {
              if (typeof block.domInlineIndex === 'number') {
                injectedScriptUrls.add(`inline-script-${block.domInlineIndex}`);
              }
            }
          });
          modifiedCode = htmlInject.html;
          injectedCount = htmlInject.injectedCount;
        } else {
          const tagMapForScript = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, url);
          if (!tagMapForScript || tagMapForScript.size === 0) {
            await fulfillWithBufferedBody(requestId, bodyRes, event);
            return;
          }
          const { ast } = this._parseScript(sourceCode);
          injectedCount = this._injectLogsIntoAst(ast, tagMapForScript);
          if (injectedCount > 0) {
            modifiedCode = astring.generate(ast);
          }
        }

        if (injectedCount <= 0 || !modifiedCode) {
          await fulfillWithBufferedBody(requestId, bodyRes, event);
          return;
        }

        const responseHeaders = this._sanitizeFetchResponseHeaders(
          event.responseHeaders || [],
          htmlDocumentRequest
        );

        await client.Fetch.fulfillRequest({
          requestId,
          responseCode: typeof event.responseStatusCode === 'number' ? event.responseStatusCode : 200,
          responseHeaders,
          body: Buffer.from(modifiedCode, 'utf8').toString('base64')
        });

        patchedRequestIds.add(requestId);
        const isExecutableInjection = executableScriptRequest
          || htmlDocumentRequest
          || this._isNavigationDocumentRequest(event);
        if (isExecutableInjection) {
          patchedScripts += 1;
          patchedFunctions += injectedCount;
          injectedScriptUrls.add(this._normalizeUrl(url));
          const injectKind = htmlDocumentRequest ? 'HTML' : 'Fetch';
          console.log(`${injectKind}注入脚本: ${url} (函数 ${injectedCount} 个)`);
        } else {
          warmedOnlyScriptUrls.add(this._normalizeUrl(url));
          console.log(`Fetch预热命中脚本: ${url} (函数 ${injectedCount} 个, 非执行请求)`);
        }
      } catch (error) {
        const msg = String(error && error.message ? error.message : '');
        if (msg.includes('Can only get response body on requests captured after headers received')) {
          await safeContinueRequest(requestId);
          return;
        }
        console.warn(`Fetch注入失败，放行原始脚本 ${url}: ${msg || 'unknown error'}`);
        try {
          if (bodyRes) {
            await fulfillWithBufferedBody(requestId, bodyRes, event);
          } else {
            await safeContinueRequest(requestId);
          }
        } catch (e) {
          await safeContinueRequest(requestId);
        }
      }
    };

    await client.Fetch.enable({
      patterns: [
        { urlPattern: '*', requestStage: 'Response' },
        { urlPattern: '*', requestStage: 'Response', resourceType: 'Document' }
      ]
    });

    client.Fetch.requestPaused(onRequestPaused);

    const debuggerPatchedScriptIds = new Set();
    let debuggerPatchedScripts = 0;
    let debuggerPatchedFunctions = 0;
    let inlineInjectChain = Promise.resolve();

    const onScriptParsedForInject = (event) => {
      if (!event || !event.scriptId || debuggerPatchedScriptIds.has(event.scriptId)) return;

      const scriptUrl = event.url || '';
      inlineInjectChain = inlineInjectChain.then(async () => {
        if (debuggerPatchedScriptIds.has(event.scriptId)) return;

        let paused = false;
        try {
          await client.Debugger.pause();
          paused = true;

          if (debuggerPatchedScriptIds.has(event.scriptId)) return;

          const sourceRes = await client.Debugger.getScriptSource({ scriptId: event.scriptId });
          if (!sourceRes || typeof sourceRes.scriptSource !== 'string' || !sourceRes.scriptSource.trim()) return;

          const sourceCode = this._sanitizeScriptSource(sourceRes.scriptSource);
          if (htmlScriptUtils.isHtmlContent(sourceCode)) return;
          if (this._sourceLooksInstrumented(sourceCode)) return;

          const tagMap = this._findTagMapForInlineScript(tagsByScriptAndLoc, scriptUrl, sourceCode);
          if (!tagMap || tagMap.size === 0) return;

          const { ast } = this._parseScript(sourceCode);
          const injectedCount = this._injectLogsIntoAst(ast, tagMap);
          if (injectedCount <= 0) return;

          await client.Debugger.setScriptSource({
            scriptId: event.scriptId,
            scriptSource: astring.generate(ast)
          });

          debuggerPatchedScriptIds.add(event.scriptId);
          debuggerPatchedScripts += 1;
          debuggerPatchedFunctions += injectedCount;
          injectedScriptUrls.add(this._normalizeUrl(scriptUrl));
          console.log(`Debugger注入内联脚本: ${scriptUrl} (函数 ${injectedCount} 个)`);
        } catch (e) {
          console.warn(`Debugger内联脚本插桩失败 ${scriptUrl}: ${String(e && e.message ? e.message : e)}`);
        } finally {
          if (paused) {
            try {
              await client.Debugger.resume();
            } catch (resumeError) {
              // ignore resume race
            }
          }
        }
      }).catch(() => {
        // ignore chained injection failure
      });
    };

    client.Debugger.scriptParsed(onScriptParsedForInject);

    if (reload) {
      await client.Page.reload({ ignoreCache: true });
    }

    await new Promise((resolve) => setTimeout(resolve, Math.max(1000, watchMs)));
    await inlineInjectChain;

    for (const prebuilt of prebuiltHtmlByUrl.values()) {
      const verified = await this._verifyHtmlPageInstrumentation(client);
      if (verified) {
        console.log(`页面 DOM 插桩验证通过: ${prebuilt.pageUrl}`);
        continue;
      }
      console.warn(`页面 DOM 未检测到插桩内容，尝试 setDocumentContent 回退: ${prebuilt.pageUrl}`);
      try {
        await client.Page.setDocumentContent({ html: prebuilt.html });
        const verifiedAfterFallback = await this._verifyHtmlPageInstrumentation(client);
        if (verifiedAfterFallback) {
          console.log(`setDocumentContent 回退成功 (${prebuilt.injectedCount} 个函数)`);
        } else {
          console.warn('setDocumentContent 回退后仍未在 DOM 中检测到插桩标记');
        }
      } catch (error) {
        console.warn(`setDocumentContent 回退失败: ${error.message}`);
      }
    }

    let didHydrateMissed = false;
    if (hydrateMissed) {
      const pendingMissedUrls = this._collectMissedScriptUrls(tagsByScriptAndLoc, injectedScriptUrls);
      if (pendingMissedUrls.length > 0) {
        didHydrateMissed = true;
        console.log(`开始补请求未命中脚本 (${pendingMissedUrls.length} 个)...`);
        await this._hydrateMissedScriptRequests(client, pendingMissedUrls);
        await new Promise((resolve) => setTimeout(resolve, Math.max(1000, hydrateMs)));
      }
    }

    try {
      client.Fetch.requestPaused.detach(onRequestPaused);
    } catch (e) {
      // ignore
    }
    try {
      client.Debugger.scriptParsed.detach(onScriptParsedForInject);
    } catch (e) {
      // ignore
    }

    patchedScripts += debuggerPatchedScripts;
    patchedFunctions += debuggerPatchedFunctions;

    await client.Fetch.disable();

    const totalTargetScripts = tagsByScriptAndLoc.size;
    const missedCount = Math.max(0, totalTargetScripts - patchedScripts);
    console.log(`Fetch注入覆盖: 目标脚本 ${totalTargetScripts}，已注入 ${patchedScripts}，未注入 ${missedCount}`);
    if (warmedOnlyScriptUrls.size > 0) {
      console.log(`Fetch预热命中(未计入执行注入): ${warmedOnlyScriptUrls.size}`);
    }
    if (missedCount > 0) {
      const missedUrls = [];
      for (const key of tagsByScriptAndLoc.keys()) {
        const normalized = this._normalizeUrl(key);
        if (!injectedScriptUrls.has(normalized)) {
          const status = seenTargetScriptUrls.has(normalized) ? '已请求但未注入' : '监听窗口内未请求';
          missedUrls.push(`${key} (${status})`);
        }
      }
      if (missedUrls.length > 0) {
        console.warn(`未覆盖脚本明细:\n- ${missedUrls.join('\n- ')}`);
      }
    }

    return {
      mapFilePath,
      patchedScripts,
      patchedFunctions,
      reloaded: !!reload,
      watchedMs: watchMs,
      logMinIntervalMs: this.logMinIntervalMs,
      hydratedMissed: didHydrateMissed,
      warmedOnlyCount: warmedOnlyScriptUrls.size
    };
  }

  async collectConsoleFunctionLogs(options = {}) {
    const {
      inputDir = 'cdp-ast-output',
      mapFile = null,
      outputFile = 'cdp-ast-output/runtime-function-logs.json',
      watchMs = 30000
    } = options;

    const absoluteInputDir = path.resolve(process.cwd(), inputDir);
    const mapFilePath = mapFile
      ? path.resolve(process.cwd(), mapFile)
      : path.join(absoluteInputDir, 'function-tag-map.json');
    const outputFilePath = path.resolve(process.cwd(), outputFile);

    if (!fs.existsSync(mapFilePath)) {
      throw new Error(`映射文件不存在: ${mapFilePath}`);
    }

    const outputDir = path.dirname(outputFilePath);
    fs.mkdirSync(outputDir, { recursive: true });

    const client = await this.connectionManager.connect();
    await this.connectionManager.enableDomains(['Runtime', 'Page']);

    const mapJson = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));
    const records = [];
    const seen = new Set();

    const persistSnapshot = () => {
      const snapshot = {
        generatedAt: new Date().toISOString(),
        mapFilePath,
        watchMs,
        count: records.length,
        uniqueTagCount: seen.size,
        records
      };
      fs.writeFileSync(outputFilePath, JSON.stringify(snapshot, null, 2), 'utf8');
    };

    const onConsoleCalled = (event) => {
      try {
        if (!event || event.type !== 'log' || !Array.isArray(event.args) || event.args.length === 0) return;

        const firstArg = this._readConsoleArgValue(event.args[0]);
        if (typeof firstArg !== 'string' || !mapJson[firstArg]) return;

        const secondArg = event.args.length > 1 ? this._readConsoleArgValue(event.args[1]) : null;
        const thirdArg = event.args.length > 2 ? this._readConsoleArgValue(event.args[2]) : null;
        const meta = mapJson[firstArg] || {};
        const record = {
          tag: firstArg,
          loggedAt: this._normalizeLogTime(secondArg, event.timestamp),
          rawTimeArg: secondArg,
          callStack: typeof thirdArg === 'string' ? thirdArg : null,
          component: this._buildComponentMeta(meta),
          tags: Array.isArray(meta.tags) ? meta.tags : [],
          scriptUrl: meta.scriptUrl || '',
          location: meta.location || null
        };

        records.push(record);
        seen.add(firstArg);
        persistSnapshot();
        console.log(`捕获函数标签: ${record.tag} @ ${record.loggedAt}`);
      } catch (e) {
        // ignore single event parse failure
      }
    };

    client.Runtime.consoleAPICalled(onConsoleCalled);
    try {
      persistSnapshot();
      await new Promise((resolve) => setTimeout(resolve, Math.max(1000, watchMs)));
    } finally {
      try {
        client.Runtime.consoleAPICalled.detach(onConsoleCalled);
      } catch (e) {
        // ignore
      }
      persistSnapshot();
    }

    return {
      mapFilePath,
      outputFile: outputFilePath,
      logCount: records.length,
      uniqueTagCount: seen.size,
      watchedMs: watchMs
    };
  }

  async collectAllConsoleOutput(options = {}) {
    const {
      outputFile = 'cdp-ast-output/console-output.json',
      watchMs = 30000
    } = options;

    const outputFilePath = path.resolve(process.cwd(), outputFile);
    const outputDir = path.dirname(outputFilePath);
    fs.mkdirSync(outputDir, { recursive: true });

    const client = await this.connectionManager.connect();
    await this.connectionManager.enableDomains(['Runtime', 'Page']);

    const records = [];

    const persistSnapshot = () => {
      const snapshot = {
        generatedAt: new Date().toISOString(),
        watchMs,
        count: records.length,
        records
      };
      fs.writeFileSync(outputFilePath, JSON.stringify(snapshot, null, 2), 'utf8');
    };

    const onConsoleCalled = (event) => {
      try {
        if (!event || !Array.isArray(event.args)) return;

        const args = event.args.map((arg) => this._serializeConsoleArg(arg));
        const record = {
          type: event.type || 'log',
          loggedAt: this._normalizeLogTime(null, event.timestamp),
          args,
          stackTrace: event.stackTrace || null,
          executionContextId: event.executionContextId ?? null
        };

        records.push(record);
        persistSnapshot();
        const preview = args.map((v) => {
          const text = typeof v === 'string' ? v : JSON.stringify(v);
          return text.length > 80 ? `${text.slice(0, 80)}…` : text;
        }).join(', ');
        console.log(`[${record.type}] ${preview}`);
      } catch (e) {
        // ignore single event parse failure
      }
    };

    client.Runtime.consoleAPICalled(onConsoleCalled);
    try {
      persistSnapshot();
      await new Promise((resolve) => setTimeout(resolve, Math.max(1000, watchMs)));
    } finally {
      try {
        client.Runtime.consoleAPICalled.detach(onConsoleCalled);
      } catch (e) {
        // ignore
      }
      persistSnapshot();
    }

    return {
      outputFile: outputFilePath,
      logCount: records.length,
      watchedMs: watchMs
    };
  }

  async dedupeRuntimeFunctionLogs(options = {}) {
    const {
      inputDir = 'cdp-ast-output',
      mapFile = null,
      logsFile = 'cdp-ast-output/runtime-function-logs.json',
      outputFile = 'cdp-ast-output/runtime-function-logs.deduped.json'
    } = options;

    const absoluteInputDir = path.resolve(process.cwd(), inputDir);
    const mapFilePath = mapFile
      ? path.resolve(process.cwd(), mapFile)
      : path.join(absoluteInputDir, 'function-tag-map.json');
    const logsFilePath = path.resolve(process.cwd(), logsFile);
    const outputFilePath = path.resolve(process.cwd(), outputFile);

    if (!fs.existsSync(mapFilePath)) {
      throw new Error(`映射文件不存在: ${mapFilePath}`);
    }
    if (!fs.existsSync(logsFilePath)) {
      throw new Error(`运行时日志文件不存在: ${logsFilePath}`);
    }

    const mapJson = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));
    const rawLogJson = JSON.parse(fs.readFileSync(logsFilePath, 'utf8'));
    const records = Array.isArray(rawLogJson) ? rawLogJson : (rawLogJson.records || []);

    const byTag = new Map();
    const sourceCache = new Map();
    const htmlContextCache = new Map();
    for (const item of records) {
      const tag = item && item.tag ? String(item.tag) : '';
      if (!tag || byTag.has(tag)) continue;

      const mapEntry = mapJson[tag] || null;
      const normalized = await this._normalizeHtmlMapEntryLocation(
        tag,
        mapEntry,
        mapJson,
        sourceCache,
        htmlContextCache
      );
      byTag.set(
        normalized.tag,
        await this._buildDedupedLogRecord(normalized.tag, normalized.mapEntry, sourceCache, item)
      );
    }

    let htmlAddedCount = 0;
    for (const [tag, mapEntry] of Object.entries(mapJson)) {
      if (/^inline-script-\d+::/i.test(String(tag))) continue;

      const normalized = await this._normalizeHtmlMapEntryLocation(
        tag,
        mapEntry,
        mapJson,
        sourceCache,
        htmlContextCache
      );
      if (!normalized.tag || byTag.has(normalized.tag)) continue;
      if (!this._isHtmlScriptMapEntry(normalized.tag, normalized.mapEntry)) continue;

      byTag.set(
        normalized.tag,
        await this._buildDedupedLogRecord(normalized.tag, normalized.mapEntry, sourceCache, null)
      );
      htmlAddedCount += 1;
    }

    const outputDir = path.dirname(outputFilePath);
    fs.mkdirSync(outputDir, { recursive: true });
    const dedupedRecords = Array.from(byTag.values());
    fs.writeFileSync(outputFilePath, JSON.stringify({
      generatedAt: new Date().toISOString(),
      sourceLogsFile: logsFilePath,
      mapFilePath,
      count: dedupedRecords.length,
      htmlMapAddedCount: htmlAddedCount,
      records: dedupedRecords
    }, null, 2), 'utf8');

    return {
      mapFilePath,
      sourceLogsFile: logsFilePath,
      outputFile: outputFilePath,
      dedupedCount: dedupedRecords.length,
      htmlAddedCount
    };
  }

  async buildFunctionCallGraph(options = {}) {
    const {
      inputDir = 'cdp-ast-output',
      mapFile = null,
      dedupedFile = null,
      consoleFile = null,
      outputFile = null,
      includeExternal = false
    } = options;

    const absoluteInputDir = path.resolve(process.cwd(), inputDir);
    const mapFilePath = mapFile
      ? path.resolve(process.cwd(), mapFile)
      : path.join(absoluteInputDir, 'function-tag-map.json');
    const dedupedFilePath = dedupedFile
      ? path.resolve(process.cwd(), dedupedFile)
      : path.join(absoluteInputDir, 'runtime-function-logs.deduped.json');
    const consoleFilePath = consoleFile
      ? path.resolve(process.cwd(), consoleFile)
      : path.join(absoluteInputDir, 'console-output.json');
    const outputFilePath = outputFile
      ? path.resolve(process.cwd(), outputFile)
      : path.join(absoluteInputDir, 'function-call-graph.json');

    if (!fs.existsSync(mapFilePath)) {
      throw new Error(`映射文件不存在: ${mapFilePath}`);
    }
    if (!fs.existsSync(dedupedFilePath)) {
      throw new Error(`去重日志文件不存在: ${dedupedFilePath}`);
    }

    const mapJson = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));
    const dedupedJson = JSON.parse(fs.readFileSync(dedupedFilePath, 'utf8'));
    const dedupedRecords = Array.isArray(dedupedJson) ? dedupedJson : (dedupedJson.records || []);

    const consoleStackByTag = this._loadConsoleStacksByTag(consoleFilePath);
    const executedTags = new Set(dedupedRecords.map((item) => String(item.tag || '')).filter(Boolean));
    const tagIndexes = this._buildCallGraphTagIndexes(mapJson, executedTags);
    const selfStackIndex = this._buildSelfStackIndex(
      dedupedRecords,
      consoleStackByTag,
      tagIndexes
    );
    const callSiteResolver = this._createCallSiteResolver(mapJson, selfStackIndex);

    const edgeMap = new Map();
    const callSiteNodes = new Map();
    const unresolvedFrames = [];
    let stackObservationCount = 0;

    for (const record of dedupedRecords) {
      const calleeTag = String(record.tag || '');
      if (!calleeTag) continue;

      const consoleEntry = consoleStackByTag.get(calleeTag) || null;
      const callStack = record.callStack
        || (consoleEntry && consoleEntry.stackText)
        || null;
      const frames = this._parseCallStack(callStack);
      if (frames.length === 0) continue;

      stackObservationCount += 1;
      let currentCalleeTag = calleeTag;

      for (let i = 1; i < frames.length; i += 1) {
        const callerFrame = this._mergeConsoleCallFrame(
          frames[i],
          consoleEntry && consoleEntry.callFrames,
          i
        );
        const calleeFrame = this._mergeConsoleCallFrame(
          frames[i - 1],
          consoleEntry && consoleEntry.callFrames,
          i - 1
        );
        const callerTag = this._resolveStackFrameToTag(callerFrame, {
          tagIndexes,
          selfStackIndex,
          executedTags,
          mapJson
        });

        if (callerTag) {
          const statement = callSiteResolver.resolve({
            callerTag,
            calleeTag: currentCalleeTag,
            callerFrame,
            calleeFrame
          });
          const callSiteNode = this._buildCallSiteNode(
            callerTag,
            statement,
            callerFrame,
            mapJson,
            dedupedRecords
          );
          callSiteNodes.set(callSiteNode.id, callSiteNode);
          this._addCallGraphEdge(edgeMap, callSiteNode.id, currentCalleeTag, {
            callerFrame,
            calleeFrame,
            sourceTag: calleeTag,
            callerTag,
            calleeTag: currentCalleeTag,
            statement,
            callSiteNode
          });
          currentCalleeTag = callerTag;
        } else {
          unresolvedFrames.push({
            sourceTag: calleeTag,
            frame: callerFrame,
            calleeTag: currentCalleeTag
          });
          if (includeExternal) {
            const externalId = this._externalNodeId(callerFrame);
            this._addCallGraphEdge(edgeMap, externalId, currentCalleeTag, {
              callerFrame,
              calleeFrame,
              sourceTag: calleeTag,
              external: true
            });
            currentCalleeTag = externalId;
          }
        }
      }
    }

    const nodeMeta = new Map();
    for (const tag of executedTags) {
      nodeMeta.set(tag, this._buildCallGraphNodeMeta(tag, mapJson[tag], dedupedRecords));
    }
    if (includeExternal) {
      for (const edge of edgeMap.values()) {
        if (edge.from.startsWith('__external__') && !nodeMeta.has(edge.from)) {
          nodeMeta.set(edge.from, {
            id: edge.from,
            functionName: edge.from.replace(/^__external__:/, ''),
            scriptUrl: '',
            executed: false,
            external: true
          });
        }
      }
    }

    const functionNodes = Array.from(executedTags)
      .filter((id) => nodeMeta.has(id))
      .map((id) => nodeMeta.get(id))
      .sort((a, b) => String(a.functionName).localeCompare(String(b.functionName)));

    const callSiteNodeList = Array.from(callSiteNodes.values())
      .sort((a, b) => String(a.functionName).localeCompare(String(b.functionName))
        || String(a.statement && a.statement.text).localeCompare(String(b.statement && b.statement.text)));

    const edges = Array.from(edgeMap.values())
      .sort((a, b) => b.count - a.count || String(a.from).localeCompare(String(b.from)));

    const adjacency = this._buildCallGraphAdjacency(callSiteNodeList, functionNodes, edges);
    const mermaid = this._buildCallGraphMermaid(callSiteNodeList, functionNodes, edges);
    const output = {
      generatedAt: new Date().toISOString(),
      mapFilePath,
      dedupedFilePath,
      consoleFilePath: fs.existsSync(consoleFilePath) ? consoleFilePath : null,
      executedFunctionCount: executedTags.size,
      stackObservationCount,
      callSiteNodeCount: callSiteNodeList.length,
      functionNodeCount: functionNodes.length,
      edgeCount: edges.length,
      unresolvedFrameCount: unresolvedFrames.length,
      lookup: adjacency.lookup,
      callSiteNodes: callSiteNodeList,
      functionNodes,
      edges,
      unresolvedFrames,
      mermaid
    };

    const outputDir = path.dirname(outputFilePath);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputFilePath, JSON.stringify(output, null, 2), 'utf8');

    const mermaidPath = outputFilePath.replace(/\.json$/i, '.mmd');
    fs.writeFileSync(mermaidPath, mermaid, 'utf8');

    return {
      mapFilePath,
      dedupedFilePath,
      consoleFilePath: fs.existsSync(consoleFilePath) ? consoleFilePath : null,
      outputFile: outputFilePath,
      mermaidFile: mermaidPath,
      executedFunctionCount: executedTags.size,
      callSiteNodeCount: callSiteNodeList.length,
      functionNodeCount: functionNodes.length,
      edgeCount: edges.length,
      unresolvedFrameCount: unresolvedFrames.length
    };
  }

  async _collectScriptEntries() {
    const {
      client = null,
      reloadBeforeCollect = false,
      settleMs = 3000
    } = arguments[0] || {};
    const merged = new Map();

    // 来源1：Debugger 级别脚本，通常覆盖面更大（包含动态加载脚本）
    try {
      const debuggerScripts = await this.connectionManager.getScripts();
      debuggerScripts.forEach((item, idx) => {
        const key = item.url || `script-id:${item.scriptId || idx}`;
        if (!merged.has(key)) {
          merged.set(key, {
            url: item.url || '',
            scriptId: item.scriptId || null
          });
        }
      });
    } catch (error) {
      console.warn('获取 Debugger 脚本列表失败:', error.message);
    }

    // 来源2：DOM 脚本标签，作为补充
    try {
      const scripts = await this.fileSystem.getScripts();
      scripts.forEach((item) => {
        if (!item || !item.url) return;
        const key = item.url;
        if (!merged.has(key)) {
          merged.set(key, {
            url: item.url,
            scriptId: null
          });
        }
      });
    } catch (error) {
      console.warn('获取页面脚本标签失败:', error.message);
    }

    // 来源3：监听运行时脚本解析与网络响应，补齐动态加载脚本
    if (client) {
      try {
        const liveEntries = await this._collectLiveScriptCandidates(client, {
          reload: !!reloadBeforeCollect,
          settleMs
        });
        liveEntries.forEach((item, idx) => {
          if (!item || (!item.url && !item.scriptId)) return;
          const key = item.url || `live-script-id:${item.scriptId || idx}`;
          if (!merged.has(key)) {
            merged.set(key, {
              url: item.url || '',
              scriptId: item.scriptId || null
            });
          }
        });
      } catch (error) {
        console.warn('补充动态脚本列表失败:', error.message);
      }
    }

    const list = Array.from(merged.values());
    return list.filter((s) => s.url || s.scriptId);
  }

  async _collectLiveScriptCandidates(client, options = {}) {
    const {
      reload = false,
      settleMs = 3000
    } = options;

    const byUrl = new Map();
    const onParsed = (event) => {
      if (!event || !event.url) return;
      const url = String(event.url || '');
      if (!url) return;
      const prev = byUrl.get(url) || { url, scriptId: null };
      if (event.scriptId && this._isUsableScriptId(event.scriptId)) {
        prev.scriptId = event.scriptId;
      }
      byUrl.set(url, prev);
    };

    const onResponse = (event) => {
      if (!event || !event.response || !event.response.url) return;
      const url = String(event.response.url || '');
      if (!url) return;
      const resourceType = String(event.type || '');
      const mimeType = String(event.response.mimeType || '').toLowerCase();
      const isScriptLike = resourceType === 'Script'
        || mimeType.includes('javascript')
        || mimeType.includes('ecmascript');
      const isHtmlLike = resourceType === 'Document' || mimeType.includes('html');
      if (!isScriptLike && !isHtmlLike) return;
      if (!byUrl.has(url)) byUrl.set(url, { url, scriptId: null });
    };

    client.Debugger.scriptParsed(onParsed);
    client.Network.responseReceived(onResponse);
    try {
      if (reload) {
        await client.Page.reload({ ignoreCache: true });
      } else {
        await client.Runtime.evaluate({
          expression: 'void 0',
          returnByValue: true
        });
      }
      await new Promise((resolve) => setTimeout(resolve, Math.max(800, settleMs)));
    } finally {
      try {
        client.Debugger.scriptParsed.detach(onParsed);
      } catch (e) {
        // ignore
      }
      try {
        client.Network.responseReceived.detach(onResponse);
      } catch (e) {
        // ignore
      }
    }

    return Array.from(byUrl.values());
  }

  async _buildScriptIdIndex() {
    const index = new Map();
    try {
      const scripts = await this.connectionManager.getScripts();
      scripts.forEach((script) => {
        if (!script || !script.scriptId || !script.url) return;
        if (!this._isUsableScriptId(script.scriptId)) return;
        const normalized = this._normalizeUrl(script.url);
        if (!index.has(normalized)) {
          index.set(normalized, []);
        }
        index.get(normalized).push(script.scriptId);
      });
    } catch (error) {
      // ignore, caller will fallback
    }
    return index;
  }

  async _buildLiveScriptIdIndex(client, options = {}) {
    const {
      triggerReload = false,
      settleMs = 1500
    } = options;

    const index = new Map();
    const onParsed = (event) => {
      if (!event || !event.scriptId || !event.url) return;
      if (!this._isUsableScriptId(event.scriptId)) return;
      const normalized = this._normalizeUrl(event.url);
      if (!index.has(normalized)) index.set(normalized, []);
      index.get(normalized).push(event.scriptId);
    };

    client.Debugger.scriptParsed(onParsed);
    try {
      if (triggerReload) {
        await client.Page.reload({ ignoreCache: true });
      } else {
        // 尝试触发少量脚本解析活动，让事件队列有机会补齐
        await client.Runtime.evaluate({
          expression: 'void 0',
          returnByValue: true
        });
      }
      await new Promise((resolve) => setTimeout(resolve, settleMs));
    } finally {
      try {
        client.Debugger.scriptParsed.detach(onParsed);
      } catch (e) {
        // ignore detach failure
      }
    }

    return index;
  }

  _pickScriptIdByUrl(index, url) {
    if (!index || !url) return null;
    const normalized = this._normalizeUrl(url);
    const ids = index.get(normalized);
    if (ids && ids.length > 0) return ids[ids.length - 1];

    // 回退：宽松匹配（处理 hash/query 差异）
    for (const [k, value] of index.entries()) {
      if (k.includes(normalized) || normalized.includes(k)) {
        if (value && value.length > 0) return value[value.length - 1];
      }
    }
    return null;
  }

  _isUsableScriptId(scriptId) {
    const id = String(scriptId || '');
    if (!id) return false;
    // 排除本项目回退逻辑中构造的伪ID（script_0 / script_1 ...）
    if (/^script_\d+$/i.test(id)) return false;
    return true;
  }

  _countIndexedScriptIds(index) {
    let count = 0;
    for (const ids of index.values()) {
      count += Array.isArray(ids) ? ids.length : 0;
    }
    return count;
  }

  _normalizeUrl(url) {
    return String(url || '').split('#')[0].split('?')[0];
  }

  _looksLikeJavaScriptResponse(event) {
    const resourceType = String(event && event.resourceType ? event.resourceType : '');
    if (resourceType === 'Script') return true;

    const url = String(event && event.request && event.request.url ? event.request.url : '');
    if (/\.m?js($|[?#])/i.test(url)) return true;

    const headers = Array.isArray(event && event.responseHeaders) ? event.responseHeaders : [];
    for (const h of headers) {
      const name = String(h && h.name ? h.name : '').toLowerCase();
      if (name !== 'content-type') continue;
      const value = String(h && h.value ? h.value : '').toLowerCase();
      if (value.includes('javascript') || value.includes('ecmascript') || value.includes('application/x-javascript')) {
        return true;
      }
    }
    return false;
  }

  _isExecutableScriptRequest(event) {
    const resourceType = String(event && event.resourceType ? event.resourceType : '');
    if (resourceType === 'Script') return true;

    const headers = event && event.request && event.request.headers ? event.request.headers : {};
    const normalized = {};
    for (const [k, v] of Object.entries(headers || {})) {
      normalized[String(k).toLowerCase()] = String(v || '').toLowerCase();
    }
    const secFetchDest = normalized['sec-fetch-dest'] || '';
    if (secFetchDest === 'script') return true;
    return false;
  }

  _canReadResponseBody(event) {
    if (!event) return false;
    if (event.responseErrorReason) return false;
    if (typeof event.responseStatusCode !== 'number') return false;
    const status = event.responseStatusCode;
    if ([301, 302, 303, 307, 308, 204, 304].includes(status)) return false;
    return true;
  }

  _findTagMapForRuntimeUrl(tagsByScriptAndLoc, runtimeUrl) {
    if (!runtimeUrl) return null;
    if (tagsByScriptAndLoc.has(runtimeUrl)) return tagsByScriptAndLoc.get(runtimeUrl);

    const normalizedRuntime = this._normalizeUrl(runtimeUrl);
    if (tagsByScriptAndLoc.has(normalizedRuntime)) return tagsByScriptAndLoc.get(normalizedRuntime);

    const runtimeBase = this._extractScriptSignature(normalizedRuntime);
    for (const [key, value] of tagsByScriptAndLoc.entries()) {
      const normalizedKey = this._normalizeUrl(key);
      if (normalizedKey === normalizedRuntime) return value;
      if (normalizedRuntime.includes(normalizedKey) || normalizedKey.includes(normalizedRuntime)) return value;

      const keyBase = this._extractScriptSignature(normalizedKey);
      if (runtimeBase && keyBase && runtimeBase === keyBase) return value;
    }
    return null;
  }

  _extractScriptSignature(url) {
    const raw = String(url || '').replace(/\\/g, '/');
    const filename = raw.split('/').pop() || raw;
    const vmClean = filename.replace(/^VM\d+\s*/i, '').replace(/^M\d+\s*/i, '');
    const jsLike = vmClean.match(/([a-zA-Z0-9_.~\-]+\.js)/);
    return jsLike ? jsLike[1] : vmClean;
  }

  _collectMissedScriptUrls(tagsByScriptAndLoc, injectedScriptUrls) {
    const missed = [];
    for (const key of tagsByScriptAndLoc.keys()) {
      const normalized = this._normalizeUrl(key);
      if (!injectedScriptUrls.has(normalized)) {
        missed.push(key);
      }
    }
    return missed;
  }

  async _hydrateMissedScriptRequests(client, urls) {
    const unique = Array.from(new Set((urls || []).filter(Boolean)));
    if (unique.length === 0) return;

    const jsArrayLiteral = JSON.stringify(unique);
    // 仅触发网络请求，不执行脚本逻辑，给 Fetch 拦截器补注入机会
    const expression = `(
      async () => {
        const urls = ${jsArrayLiteral};
        for (const u of urls) {
          try {
            await fetch(u, {
              method: 'GET',
              mode: 'no-cors',
              credentials: 'include',
              cache: 'reload'
            });
          } catch (e) {
            // ignore per-url failure
          }
        }
        return urls.length;
      }
    )()`;

    try {
      await client.Runtime.evaluate({
        expression,
        awaitPromise: true,
        returnByValue: true
      });
    } catch (e) {
      // ignore hydrate request errors
    }
  }

  _sanitizeFetchResponseHeaders(headers, isHtmlDocument = false) {
    const blocked = new Set([
      'content-length',
      'content-encoding',
      'transfer-encoding'
    ]);

    const result = [];
    for (const h of headers) {
      const name = String(h.name || '').toLowerCase();
      if (!name || blocked.has(name)) continue;
      if (isHtmlDocument && name === 'content-type') continue;
      result.push({ name: h.name, value: h.value });
    }

    const hasContentType = result.some((h) => String(h.name).toLowerCase() === 'content-type');
    if (!hasContentType) {
      result.push({
        name: 'Content-Type',
        value: isHtmlDocument
          ? 'text/html; charset=utf-8'
          : 'application/javascript; charset=utf-8'
      });
    }

    return result;
  }

  async _watchAndInjectNewScripts(options) {
    const {
      client,
      tagsByScriptAndLoc,
      watchMs
    } = options;

    let patchedScripts = 0;
    let patchedFunctions = 0;
    const patchedScriptIds = new Set();

    const onParsed = async (event) => {
      try {
        if (!event || !event.scriptId || !event.url) return;
        if (patchedScriptIds.has(event.scriptId)) return;

        const tagMapForScript = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, event.url);
        if (!tagMapForScript || tagMapForScript.size === 0) return;

        const sourceRes = await client.Debugger.getScriptSource({ scriptId: event.scriptId });
        if (!sourceRes || typeof sourceRes.scriptSource !== 'string') return;

        const { ast } = this._parseScript(sourceRes.scriptSource);
        const injectedCount = this._injectLogsIntoAst(ast, tagMapForScript);
        if (injectedCount <= 0) return;

        await client.Debugger.setScriptSource({
          scriptId: event.scriptId,
          scriptSource: astring.generate(ast)
        });

        patchedScriptIds.add(event.scriptId);
        patchedScripts += 1;
        patchedFunctions += injectedCount;
        console.log(`监听注入成功: ${event.url} (函数 ${injectedCount} 个)`);
      } catch (e) {
        // 监听路径失败不终止主流程
      }
    };

    client.Debugger.scriptParsed(onParsed);
    try {
      await new Promise((resolve) => setTimeout(resolve, Math.max(1000, watchMs)));
    } finally {
      try {
        client.Debugger.scriptParsed.detach(onParsed);
      } catch (e) {
        // ignore
      }
    }

    return { patchedScripts, patchedFunctions };
  }

  async _getScriptSource(client, entry, options = {}) {
    const timeoutMs = options.timeoutMs ?? this.defaultScriptSourceTimeoutMs;
    const label = entry.url || entry.scriptId || 'unknown';
    return this._withTimeout(
      this._getScriptSourceImpl(client, entry),
      timeoutMs,
      `读取脚本源码 ${label}`
    );
  }

  async _getScriptSourceImpl(client, entry) {
    // 优先通过 scriptId 获取源码（最准确）
    if (entry.scriptId) {
      try {
        const res = await client.Debugger.getScriptSource({ scriptId: entry.scriptId });
        if (res && typeof res.scriptSource === 'string' && res.scriptSource.length > 0) {
          return res.scriptSource;
        }
      } catch (error) {
        // 降级到 fetch
      }
    }

    if (!entry.url) {
      throw new Error('脚本无 URL 且无法通过 scriptId 获取源码');
    }

    const inlineMatch = String(entry.url || '').match(/^inline-script-(\d+)$/i);
    if (inlineMatch) {
      try {
        const scriptIndex = Number.parseInt(inlineMatch[1], 10);
        const expr = `(() => {
          const scripts = document.querySelectorAll('script:not([src])');
          const el = scripts[${Number.isFinite(scriptIndex) ? scriptIndex : 0}];
          return el ? (el.text || el.textContent || '') : null;
        })()`;
        const { result } = await client.Runtime.evaluate({
          expression: expr,
          returnByValue: true
        });
        if (result && typeof result.value === 'string' && result.value.length > 0) {
          return this._sanitizeScriptSource(result.value);
        }
      } catch (e) {
        // continue fallback
      }
    }

    // 先尝试 Node 侧请求，绕过页面上下文 CORS/CSP 限制
    try {
      const nodeFetched = await this._fetchScriptSourceViaNode(entry.url);
      if (typeof nodeFetched === 'string' && nodeFetched.length > 0) {
        return this._sanitizeScriptSource(nodeFetched);
      }
    } catch (e) {
      // continue fallback
    }

    // 使用页面上下文 fetch，尽量带上 cookie/session
    const expr = `(
      async () => {
        try {
          const response = await fetch(${JSON.stringify(entry.url)}, { credentials: 'include' });
          if (!response.ok) return null;
          return await response.text();
        } catch (e) {
          return null;
        }
      }
    )()`;

    const { result } = await client.Runtime.evaluate({
      expression: expr,
      awaitPromise: true,
      returnByValue: true
    });

    if (result && typeof result.value === 'string' && result.value.length > 0) {
      return this._sanitizeScriptSource(result.value);
    }

    throw new Error('无法读取脚本源码');
  }

  async _fetchScriptSourceViaNode(url, redirectLeft = 4) {
    if (!url || !/^https?:\/\//i.test(String(url))) return null;
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;

    const body = await new Promise((resolve, reject) => {
      const req = client.get({
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || undefined,
        path: `${parsed.pathname || ''}${parsed.search || ''}`,
        headers: {
          'User-Agent': 'Mozilla/5.0 CDP-AST-Exporter',
          Accept: 'application/javascript, text/javascript, */*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br'
        }
      }, (res) => {
        const status = Number(res.statusCode || 0);
        if ([301, 302, 303, 307, 308].includes(status) && res.headers.location && redirectLeft > 0) {
          const nextUrl = new URL(res.headers.location, url).toString();
          res.resume();
          resolve(this._fetchScriptSourceViaNode(nextUrl, redirectLeft - 1));
          return;
        }
        if (status < 200 || status >= 300) {
          res.resume();
          reject(new Error(`HTTP ${status}`));
          return;
        }

        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          try {
            const buffer = Buffer.concat(chunks);
            const encoding = String(res.headers['content-encoding'] || '').toLowerCase();
            const decoded = this._decodeHttpBody(buffer, encoding);
            resolve(decoded.toString('utf8'));
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('error', reject);
      req.setTimeout(12000, () => {
        req.destroy(new Error('request timeout'));
      });
    });

    return typeof body === 'string' ? body : null;
  }

  _decodeHttpBody(buffer, contentEncoding) {
    if (!contentEncoding || contentEncoding === 'identity') return buffer;
    if (contentEncoding.includes('gzip')) return zlib.gunzipSync(buffer);
    if (contentEncoding.includes('deflate')) return zlib.inflateSync(buffer);
    if (contentEncoding.includes('br')) return zlib.brotliDecompressSync(buffer);
    return buffer;
  }

  _sanitizeScriptSource(source) {
    if (typeof source !== 'string') return '';
    let text = source;
    // 移除 UTF-8 BOM 与常见零宽字符，避免 parser 在 1:0 失败
    text = text.replace(/^\uFEFF/, '').replace(/^\u200B+/, '');
    // 某些响应体可能夹带空字节，影响 Acorn 解析
    text = text.replace(/\u0000/g, '');
    return text;
  }

  _isHtmlLikeUrl(url) {
    return htmlScriptUtils.isHtmlLikeUrl(url);
  }

  _looksLikeHtmlResponse(event) {
    const resourceType = String(event && event.resourceType ? event.resourceType : '');
    if (resourceType === 'Document') return true;

    const headers = Array.isArray(event && event.responseHeaders) ? event.responseHeaders : [];
    for (const h of headers) {
      const name = String(h && h.name ? h.name : '').toLowerCase();
      if (name !== 'content-type') continue;
      const value = String(h && h.value ? h.value : '').toLowerCase();
      if (value.includes('text/html') || value.includes('application/xhtml')) {
        return true;
      }
    }
    return false;
  }

  _isNavigationDocumentRequest(event) {
    const resourceType = String(event && event.resourceType ? event.resourceType : '');
    if (resourceType === 'Document') return true;

    const headers = event && event.request && event.request.headers ? event.request.headers : {};
    const normalized = {};
    for (const [k, v] of Object.entries(headers || {})) {
      normalized[String(k).toLowerCase()] = String(v || '').toLowerCase();
    }
    return normalized['sec-fetch-dest'] === 'document';
  }

  _pageHasMappedHtmlScripts(tagsByScriptAndLoc, pageUrl) {
    if (!pageUrl || !tagsByScriptAndLoc) return false;
    const normalizedPage = this._normalizeUrl(pageUrl);

    for (const key of tagsByScriptAndLoc.keys()) {
      const keyStr = String(key);
      if (this._normalizeUrl(keyStr) === normalizedPage) return true;
      if (keyStr.startsWith(`${normalizedPage}#script-block-`)) return true;
      if (keyStr.startsWith(`${pageUrl}#script-block-`)) return true;
    }

    const hasInlineAliases = [...tagsByScriptAndLoc.keys()]
      .some((key) => /^inline-script-\d+$/i.test(String(key)));
    return hasInlineAliases && htmlScriptUtils.isHtmlLikeUrl(pageUrl);
  }

  _sourceLooksInstrumented(sourceCode) {
    return typeof sourceCode === 'string'
      && (sourceCode.includes('console.__cdpTagLastLogAt') || sourceCode.includes('__cdpNow = Date.now()'));
  }

  async _fetchHtmlPageSource(client, pageUrl) {
    if (!pageUrl) return null;

    try {
      const nodeFetched = await this._fetchScriptSourceViaNode(pageUrl);
      if (nodeFetched && htmlScriptUtils.isHtmlContent(nodeFetched)) {
        return nodeFetched;
      }
    } catch (e) {
      // continue fallback
    }

    try {
      const { result } = await client.Runtime.evaluate({
        expression: `(
          async () => {
            try {
              const response = await fetch(${JSON.stringify(pageUrl)}, {
                credentials: 'include',
                cache: 'no-store'
              });
              if (!response.ok) return null;
              return await response.text();
            } catch (e) {
              return null;
            }
          }
        )()`,
        awaitPromise: true,
        returnByValue: true
      });
      if (result && typeof result.value === 'string' && htmlScriptUtils.isHtmlContent(result.value)) {
        return result.value;
      }
    } catch (e) {
      // ignore
    }

    return null;
  }

  async _buildPrebuiltHtmlInstrumentations(client, tagsByScriptAndLoc) {
    const map = new Map();
    let activePageUrl = '';

    try {
      const { result } = await client.Runtime.evaluate({
        expression: 'location.href',
        returnByValue: true
      });
      activePageUrl = (result && result.value) ? String(result.value) : '';
    } catch (e) {
      activePageUrl = '';
    }

    const candidateUrls = new Set();
    if (activePageUrl) candidateUrls.add(activePageUrl);
    for (const key of tagsByScriptAndLoc.keys()) {
      const keyStr = String(key);
      if (htmlScriptUtils.isHtmlLikeUrl(keyStr)) {
        candidateUrls.add(keyStr);
      }
      if (keyStr.includes('#script-block-')) {
        candidateUrls.add(keyStr.split('#')[0]);
      }
    }

    for (const pageUrl of candidateUrls) {
      if (!pageUrl || !this._pageHasMappedHtmlScripts(tagsByScriptAndLoc, pageUrl)) continue;
      const normalized = this._normalizeUrl(pageUrl);
      if (map.has(normalized)) continue;

      const rawHtml = await this._fetchHtmlPageSource(client, pageUrl);
      if (!rawHtml) continue;

      const inlineKeys = [];
      const injected = this._injectIntoHtmlDocument(rawHtml, pageUrl, tagsByScriptAndLoc, {
        onBlockInjected: (block) => {
          if (typeof block.domInlineIndex === 'number') {
            inlineKeys.push(`inline-script-${block.domInlineIndex}`);
          }
        }
      });

      if (injected.injectedCount <= 0) continue;

      map.set(normalized, {
        pageUrl,
        html: injected.html,
        injectedCount: injected.injectedCount,
        inlineKeys
      });
      console.log(`预构建 HTML 插桩: ${pageUrl} (函数 ${injected.injectedCount} 个)`);
    }

    return map;
  }

  async _verifyHtmlPageInstrumentation(client) {
    try {
      const { result } = await client.Runtime.evaluate({
        expression: `(() => {
          const scripts = Array.from(document.querySelectorAll('script:not([src])'));
          let markerBlocks = 0;
          let mainInstrumented = false;
          for (const script of scripts) {
            const text = script.textContent || '';
            if (text.includes('console.__cdpTagLastLogAt') || text.includes('__cdpNow = Date.now()')) {
              markerBlocks += 1;
            }
            if (text.includes('pwdFormLogin') && text.includes('console.log(')) {
              mainInstrumented = true;
            }
          }
          return { markerBlocks, mainInstrumented, scriptCount: scripts.length };
        })()`,
        returnByValue: true
      });
      const value = result && result.value ? result.value : null;
      if (!value) return false;
      return !!value.mainInstrumented || Number(value.markerBlocks) >= 2;
    } catch (e) {
      return false;
    }
  }

  _findTagMapForHtmlScriptBlock(tagsByScriptAndLoc, pageUrl, blockOrIndex) {
    const block = blockOrIndex && typeof blockOrIndex === 'object' ? blockOrIndex : null;
    const domIndex = block ? block.domInlineIndex : blockOrIndex;
    const execIndex = block ? block.index : blockOrIndex;

    const candidates = [
      ...htmlScriptUtils.buildHtmlScriptUrlCandidates(pageUrl, domIndex),
      `inline-script-${execIndex}`,
      htmlScriptUtils.buildHtmlScriptBlockUrl(pageUrl, execIndex)
    ];

    for (const candidate of candidates) {
      const found = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, candidate);
      if (found && found.size > 0) return found;
    }
    return null;
  }

  _findTagMapForScriptSource(tagsByScriptAndLoc, scriptUrl, sourceCode) {
    if (sourceCode) {
      let bestInline = null;
      for (const key of tagsByScriptAndLoc.keys()) {
        if (!/^inline-script-\d+$/i.test(String(key))) continue;
        const map = tagsByScriptAndLoc.get(key);
        if (!map || map.size === 0) continue;
        let score = 0;
        try {
          score = this._scoreBlockTagMatches(sourceCode, map);
        } catch (e) {
          score = 0;
        }
        if (!bestInline || score > bestInline.score) {
          bestInline = { map, score };
        }
      }
      if (bestInline && bestInline.score > 0) {
        return bestInline.map;
      }
    }

    const direct = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, scriptUrl);
    if (direct && direct.size > 0) {
      if (!sourceCode) return direct;
      try {
        const score = this._scoreBlockTagMatches(sourceCode, direct);
        if (score > 0) return direct;
      } catch (e) {
        return direct;
      }
    }

    if (/^inline-script-\d+$/i.test(scriptUrl)) {
      return tagsByScriptAndLoc.get(scriptUrl) || null;
    }

    return null;
  }

  _findTagMapForInlineScript(tagsByScriptAndLoc, scriptUrl, sourceCode = null) {
    if (sourceCode) {
      const byContent = this._findTagMapForScriptSource(tagsByScriptAndLoc, scriptUrl, sourceCode);
      if (byContent && byContent.size > 0) return byContent;
    }

    if (!scriptUrl) return null;

    if (/^inline-script-\d+$/i.test(scriptUrl)) {
      return tagsByScriptAndLoc.get(scriptUrl) || null;
    }

    return this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, scriptUrl);
  }

  _splitSourceIntoScriptUnits(sourceCode, baseUrl) {
    const sanitized = this._sanitizeScriptSource(sourceCode);
    if (!sanitized.trim()) return [];

    if (!htmlScriptUtils.isHtmlContent(sanitized)) {
      return [{ scriptUrl: baseUrl || '', code: sanitized, fromHtml: false }];
    }

    const blocks = htmlScriptUtils.extractInlineScriptBlocks(sanitized);
    if (blocks.length === 0) {
      return [];
    }

    return blocks
      .map((block) => {
        const pageUrl = String(baseUrl || '').split('#')[0];
        const contentStart = htmlScriptUtils.getBlockContentStartPosition(sanitized, block);
        return {
          scriptUrl: pageUrl,
          code: this._sanitizeScriptSource(block.content),
          fromHtml: true,
          inlineScriptAlias: `inline-script-${block.domInlineIndex}`,
          htmlContext: {
            pageUrl,
            htmlContent: sanitized,
            contentStartOffset: htmlScriptUtils.getBlockContentStartOffset(block),
            contentStartLine: contentStart.line,
            contentStartColumn: contentStart.column
          }
        };
      })
      .filter((unit) => unit.code && unit.code.trim());
  }

  async _resolveHtmlInlineScriptContext(scriptCode, pageUrl) {
    if (!scriptCode || !pageUrl || !htmlScriptUtils.isHtmlLikeUrl(pageUrl)) {
      return null;
    }

    try {
      const html = await this._fetchScriptSourceViaNode(pageUrl);
      if (!html || !htmlScriptUtils.isHtmlContent(html)) {
        return null;
      }

      const match = htmlScriptUtils.findMatchingInlineScriptBlock(
        html,
        scriptCode,
        (code) => this._sanitizeScriptSource(code)
      );
      if (!match) {
        return null;
      }

      return {
        pageUrl: String(pageUrl).split('#')[0],
        htmlContent: html,
        contentStartOffset: htmlScriptUtils.getBlockContentStartOffset(match.block),
        contentStartLine: match.contentStart.line,
        contentStartColumn: match.contentStart.column
      };
    } catch (e) {
      return null;
    }
  }

  _injectIntoHtmlDocument(html, pageUrl, tagsByScriptAndLoc, options = {}) {
    const { onBlockInjected = null } = options;
    let nextHtml = html;
    let injectedCount = 0;
    const blocks = htmlScriptUtils.extractInlineScriptBlocks(html);
    const pageLevelMap = this._findTagMapForRuntimeUrl(tagsByScriptAndLoc, pageUrl);
    const consumedBlockIndexes = new Set();

    const injectBlock = (block, tagMap) => {
      const scriptCode = this._sanitizeScriptSource(block.content);
      if (!scriptCode.trim() || !tagMap || tagMap.size === 0) {
        return 0;
      }

      const { ast } = this._parseScript(scriptCode);
      const blockInjected = this._injectLogsIntoAst(ast, tagMap);
      if (blockInjected <= 0) {
        return 0;
      }

      const generated = astring.generate(ast);
      const replaced = htmlScriptUtils.replaceInlineScriptBlock(nextHtml, block.index, generated);
      if (!replaced) {
        return 0;
      }

      nextHtml = replaced;
      consumedBlockIndexes.add(block.index);
      if (typeof onBlockInjected === 'function') {
        onBlockInjected(block, blockInjected);
      }
      return blockInjected;
    };

    for (const block of blocks) {
      const tagMap = this._findTagMapForHtmlScriptBlock(tagsByScriptAndLoc, pageUrl, block);
      if (!tagMap || tagMap.size === 0) continue;

      try {
        injectedCount += injectBlock(block, tagMap);
      } catch (e) {
        console.warn(`HTML script-block-${block.domInlineIndex} 插桩失败: ${e.message}`);
      }
    }

    if (pageLevelMap && pageLevelMap.size > 0) {
      const bestBlock = this._findBestHtmlBlockForTagMap(blocks, pageLevelMap, consumedBlockIndexes);
      if (bestBlock) {
        try {
          const added = injectBlock(bestBlock.block, pageLevelMap);
          if (added > 0) {
            injectedCount += added;
          }
        } catch (e) {
          console.warn(`HTML 页面级脚本插桩失败 (${pageUrl}): ${e.message}`);
        }
      }
    }

    return { html: nextHtml, injectedCount };
  }

  _findBestHtmlBlockForTagMap(blocks, tagMap, skipIndexes = new Set()) {
    let best = null;

    for (const block of blocks) {
      if (skipIndexes.has(block.index)) continue;

      const scriptCode = this._sanitizeScriptSource(block.content);
      if (!scriptCode.trim()) continue;

      let score = 0;
      try {
        score = this._scoreBlockTagMatches(scriptCode, tagMap);
      } catch (e) {
        score = 0;
      }

      if (!best || score > best.score) {
        best = { block, score };
      }
    }

    if (!best || best.score <= 0) {
      return null;
    }
    return best;
  }

  _scoreBlockTagMatches(scriptCode, tagMap) {
    const { ast } = this._parseScript(scriptCode);
    let score = 0;

    const visit = (node, parent) => {
      if (!node || typeof node !== 'object') return;

      if (this._isFunctionNode(node) && node.loc && node.body) {
        const fnName = this._resolveFunctionName(node, parent) || '';
        if (this._findTraceInfoForNode(tagMap, node, fnName)) {
          score += 1;
        }
      }

      for (const child of this._iterChildren(node)) {
        visit(child, node);
      }
    };

    visit(ast, null);
    return score;
  }

  _findTraceInfoForNode(tagMapForScript, functionNode, functionName) {
    if (!tagMapForScript || !functionNode || !functionNode.loc) return null;

    const exactKey = `${functionNode.loc.start.line}:${functionNode.loc.start.column}`;
    if (tagMapForScript.has(exactKey)) {
      return tagMapForScript.get(exactKey);
    }

    const targetLine = functionNode.loc.start.line;
    const targetColumn = functionNode.loc.start.column;
    let lineMatches = [];
    let bestColumnMatch = null;
    let bestColumnDiff = Infinity;

    for (const [key, value] of tagMapForScript.entries()) {
      const parts = String(key).split(':');
      if (parts.length !== 2) continue;
      const line = Number.parseInt(parts[0], 10);
      const column = Number.parseInt(parts[1], 10);
      if (!Number.isFinite(line) || !Number.isFinite(column)) continue;

      if (line === targetLine) {
        lineMatches.push(value);
        const diff = Math.abs(column - targetColumn);
        if (diff < bestColumnDiff) {
          bestColumnDiff = diff;
          bestColumnMatch = value;
        }
      }
    }

    if (lineMatches.length === 1) {
      return lineMatches[0];
    }
    if (bestColumnMatch && bestColumnDiff <= 12) {
      return bestColumnMatch;
    }

    if (functionName) {
      for (const value of tagMapForScript.values()) {
        const uniqueKey = String(value.uniqueFunctionKey || '');
        if (uniqueKey.includes(`::${functionName}@`)) {
          return value;
        }
      }
    }

    return null;
  }

  _parseScript(sourceCode) {
    try {
      return {
        ast: acorn.parse(sourceCode, {
          ecmaVersion: 'latest',
          sourceType: 'module',
          locations: true,
          ranges: true,
          allowHashBang: true
        }),
        sourceType: 'module'
      };
    } catch (moduleError) {
      return {
        ast: acorn.parse(sourceCode, {
          ecmaVersion: 'latest',
          sourceType: 'script',
          locations: true,
          ranges: true,
          allowHashBang: true
        }),
        sourceType: 'script'
      };
    }
  }

  _groupTagsByScriptAndLocation(functionTagMap) {
    const grouped = new Map();
    for (const [uniqueFunctionKey, value] of Object.entries(functionTagMap || {})) {
      if (!value || !value.scriptUrl || !value.location) continue;
      const scriptUrl = value.scriptUrl;
      const locSource = value.scriptLocation || value.location;
      const locKey = `${locSource.line}:${locSource.column}`;
      if (!grouped.has(scriptUrl)) grouped.set(scriptUrl, new Map());
      grouped.get(scriptUrl).set(locKey, {
        uniqueFunctionKey,
        tags: Array.isArray(value.tags) ? value.tags : ['general']
      });
    }
    return grouped;
  }

  _readConsoleArgValue(arg) {
    if (!arg) return null;
    if (typeof arg.value !== 'undefined') return arg.value;
    if (typeof arg.unserializableValue !== 'undefined') return arg.unserializableValue;
    if (arg.type === 'string' && typeof arg.description === 'string') return arg.description;
    return null;
  }

  _serializeConsoleArg(arg) {
    const value = this._readConsoleArgValue(arg);
    if (value !== null && value !== undefined) {
      return value;
    }
    if (!arg) return null;
    if (typeof arg.description === 'string' && arg.description) {
      return arg.description;
    }
    if (arg.type) {
      return `[${arg.type}]`;
    }
    return null;
  }

  _loadConsoleStacksByTag(consoleFilePath) {
    const stacks = new Map();
    if (!consoleFilePath || !fs.existsSync(consoleFilePath)) {
      return stacks;
    }

    try {
      const raw = JSON.parse(fs.readFileSync(consoleFilePath, 'utf8'));
      const records = Array.isArray(raw) ? raw : (raw.records || []);
      for (const item of records) {
        const args = Array.isArray(item.args) ? item.args : [];
        const tag = typeof args[0] === 'string' ? args[0] : null;
        const stackText = typeof args[2] === 'string' ? args[2] : null;
        if (!tag || !stackText || stacks.has(tag)) continue;
        stacks.set(tag, {
          stackText,
          callFrames: item.stackTrace && Array.isArray(item.stackTrace.callFrames)
            ? item.stackTrace.callFrames
            : null
        });
      }
    } catch (e) {
      // ignore invalid console output file
    }
    return stacks;
  }

  _parseCallStack(stackText) {
    if (!stackText || typeof stackText !== 'string') return [];

    const frames = [];
    for (const rawLine of stackText.split('\n')) {
      const line = rawLine.trim();
      if (!line || line === 'Error') continue;

      let match = line.match(/^at async (.+?) \((.+?):(\d+):(\d+)\)$/);
      if (match) {
        frames.push(this._makeStackFrame(match[1], match[2], match[3], match[4]));
        continue;
      }

      match = line.match(/^at (.+?) \((.+?):(\d+):(\d+)\)$/);
      if (match) {
        frames.push(this._makeStackFrame(match[1], match[2], match[3], match[4]));
        continue;
      }

      match = line.match(/^at async (.+?):(\d+):(\d+)$/);
      if (match) {
        frames.push(this._makeStackFrame('', match[1], match[2], match[3]));
        continue;
      }

      match = line.match(/^at (.+?):(\d+):(\d+)$/);
      if (match) {
        frames.push(this._makeStackFrame('', match[1], match[2], match[3]));
      }
    }
    return frames;
  }

  _makeStackFrame(rawName, url, line, column) {
    const name = String(rawName || '').trim();
    const normalizedName = name.endsWith('.<anonymous>')
      ? name.slice(0, -'.<anonymous>'.length)
      : name;
    return {
      rawName: name,
      name: normalizedName,
      url: this._normalizeScriptUrl(url),
      line: parseInt(line, 10),
      column: parseInt(column, 10),
      isAnonymous: !name || name === '<anonymous>' || name.endsWith('.<anonymous>')
    };
  }

  _normalizeScriptUrl(url) {
    if (!url) return '';
    return String(url).trim().replace(/\\/g, '/');
  }

  _buildCallGraphTagIndexes(mapJson, executedTags) {
    const byScriptAndName = new Map();
    const byScript = new Map();

    for (const [tag, entry] of Object.entries(mapJson || {})) {
      const scriptUrl = this._normalizeScriptUrl(entry && entry.scriptUrl);
      if (!scriptUrl) continue;

      if (!byScript.has(scriptUrl)) {
        byScript.set(scriptUrl, []);
      }
      byScript.get(scriptUrl).push({ tag, entry });

      const fnName = entry && entry.functionName ? String(entry.functionName) : '';
      if (!fnName) continue;
      const key = `${scriptUrl}::${fnName}`;
      if (!byScriptAndName.has(key)) {
        byScriptAndName.set(key, []);
      }
      byScriptAndName.get(key).push({ tag, entry, executed: executedTags.has(tag) });
    }

    return { byScriptAndName, byScript };
  }

  _buildSelfStackIndex(dedupedRecords, consoleStackByTag, tagIndexes) {
    const selfStackIndex = new Map();
    const addObservation = (tag, stackText) => {
      const frames = this._parseCallStack(stackText);
      if (!frames[0] || !tag) return;
      const frame = frames[0];
      const exactKey = this._stackPositionKey(frame.url, frame.line, frame.column);
      if (!selfStackIndex.has(exactKey)) {
        selfStackIndex.set(exactKey, tag);
      }
      const lineKey = this._stackLineKey(frame.url, frame.line);
      if (!selfStackIndex.has(lineKey)) {
        selfStackIndex.set(lineKey, tag);
      }
    };

    for (const record of dedupedRecords) {
      const tag = String(record.tag || '');
      const consoleEntry = consoleStackByTag.get(tag);
      const stack = record.callStack || (consoleEntry && consoleEntry.stackText) || null;
      addObservation(tag, stack);
    }

    for (const [tag, entry] of consoleStackByTag.entries()) {
      addObservation(tag, entry && entry.stackText);
    }

    return selfStackIndex;
  }

  _stackPositionKey(url, line, column) {
    return `${this._normalizeScriptUrl(url)}@${line}:${column}`;
  }

  _stackLineKey(url, line) {
    return `${this._normalizeScriptUrl(url)}@${line}`;
  }

  _resolveStackFrameToTag(frame, context) {
    const {
      tagIndexes,
      selfStackIndex,
      executedTags,
      mapJson
    } = context;

    if (!frame || !frame.url) return null;

    const exactKey = this._stackPositionKey(frame.url, frame.line, frame.column);
    const lineKey = this._stackLineKey(frame.url, frame.line);

    if (selfStackIndex.has(exactKey)) {
      return selfStackIndex.get(exactKey);
    }
    if (selfStackIndex.has(lineKey)) {
      return selfStackIndex.get(lineKey);
    }

    const fnName = this._extractStackFunctionName(frame);
    if (fnName) {
      const key = `${frame.url}::${fnName}`;
      const candidates = tagIndexes.byScriptAndName.get(key) || [];
      if (candidates.length === 1) {
        return candidates[0].tag;
      }
      const executedCandidates = candidates.filter((item) => item.executed);
      if (executedCandidates.length === 1) {
        return executedCandidates[0].tag;
      }
      if (executedCandidates.length > 1) {
        return this._pickClosestTagByRange(executedCandidates, frame, mapJson);
      }
      if (candidates.length > 1) {
        return this._pickClosestTagByRange(candidates, frame, mapJson);
      }
    }

    if (frame.isAnonymous) {
      const nearestAnonymous = this._resolveAnonymousByNearestSelfLine(
        frame,
        selfStackIndex,
        executedTags
      );
      if (nearestAnonymous) {
        return nearestAnonymous;
      }

      const scriptCandidates = (tagIndexes.byScript.get(frame.url) || [])
        .filter((item) => executedTags.has(item.tag)
          && /^anonymous_/i.test(String(item.entry && item.entry.functionName)));
      if (scriptCandidates.length === 1) {
        return scriptCandidates[0].tag;
      }
    }

    return null;
  }

  _resolveAnonymousByNearestSelfLine(frame, selfStackIndex, executedTags, maxLineDistance = 20) {
    if (!frame || !frame.url || !Number.isFinite(frame.line)) return null;

    let bestTag = null;
    let bestDistance = Number.POSITIVE_INFINITY;
    const prefix = `${frame.url}@`;

    for (const [lineKey, tag] of selfStackIndex.entries()) {
      if (!lineKey.startsWith(prefix) || !executedTags.has(tag)) continue;
      const linePart = lineKey.slice(prefix.length);
      if (linePart.includes(':')) continue;
      const observedLine = parseInt(linePart, 10);
      if (!Number.isFinite(observedLine)) continue;
      const distance = Math.abs(observedLine - frame.line);
      if (distance <= maxLineDistance && distance < bestDistance) {
        bestDistance = distance;
        bestTag = tag;
      }
    }

    return bestTag;
  }

  _extractStackFunctionName(frame) {
    if (!frame) return '';
    const raw = String(frame.rawName || frame.name || '').trim();
    if (!raw || raw === '<anonymous>' || raw.endsWith('.<anonymous>')) {
      return '';
    }
    const lastDot = raw.lastIndexOf('.');
    if (lastDot >= 0) {
      const tail = raw.slice(lastDot + 1);
      if (tail && tail !== '<anonymous>') return tail;
      return '';
    }
    return raw;
  }

  _pickClosestTagByRange(candidates, frame, mapJson) {
    if (!Array.isArray(candidates) || candidates.length === 0) return null;
    if (candidates.length === 1) return candidates[0].tag;

    let bestTag = candidates[0].tag;
    let bestDistance = Number.POSITIVE_INFINITY;
    for (const item of candidates) {
      const entry = mapJson[item.tag] || item.entry || {};
      const sourceFile = entry.sourceFile;
      if (!sourceFile || !fs.existsSync(sourceFile)) {
        continue;
      }
      const sourceCode = fs.readFileSync(sourceFile, 'utf8');
      const offset = this._lineColumnToOffset(sourceCode, frame.line, frame.column);
      if (offset === null) continue;
      const range = entry.range || {};
      if (typeof range.start !== 'number' || typeof range.end !== 'number') continue;
      if (offset >= range.start && offset <= range.end) {
        return item.tag;
      }
      const distance = Math.min(Math.abs(offset - range.start), Math.abs(offset - range.end));
      if (distance < bestDistance) {
        bestDistance = distance;
        bestTag = item.tag;
      }
    }
    return bestTag;
  }

  _lineColumnToOffset(sourceCode, line, column) {
    if (!sourceCode || !Number.isFinite(line) || line <= 0) return null;
    const lines = String(sourceCode).split('\n');
    if (line > lines.length) {
      return null;
    }
    let offset = 0;
    for (let i = 0; i < line - 1; i += 1) {
      offset += lines[i].length + 1;
    }
    return offset + Math.max(0, column);
  }

  _mergeConsoleCallFrame(frame, callFrames, frameIndex) {
    if (!frame) return frame;
    if (!Array.isArray(callFrames) || !callFrames[frameIndex]) {
      return frame;
    }

    const cdpFrame = callFrames[frameIndex];
    return {
      ...frame,
      url: this._normalizeScriptUrl(cdpFrame.url || frame.url),
      line: Number.isFinite(cdpFrame.lineNumber) ? cdpFrame.lineNumber + 1 : frame.line,
      column: Number.isFinite(cdpFrame.columnNumber) ? cdpFrame.columnNumber : frame.column,
      cdpFunctionName: cdpFrame.functionName || ''
    };
  }

  _createCallSiteResolver(mapJson, selfStackIndex) {
    const scriptCache = new Map();
    const tagSelfLineIndex = this._buildTagSelfLineIndex(selfStackIndex);
    const self = this;

    const getScriptBundle = (scriptUrl) => {
      const normalizedUrl = self._normalizeScriptUrl(scriptUrl);
      if (scriptCache.has(normalizedUrl)) {
        return scriptCache.get(normalizedUrl);
      }

      let astFile = null;
      let sourceFile = null;
      for (const entry of Object.values(mapJson || {})) {
        if (self._normalizeScriptUrl(entry && entry.scriptUrl) === normalizedUrl) {
          astFile = entry.astFile || astFile;
          sourceFile = entry.sourceFile || sourceFile;
          if (astFile && sourceFile) break;
        }
      }

      const bundle = {
        ast: null,
        sourceCode: '',
        astFile,
        sourceFile
      };

      if (sourceFile && fs.existsSync(sourceFile)) {
        bundle.sourceCode = fs.readFileSync(sourceFile, 'utf8');
      }
      if (astFile && fs.existsSync(astFile)) {
        try {
          bundle.ast = JSON.parse(fs.readFileSync(astFile, 'utf8'));
        } catch (e) {
          bundle.ast = null;
        }
      }

      scriptCache.set(normalizedUrl, bundle);
      return bundle;
    };

    return {
      resolve({ callerTag, calleeTag, callerFrame, calleeFrame }) {
        const callerEntry = mapJson[callerTag] || {};
        const calleeEntry = mapJson[calleeTag] || {};
        const scriptUrl = callerEntry.scriptUrl || callerFrame.url || '';
        const bundle = getScriptBundle(scriptUrl);
        return self._resolveCallSiteStatement({
          callerTag,
          calleeTag,
          callerEntry,
          calleeEntry,
          callerFrame,
          calleeFrame,
          bundle,
          tagSelfLineIndex
        });
      }
    };
  }

  _buildTagSelfLineIndex(selfStackIndex) {
    const tagSelfLine = new Map();
    for (const [lineKey, tag] of selfStackIndex.entries()) {
      if (lineKey.includes(':')) continue;
      const at = lineKey.lastIndexOf('@');
      if (at < 0) continue;
      const line = parseInt(lineKey.slice(at + 1), 10);
      if (!Number.isFinite(line)) continue;
      if (!tagSelfLine.has(tag)) {
        tagSelfLine.set(tag, line);
      }
    }
    return tagSelfLine;
  }

  _estimateOffsetInFunction(callerTag, callerFrame, callerEntry, tagSelfLineIndex) {
    const range = callerEntry && callerEntry.range ? callerEntry.range : null;
    if (!range || typeof range.start !== 'number' || typeof range.end !== 'number') {
      return null;
    }
    const selfLine = tagSelfLineIndex.get(callerTag);
    if (!Number.isFinite(selfLine) || !callerFrame || !Number.isFinite(callerFrame.line)) {
      return null;
    }

    const lineDelta = callerFrame.line - selfLine;
    if (lineDelta < 0) return null;

    const bodyLength = Math.max(1, range.end - range.start);
    const estimatedSpan = Math.max(12, Math.min(220, Math.floor(bodyLength / 40)));
    const ratio = Math.max(0, Math.min(1, lineDelta / estimatedSpan));
    return range.start + Math.floor(bodyLength * ratio);
  }

  _resolveCallSiteStatement(context) {
    const {
      callerTag,
      calleeTag,
      callerEntry,
      calleeEntry,
      callerFrame,
      calleeFrame,
      bundle,
      tagSelfLineIndex
    } = context;

    const runtimeLoc = {
      url: callerFrame && callerFrame.url ? callerFrame.url : '',
      line: callerFrame && callerFrame.line,
      column: callerFrame && callerFrame.column
    };

    if (!bundle || !bundle.ast || !bundle.sourceCode) {
      return this._buildUnresolvedCallSiteStatement(runtimeLoc, 'missing-ast-or-source');
    }

    const callerRange = callerEntry.range || {};
    const sourceLineCount = String(bundle.sourceCode || '').split('\n').length;
    const canMapRuntimeOffset = Number.isFinite(runtimeLoc.line)
      && runtimeLoc.line > 0
      && runtimeLoc.line <= sourceLineCount;

    const callCandidates = this._findCallExpressionsInRange(bundle.ast, callerRange);
    const matchedCalls = callCandidates.filter((node) => this._callExpressionMatchesCallee(
      node,
      calleeTag,
      calleeEntry,
      calleeFrame
    ));

    let statementNode = null;
    if (matchedCalls.length === 1) {
      statementNode = this._normalizeCallSiteNode(matchedCalls[0], bundle.sourceCode);
    } else if (matchedCalls.length > 1) {
      const offset = canMapRuntimeOffset
        ? this._lineColumnToOffset(bundle.sourceCode, runtimeLoc.line, runtimeLoc.column)
        : null;
      statementNode = offset !== null
        ? this._pickClosestCallSiteNode(matchedCalls, offset, bundle.sourceCode)
        : this._normalizeCallSiteNode(matchedCalls[0], bundle.sourceCode);
    }

    if (!statementNode && callCandidates.length > 0) {
      const estimatedOffset = this._estimateOffsetInFunction(
        callerTag,
        callerFrame,
        callerEntry,
        tagSelfLineIndex
      );
      if (estimatedOffset !== null) {
        statementNode = this._pickClosestCallSiteNode(
          callCandidates,
          estimatedOffset,
          bundle.sourceCode
        );
      } else if (callCandidates.length === 1) {
        statementNode = this._normalizeCallSiteNode(callCandidates[0], bundle.sourceCode);
      }
    }

    if (!statementNode && canMapRuntimeOffset) {
      const offset = this._lineColumnToOffset(
        bundle.sourceCode,
        runtimeLoc.line,
        runtimeLoc.column
      );
      if (offset !== null) {
        const containingNode = this._findSmallestContainingNode(bundle.ast, offset);
        const normalized = this._normalizeCallSiteNode(containingNode, bundle.sourceCode);
        if (normalized && normalized.type !== 'Unknown') {
          statementNode = normalized;
        }
      }
    }

    if (!statementNode) {
      return this._buildUnresolvedCallSiteStatement(runtimeLoc, 'call-site-not-found');
    }

    return {
      type: statementNode.type,
      text: statementNode.text,
      sourceLoc: statementNode.loc,
      runtimeLoc,
      range: statementNode.range,
      callerTag,
      calleeTag,
      resolution: statementNode.resolution || 'resolved'
    };
  }

  _buildUnresolvedCallSiteStatement(runtimeLoc, reason) {
    return {
      type: 'Unknown',
      text: '',
      sourceLoc: null,
      runtimeLoc,
      range: null,
      resolution: reason
    };
  }

  _findSmallestContainingNode(root, offset) {
    let best = null;
    let bestSize = Number.POSITIVE_INFINITY;

    const visit = (node) => {
      if (!node || typeof node !== 'object') return;
      if (typeof node.start !== 'number' || typeof node.end !== 'number') {
        for (const child of this._iterChildren(node)) visit(child);
        return;
      }
      if (node.start <= offset && offset < node.end) {
        const size = node.end - node.start;
        if (size < bestSize) {
          best = node;
          bestSize = size;
        }
      }
      for (const child of this._iterChildren(node)) visit(child);
    };

    visit(root);
    return best;
  }

  _normalizeCallSiteNode(node, sourceCode) {
    if (!node) {
      return { type: 'Unknown', text: '', loc: null, range: null, resolution: 'empty-node' };
    }

    let current = node;
    for (let depth = 0; depth < 8 && current; depth += 1) {
      if (current.type === 'CallExpression' || current.type === 'NewExpression') {
        return this._buildStatementInfo(current, sourceCode, 'offset-match');
      }
      if (current.type === 'ExpressionStatement' && current.expression) {
        current = current.expression;
        continue;
      }
      if (current.type === 'ReturnStatement' && current.argument) {
        current = current.argument;
        continue;
      }
      if (current.type === 'AwaitExpression' && current.argument) {
        current = current.argument;
        continue;
      }
      if (current.type === 'VariableDeclarator' && current.init) {
        current = current.init;
        continue;
      }
      break;
    }

    return this._buildStatementInfo(node, sourceCode, 'offset-node');
  }

  _buildStatementInfo(node, sourceCode, resolution) {
    const start = typeof node.start === 'number' ? node.start : null;
    const end = typeof node.end === 'number' ? node.end : null;
    const text = (start !== null && end !== null)
      ? this._sliceStatementText(sourceCode, start, end)
      : '';
    const loc = node.loc && node.loc.start
      ? { line: node.loc.start.line, column: node.loc.start.column }
      : null;

    return {
      type: node.type || 'Unknown',
      text,
      loc,
      range: (start !== null && end !== null) ? { start, end } : null,
      resolution
    };
  }

  _sliceStatementText(sourceCode, start, end) {
    const maxLen = 160;
    const text = String(sourceCode || '').slice(start, end).replace(/\s+/g, ' ').trim();
    if (text.length <= maxLen) return text;
    return `${text.slice(0, maxLen)}…`;
  }

  _findCallExpressionsInRange(ast, range) {
    const results = [];
    const rangeStart = typeof range.start === 'number' ? range.start : 0;
    const rangeEnd = typeof range.end === 'number' ? range.end : Number.MAX_SAFE_INTEGER;

    const visit = (node) => {
      if (!node || typeof node !== 'object') return;
      if ((node.type === 'CallExpression' || node.type === 'NewExpression')
        && typeof node.start === 'number'
        && typeof node.end === 'number'
        && node.start >= rangeStart
        && node.end <= rangeEnd) {
        results.push(node);
      }
      for (const child of this._iterChildren(node)) visit(child);
    };

    visit(ast);
    return results;
  }

  _callExpressionMatchesCallee(callNode, calleeTag, calleeEntry, calleeFrame) {
    const calleeNames = new Set();
    const fnName = calleeEntry && calleeEntry.functionName ? String(calleeEntry.functionName) : '';
    if (fnName) calleeNames.add(fnName);
    const frameName = this._extractStackFunctionName(calleeFrame);
    if (frameName) calleeNames.add(frameName);
    if (calleeFrame && calleeFrame.cdpFunctionName) {
      calleeNames.add(String(calleeFrame.cdpFunctionName));
    }

    const callName = this._getCallExpressionCalleeName(callNode);
    if (callName && calleeNames.has(callName)) {
      return true;
    }

    return false;
  }

  _getCallExpressionCalleeName(callNode) {
    if (!callNode) return '';
    const callee = callNode.callee;
    if (!callee) return '';

    if (callee.type === 'Identifier') {
      return callee.name || '';
    }
    if (callee.type === 'MemberExpression') {
      if (callee.property && callee.property.type === 'Identifier' && !callee.computed) {
        return callee.property.name || '';
      }
      if (callee.property && callee.property.type === 'Literal') {
        return String(callee.property.value || '');
      }
    }
    return '';
  }

  _pickClosestCallSiteNode(candidates, offset, sourceCode) {
    let best = candidates[0];
    let bestDistance = Number.POSITIVE_INFINITY;
    for (const node of candidates) {
      if (typeof node.start !== 'number') continue;
      const distance = Math.abs(node.start - offset);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = node;
      }
    }
    return this._normalizeCallSiteNode(best, sourceCode);
  }

  _buildCallSiteNode(callerTag, statement, callerFrame, mapJson, dedupedRecords) {
    const mapEntry = mapJson[callerTag] || {};
    const deduped = dedupedRecords.find((item) => item.tag === callerTag) || {};
    const functionName = mapEntry.functionName
      || (deduped.component && deduped.component.functionName)
      || callerTag;

    const sourceLoc = statement && statement.sourceLoc
      ? statement.sourceLoc
      : null;
    const runtimeLoc = statement && statement.runtimeLoc
      ? statement.runtimeLoc
      : {
        url: callerFrame && callerFrame.url,
        line: callerFrame && callerFrame.line,
        column: callerFrame && callerFrame.column
      };

    const locKey = sourceLoc
      ? `${sourceLoc.line}:${sourceLoc.column}`
      : `runtime:${runtimeLoc.line}:${runtimeLoc.column}`;

    return {
      id: `${callerTag}::call@${locKey}`,
      functionTag: callerTag,
      functionName,
      scriptUrl: mapEntry.scriptUrl || deduped.scriptUrl || '',
      statement: {
        type: statement.type || 'Unknown',
        text: statement.text || '',
        sourceLoc,
        runtimeLoc,
        range: statement.range || null,
        resolution: statement.resolution || 'unknown'
      }
    };
  }

  _externalNodeId(frame) {
    const label = frame.rawName || frame.name || frame.url || 'unknown';
    return `__external__:${label}@${frame.line}:${frame.column}`;
  }

  _addCallGraphEdge(edgeMap, from, to, meta) {
    if (!from || !to || from === to) return;
    const key = `${from} -> ${to}`;
    if (!edgeMap.has(key)) {
      edgeMap.set(key, {
        from,
        to,
        fromFunctionTag: meta.callerTag || null,
        toFunctionTag: meta.calleeTag || to,
        statement: meta.statement || null,
        count: 0,
        examples: []
      });
    }
    const edge = edgeMap.get(key);
    edge.count += 1;
    if (edge.examples.length < 5) {
      edge.examples.push({
        sourceTag: meta.sourceTag,
        callerFrame: meta.callerFrame,
        calleeFrame: meta.calleeFrame,
        statement: meta.statement || null,
        callSiteNode: meta.callSiteNode || null,
        external: !!meta.external
      });
    }
  }

  _buildCallGraphNodeMeta(tag, mapEntry, dedupedRecords) {
    const deduped = dedupedRecords.find((item) => item.tag === tag) || {};
    const functionName = (mapEntry && mapEntry.functionName)
      || (deduped.component && deduped.component.functionName)
      || tag;
    return {
      id: tag,
      functionName,
      scriptUrl: (mapEntry && mapEntry.scriptUrl)
        || deduped.scriptUrl
        || '',
      tags: deduped.tags || (mapEntry && mapEntry.tags) || [],
      location: deduped.location || (mapEntry && mapEntry.location) || null,
      executed: true,
      external: false,
      firstLoggedAt: deduped.firstLoggedAt || null
    };
  }

  _buildCallGraphAdjacency(callSiteNodeList, functionNodes, edges) {
    const callSiteById = new Map();
    const functionById = new Map();
    callSiteNodeList.forEach((node) => callSiteById.set(node.id, node));
    functionNodes.forEach((node) => functionById.set(node.id, node));

    const emptyFlows = () => ({ flowsTo: [], flowsFrom: [] });
    const byNodeId = new Map();

    const touchNode = (nodeId) => {
      if (!byNodeId.has(nodeId)) {
        byNodeId.set(nodeId, emptyFlows());
      }
      return byNodeId.get(nodeId);
    };

    const buildEdgeMeta = (edge) => ({
      edgeKey: `${edge.from} -> ${edge.to}`,
      count: edge.count,
      statement: edge.statement && edge.statement.text ? edge.statement.text : '',
      statementType: edge.statement && edge.statement.type ? edge.statement.type : '',
      sourceLoc: edge.statement && edge.statement.sourceLoc ? edge.statement.sourceLoc : null,
      runtimeLoc: edge.statement && edge.statement.runtimeLoc ? edge.statement.runtimeLoc : null,
      resolution: edge.statement && edge.statement.resolution ? edge.statement.resolution : null
    });

    for (const edge of edges) {
      const meta = buildEdgeMeta(edge);
      const fromCallSite = callSiteById.get(edge.from);
      const toFunction = functionById.get(edge.to);

      const fromFlows = touchNode(edge.from);
      fromFlows.flowsTo.push({
        ...meta,
        nodeId: edge.to,
        nodeType: 'function',
        functionTag: edge.toFunctionTag || edge.to,
        functionName: toFunction ? toFunction.functionName : edge.to
      });

      const toFlows = touchNode(edge.to);
      toFlows.flowsFrom.push({
        ...meta,
        nodeId: edge.from,
        nodeType: 'callSite',
        callSiteNodeId: edge.from,
        functionTag: edge.fromFunctionTag || (fromCallSite && fromCallSite.functionTag) || edge.from,
        functionName: fromCallSite ? fromCallSite.functionName : '',
        statement: meta.statement || (fromCallSite && fromCallSite.statement && fromCallSite.statement.text) || ''
      });
    }

    const byFunctionTag = new Map();
    functionNodes.forEach((node) => {
      byFunctionTag.set(node.id, {
        functionTag: node.id,
        functionName: node.functionName,
        scriptUrl: node.scriptUrl || '',
        flowsFrom: [],
        flowsTo: [],
        callSites: []
      });
    });

    callSiteNodeList.forEach((callSite) => {
      const owner = byFunctionTag.get(callSite.functionTag);
      if (!owner) return;
      const nodeFlows = byNodeId.get(callSite.id) || emptyFlows();
      owner.callSites.push({
        callSiteNodeId: callSite.id,
        statement: callSite.statement || null,
        flowsTo: nodeFlows.flowsTo
      });
    });

    for (const edge of edges) {
      const meta = buildEdgeMeta(edge);
      const fromCallSite = callSiteById.get(edge.from);
      const toFunction = functionById.get(edge.to);
      const fromFunctionTag = edge.fromFunctionTag || (fromCallSite && fromCallSite.functionTag);
      const toFunctionTag = edge.toFunctionTag || edge.to;

      if (toFunctionTag && byFunctionTag.has(toFunctionTag)) {
        byFunctionTag.get(toFunctionTag).flowsFrom.push({
          ...meta,
          fromFunctionTag,
          toFunctionTag,
          fromFunctionName: fromCallSite ? fromCallSite.functionName : '',
          viaCallSiteNodeId: edge.from,
          callerNodeId: edge.from
        });
      }

      if (fromFunctionTag && byFunctionTag.has(fromFunctionTag)) {
        byFunctionTag.get(fromFunctionTag).flowsTo.push({
          ...meta,
          fromFunctionTag,
          toFunctionTag,
          toFunctionName: toFunction ? toFunction.functionName : toFunctionTag,
          viaCallSiteNodeId: edge.from,
          calleeNodeId: edge.to
        });
      }
    }

    const functionPairFlowKey = (item) => `${item.fromFunctionTag || ''}|${item.toFunctionTag || ''}`;

    for (const flows of byFunctionTag.values()) {
      flows.flowsFrom = this._mergeCallGraphFlowEntries(
        flows.flowsFrom,
        functionPairFlowKey
      );
      flows.flowsTo = this._mergeCallGraphFlowEntries(
        flows.flowsTo,
        functionPairFlowKey
      );
    }

    callSiteNodeList.forEach((node) => {
      const flows = byNodeId.get(node.id) || emptyFlows();
      node.flowsTo = flows.flowsTo;
      node.flowsFrom = flows.flowsFrom;
    });

    functionNodes.forEach((node) => {
      const summary = byFunctionTag.get(node.id);
      if (!summary) return;
      node.flowsTo = summary.flowsTo;
      node.flowsFrom = summary.flowsFrom;
      node.callSites = summary.callSites;
    });

    const lookup = {
      byFunctionTag: Object.fromEntries(byFunctionTag.entries()),
      byNodeId: Object.fromEntries(
        Array.from(byNodeId.entries()).map(([nodeId, flows]) => {
          const callSite = callSiteById.get(nodeId);
          const fn = functionById.get(nodeId);
          return [nodeId, {
            nodeId,
            nodeType: callSite ? 'callSite' : (fn ? 'function' : 'unknown'),
            functionTag: callSite ? callSite.functionTag : (fn ? fn.id : nodeId),
            functionName: callSite ? callSite.functionName : (fn ? fn.functionName : nodeId),
            flowsTo: flows.flowsTo,
            flowsFrom: flows.flowsFrom
          }];
        })
      )
    };

    return { lookup, byFunctionTag, byNodeId };
  }

  _mergeCallGraphFlowEntries(entries, keyFn) {
    const merged = new Map();
    for (const item of entries || []) {
      const key = keyFn(item);
      if (!merged.has(key)) {
        merged.set(key, { ...item });
        continue;
      }
      const existing = merged.get(key);
      existing.count += item.count || 0;
      if (this._callGraphFlowEntryIsRicher(item, existing)) {
        this._copyCallGraphFlowEntryFields(existing, item);
      }
    }
    return Array.from(merged.values())
      .sort((a, b) => (b.count || 0) - (a.count || 0));
  }

  _callGraphFlowEntryIsRicher(candidate, current) {
    const candidateScore = this._callGraphFlowEntryRichnessScore(candidate);
    const currentScore = this._callGraphFlowEntryRichnessScore(current);
    if (candidateScore !== currentScore) {
      return candidateScore > currentScore;
    }
    return (candidate.count || 0) > (current.count || 0);
  }

  _callGraphFlowEntryRichnessScore(entry) {
    if (!entry) return 0;
    if (entry.statement) return 3;
    if (entry.resolution === 'offset-match' || entry.resolution === 'resolved') return 2;
    if (entry.sourceLoc) return 1;
    return 0;
  }

  _copyCallGraphFlowEntryFields(target, source) {
    const fields = [
      'statement',
      'statementType',
      'sourceLoc',
      'runtimeLoc',
      'resolution',
      'edgeKey',
      'viaCallSiteNodeId',
      'callerNodeId',
      'calleeNodeId',
      'fromFunctionName',
      'toFunctionName'
    ];
    for (const field of fields) {
      const value = source[field];
      if (value !== undefined && value !== null && value !== '') {
        target[field] = value;
      }
    }
  }

  _buildCallGraphMermaid(callSiteNodes, functionNodes, edges) {
    const idMap = new Map();
    callSiteNodes.forEach((node, index) => {
      idMap.set(node.id, `C${index}`);
    });
    functionNodes.forEach((node, index) => {
      idMap.set(node.id, `F${index}`);
    });

    const sanitize = (text) => String(text || '')
      .replace(/"/g, '\'')
      .replace(/\]/g, ')')
      .replace(/\[/g, '(')
      .replace(/\|/g, '/')
      .slice(0, 100);

    const lines = ['graph TD'];
    for (const node of callSiteNodes) {
      const nodeId = idMap.get(node.id);
      const stmt = node.statement && node.statement.text
        ? node.statement.text
        : (node.statement && node.statement.runtimeLoc
          ? `@${node.statement.runtimeLoc.line}:${node.statement.runtimeLoc.column}`
          : '');
      const label = sanitize(`${node.functionName}\\n${stmt}`);
      lines.push(`  ${nodeId}["${label}"]`);
    }
    for (const node of functionNodes) {
      const nodeId = idMap.get(node.id);
      const label = sanitize(node.functionName);
      lines.push(`  ${nodeId}(("${label}"))`);
    }
    for (const edge of edges) {
      const fromId = idMap.get(edge.from);
      const toId = idMap.get(edge.to);
      if (!fromId || !toId) continue;
      lines.push(`  ${fromId} -->|"${edge.count}x"| ${toId}`);
    }
    return `${lines.join('\n')}\n`;
  }

  _normalizeLogTime(rawTimeArg, fallbackTsSeconds) {
    if (typeof rawTimeArg === 'string' || typeof rawTimeArg === 'number') {
      const parsed = new Date(rawTimeArg);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed.toISOString();
      }
    }

    if (typeof fallbackTsSeconds === 'number' && Number.isFinite(fallbackTsSeconds)) {
      return new Date(fallbackTsSeconds * 1000).toISOString();
    }

    return new Date().toISOString();
  }

  _buildComponentMeta(mapEntry) {
    const functionName = mapEntry && mapEntry.functionName ? String(mapEntry.functionName) : 'anonymous';
    const componentName = /^[A-Z][A-Za-z0-9_$]*$/.test(functionName) ? functionName : null;
    return {
      functionName,
      componentName,
      scriptUrl: mapEntry && mapEntry.scriptUrl ? mapEntry.scriptUrl : '',
      location: mapEntry && mapEntry.location ? mapEntry.location : null
    };
  }

  _isHtmlScriptMapEntry(tag, mapEntry) {
    const scriptUrl = mapEntry && mapEntry.scriptUrl ? String(mapEntry.scriptUrl) : '';
    if (htmlScriptUtils.isHtmlLikeUrl(scriptUrl)) return true;
    if (/^inline-script-\d+$/i.test(scriptUrl)) return true;

    const tagScriptPart = String(tag || '').split('::')[0] || '';
    if (htmlScriptUtils.isHtmlLikeUrl(tagScriptPart)) return true;

    const sourceFile = mapEntry && mapEntry.sourceFile ? String(mapEntry.sourceFile) : '';
    if (/\.html/i.test(path.basename(sourceFile))) return true;

    return false;
  }

  _parseTagFunctionName(tag) {
    const right = String(tag || '').split('::')[1] || '';
    const at = right.lastIndexOf('@');
    return at >= 0 ? right.slice(0, at) : right;
  }

  _findPageUrlFromMapForSourceFile(mapJson, sourceFile) {
    if (!sourceFile || !mapJson) return null;
    for (const [key, entry] of Object.entries(mapJson)) {
      if (!entry || entry.sourceFile !== sourceFile) continue;
      const scriptUrl = String(entry.scriptUrl || key.split('::')[0] || '');
      if (htmlScriptUtils.isHtmlLikeUrl(scriptUrl)) {
        return scriptUrl.split('#')[0];
      }
    }
    return null;
  }

  _findSiblingHtmlMapEntry(mapEntry, mapJson) {
    if (!mapEntry?.functionName || mapEntry?.range?.start == null || !mapJson) {
      return null;
    }
    for (const [key, entry] of Object.entries(mapJson)) {
      if (!entry || entry === mapEntry) continue;
      if (entry.functionName !== mapEntry.functionName) continue;
      if (entry.range?.start !== mapEntry.range.start) continue;
      const candidateUrl = String(entry.scriptUrl || key.split('::')[0] || '');
      if (htmlScriptUtils.isHtmlLikeUrl(candidateUrl)) {
        return { key, entry };
      }
    }
    return null;
  }

  _resolvePageUrlForHtmlMapEntry(tag, mapEntry, mapJson) {
    const scriptUrl = String(mapEntry?.scriptUrl || tag.split('::')[0] || '');
    if (htmlScriptUtils.isHtmlLikeUrl(scriptUrl)) {
      return scriptUrl.split('#')[0];
    }

    if (mapEntry?.sourceFile) {
      const fromSameSource = this._findPageUrlFromMapForSourceFile(mapJson, mapEntry.sourceFile);
      if (fromSameSource) return fromSameSource;
    }

    const sibling = this._findSiblingHtmlMapEntry(mapEntry, mapJson);
    if (sibling) {
      const siblingUrl = String(sibling.entry.scriptUrl || sibling.key.split('::')[0] || '');
      if (htmlScriptUtils.isHtmlLikeUrl(siblingUrl)) {
        return siblingUrl.split('#')[0];
      }
    }

    return null;
  }

  _htmlMapEntryNeedsDocumentLocation(mapEntry) {
    if (!mapEntry?.location) return false;
    if (mapEntry.scriptLocation
      && mapEntry.location.line > mapEntry.scriptLocation.line + 10) {
      return false;
    }
    return true;
  }

  async _normalizeHtmlMapEntryLocation(tag, mapEntry, mapJson, sourceCache, htmlContextCache) {
    if (!mapEntry || !this._isHtmlScriptMapEntry(tag, mapEntry)) {
      return { tag, mapEntry };
    }
    if (!this._htmlMapEntryNeedsDocumentLocation(mapEntry)) {
      return { tag, mapEntry };
    }

    const pageUrl = this._resolvePageUrlForHtmlMapEntry(tag, mapEntry, mapJson);
    if (!pageUrl) {
      return { tag, mapEntry };
    }

    let sourceCode = '';
    let sourceFile = mapEntry.sourceFile;
    const siblingForSource = this._findSiblingHtmlMapEntry(mapEntry, mapJson);
    if (siblingForSource?.entry?.sourceFile) {
      sourceFile = siblingForSource.entry.sourceFile;
    }
    if (sourceFile && fs.existsSync(sourceFile)) {
      if (sourceCache.has(sourceFile)) {
        sourceCode = sourceCache.get(sourceFile);
      } else {
        sourceCode = fs.readFileSync(sourceFile, 'utf8');
        sourceCache.set(sourceFile, sourceCode);
      }
    }
    if (!sourceCode) {
      return { tag, mapEntry };
    }

    let htmlContext = htmlContextCache.get(pageUrl);
    if (htmlContext === undefined) {
      htmlContext = await this._resolveHtmlInlineScriptContext(sourceCode, pageUrl);
      htmlContextCache.set(pageUrl, htmlContext);
    }
    if (!htmlContext) {
      return { tag, mapEntry };
    }

    const scriptLocation = mapEntry.scriptLocation || mapEntry.location;
    let documentLocation = null;
    if (typeof mapEntry.range?.start === 'number') {
      documentLocation = htmlScriptUtils.getPositionAtOffset(
        htmlContext.htmlContent,
        htmlContext.contentStartOffset + mapEntry.range.start
      );
    } else if (scriptLocation) {
      documentLocation = htmlScriptUtils.translateScriptLocToHtml(
        scriptLocation.line,
        scriptLocation.column,
        htmlContext.contentStartLine,
        htmlContext.contentStartColumn
      );
    }
    if (!documentLocation) {
      return { tag, mapEntry };
    }

    const functionName = mapEntry.functionName || this._parseTagFunctionName(tag);
    const newTag = `${pageUrl}::${functionName}@${documentLocation.line}:${documentLocation.column}`;
    const updatedEntry = {
      ...mapEntry,
      scriptUrl: pageUrl,
      functionName,
      location: documentLocation,
      scriptLocation
    };

    return { tag: newTag, mapEntry: updatedEntry };
  }

  async _buildDedupedLogRecord(tag, mapEntry, sourceCache, runtimeItem) {
    const snippet = await this._extractFunctionSnippet(mapEntry, sourceCache);
    const component = (runtimeItem && runtimeItem.component)
      ? {
        ...runtimeItem.component,
        scriptUrl: mapEntry?.scriptUrl || runtimeItem.component.scriptUrl || '',
        location: mapEntry?.location || runtimeItem.component.location || null
      }
      : this._buildComponentMeta(mapEntry || {});

    return {
      tag,
      firstLoggedAt: runtimeItem
        ? (runtimeItem.loggedAt || runtimeItem.timestamp || null)
        : null,
      callStack: runtimeItem ? (runtimeItem.callStack || null) : null,
      component,
      scriptUrl: (runtimeItem && runtimeItem.scriptUrl)
        || (mapEntry && mapEntry.scriptUrl)
        || '',
      tags: (runtimeItem && Array.isArray(runtimeItem.tags) && runtimeItem.tags.length > 0)
        ? runtimeItem.tags
        : (Array.isArray(mapEntry && mapEntry.tags) ? mapEntry.tags : []),
      location: (mapEntry && mapEntry.location)
        || (runtimeItem && runtimeItem.location)
        || null,
      scriptLocation: (mapEntry && mapEntry.scriptLocation) || null,
      range: (mapEntry && mapEntry.range) || null,
      functionCode: snippet
    };
  }

  _injectLogsIntoAst(ast, tagMapForScript) {
    let injectedCount = 0;

    const visit = (node, parent) => {
      if (!node || typeof node !== 'object') return;

      if (this._isFunctionNode(node) && node.loc && node.body) {
        const fnName = this._resolveFunctionName(node, parent) || '';
        const traceInfo = this._findTraceInfoForNode(tagMapForScript, node, fnName);
        if (traceInfo) {
          const changed = this._insertLogStatement(node, traceInfo, parent);
          if (changed) injectedCount += 1;
        }
      }

      for (const child of this._iterChildren(node)) {
        visit(child, node);
      }
    };

    visit(ast, null);
    return injectedCount;
  }

  _insertLogStatement(functionNode, traceInfo, parentNode) {
    const traceStatements = this._buildTraceStatements(traceInfo.uniqueFunctionKey);

    // 箭头函数表达式体（非块）改写为块体并保持返回值
    if (functionNode.type === 'ArrowFunctionExpression' && functionNode.body.type !== 'BlockStatement') {
      functionNode.body = {
        type: 'BlockStatement',
        body: [
          ...traceStatements,
          {
            type: 'ReturnStatement',
            argument: functionNode.body
          }
        ]
      };
      return true;
    }

    if (!functionNode.body || functionNode.body.type !== 'BlockStatement') {
      return false;
    }

    const statements = functionNode.body.body || [];
    if (this._alreadyHasSameLog(statements[0], traceInfo.uniqueFunctionKey)) {
      return false;
    }

    // constructor 中若第一句是 super(...)，日志放到 super 后，避免语义风险
    const isConstructor = parentNode
      && parentNode.type === 'MethodDefinition'
      && parentNode.kind === 'constructor';

    if (isConstructor && statements[0] && this._isSuperCall(statements[0])) {
      statements.splice(1, 0, ...traceStatements);
      return true;
    }

    statements.unshift(...traceStatements);
    return true;
  }

  _buildStackTraceExpression() {
    return {
      type: 'MemberExpression',
      object: {
        type: 'NewExpression',
        callee: { type: 'Identifier', name: 'Error' },
        arguments: []
      },
      property: { type: 'Identifier', name: 'stack' },
      computed: false,
      optional: false
    };
  }

  _buildTimestampExpression(nowVarName = null) {
    const dateArgs = nowVarName
      ? [{ type: 'Identifier', name: nowVarName }]
      : [];
    return {
      type: 'CallExpression',
      callee: {
        type: 'MemberExpression',
        object: {
          type: 'NewExpression',
          callee: { type: 'Identifier', name: 'Date' },
          arguments: dateArgs
        },
        property: { type: 'Identifier', name: 'toISOString' },
        computed: false,
        optional: false
      },
      arguments: [],
      optional: false
    };
  }

  _buildConsoleLogArguments(key, nowVarName = null) {
    return [
      { type: 'Literal', value: key },
      this._buildTimestampExpression(nowVarName),
      this._buildStackTraceExpression()
    ];
  }

  _buildTraceStatements(uniqueFunctionKey) {
    const key = String(uniqueFunctionKey);
    if (this.logMinIntervalMs <= 0) {
      const traceStatement = {
        type: 'ExpressionStatement',
        expression: {
          type: 'CallExpression',
          callee: {
            type: 'MemberExpression',
            object: { type: 'Identifier', name: 'console' },
            property: { type: 'Identifier', name: 'log' },
            computed: false,
            optional: false
          },
          arguments: this._buildConsoleLogArguments(key),
          optional: false
        }
      };
      return [traceStatement];
    }

    const nowVarName = '__cdpNow';
    const storeVarName = '__cdpLogStore';
    const prevVarName = '__cdpPrev';

    const declareNowAndStore = {
      type: 'VariableDeclaration',
      kind: 'const',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: { type: 'Identifier', name: nowVarName },
          init: {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'Date' },
              property: { type: 'Identifier', name: 'now' },
              computed: false,
              optional: false
            },
            arguments: [],
            optional: false
          }
        },
        {
          type: 'VariableDeclarator',
          id: { type: 'Identifier', name: storeVarName },
          init: {
            type: 'LogicalExpression',
            operator: '||',
            left: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'console' },
              property: { type: 'Identifier', name: '__cdpTagLastLogAt' },
              computed: false,
              optional: false
            },
            right: {
              type: 'AssignmentExpression',
              operator: '=',
              left: {
                type: 'MemberExpression',
                object: { type: 'Identifier', name: 'console' },
                property: { type: 'Identifier', name: '__cdpTagLastLogAt' },
                computed: false,
                optional: false
              },
              right: {
                type: 'ObjectExpression',
                properties: []
              }
            }
          }
        }
      ]
    };

    const declarePrev = {
      type: 'VariableDeclaration',
      kind: 'const',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: { type: 'Identifier', name: prevVarName },
          init: {
            type: 'LogicalExpression',
            operator: '||',
            left: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: storeVarName },
              property: { type: 'Literal', value: key },
              computed: true,
              optional: false
            },
            right: { type: 'Literal', value: 0 }
          }
        }
      ]
    };

    const throttledLog = {
      type: 'IfStatement',
      test: {
        type: 'BinaryExpression',
        operator: '>=',
        left: {
          type: 'BinaryExpression',
          operator: '-',
          left: { type: 'Identifier', name: nowVarName },
          right: { type: 'Identifier', name: prevVarName }
        },
        right: { type: 'Literal', value: this.logMinIntervalMs }
      },
      consequent: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'AssignmentExpression',
              operator: '=',
              left: {
                type: 'MemberExpression',
                object: { type: 'Identifier', name: storeVarName },
                property: { type: 'Literal', value: key },
                computed: true,
                optional: false
              },
              right: { type: 'Identifier', name: nowVarName }
            }
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'CallExpression',
              callee: {
                type: 'MemberExpression',
                object: { type: 'Identifier', name: 'console' },
                property: { type: 'Identifier', name: 'log' },
                computed: false,
                optional: false
              },
              arguments: this._buildConsoleLogArguments(key, nowVarName),
              optional: false
            }
          }
        ]
      },
      alternate: null
    };
    return [declareNowAndStore, declarePrev, throttledLog];
  }

  _alreadyHasSameLog(firstStatement, uniqueFunctionKey) {
    if (!firstStatement || firstStatement.type !== 'ExpressionStatement') return false;
    const expr = firstStatement.expression;
    if (!expr || expr.type !== 'CallExpression') return false;
    if (!expr.callee || expr.callee.type !== 'MemberExpression') return false;
    if (!expr.callee.object || expr.callee.object.name !== 'console') return false;
    if (!expr.callee.property || expr.callee.property.name !== 'log') return false;
    if (!expr.arguments || expr.arguments.length < 1) return false;
    const firstArg = expr.arguments[0];
    return !!firstArg && firstArg.type === 'Literal' && String(firstArg.value) === String(uniqueFunctionKey);
  }

  _isSuperCall(statement) {
    return statement
      && statement.type === 'ExpressionStatement'
      && statement.expression
      && statement.expression.type === 'CallExpression'
      && statement.expression.callee
      && statement.expression.callee.type === 'Super';
  }

  _writeInstrumentedFile(outputDir, scriptUrl, code) {
    const safeName = this._sanitizeFilename(scriptUrl || 'unknown-script');
    const hash = crypto.createHash('sha1').update(scriptUrl || safeName).digest('hex').slice(0, 8);
    const filename = `${safeName}__${hash}.instrumented.js`;
    const fullPath = path.join(outputDir, filename);
    fs.writeFileSync(fullPath, code, 'utf8');
    return fullPath;
  }

  _writeAstFile(astDir, scriptUrl, ast) {
    const safeName = this._sanitizeFilename(scriptUrl || 'unknown-script');
    const hash = crypto.createHash('sha1').update(scriptUrl || safeName).digest('hex').slice(0, 8);
    const filename = `${safeName}__${hash}.ast.json`;
    const fullPath = path.join(astDir, filename);
    fs.writeFileSync(fullPath, JSON.stringify(ast, null, 2), 'utf8');
    return fullPath;
  }

  _writeAstFileSafe(astDir, scriptUrl, ast) {
    try {
      const path = this._writeAstFile(astDir, scriptUrl, ast);
      return { path, reason: null };
    } catch (error) {
      return {
        path: null,
        reason: String(error && error.message ? error.message : 'unknown error')
      };
    }
  }

  _writeSourceFile(sourceDir, scriptUrl, code) {
    const safeName = this._sanitizeFilename(scriptUrl || 'unknown-script');
    const hash = crypto.createHash('sha1').update(scriptUrl || safeName).digest('hex').slice(0, 8);
    const filename = `${safeName}__${hash}.source.js`;
    const fullPath = path.join(sourceDir, filename);
    fs.writeFileSync(fullPath, code, 'utf8');
    return fullPath;
  }

  _sanitizeFilename(input) {
    return String(input)
      .replace(/^https?:\/\//, '')
      .replace(/^file:\/\//, 'file-')
      .replace(/[<>:"/\\|?*]+/g, '_')
      .replace(/\s+/g, '_')
      .slice(0, 120) || 'script';
  }

  _buildFunctionTagMap(ast, sourceCode, scriptUrl, astFilePath, sourceFilePath, htmlContext = null) {
    const map = {};
    let anonymousCounter = 0;

    const toDocumentLoc = (line, column, charOffset) => {
      if (!htmlContext) {
        return { line, column };
      }
      if (htmlContext.htmlContent && typeof htmlContext.contentStartOffset === 'number' && typeof charOffset === 'number') {
        return htmlScriptUtils.getPositionAtOffset(
          htmlContext.htmlContent,
          htmlContext.contentStartOffset + charOffset
        );
      }
      return htmlScriptUtils.translateScriptLocToHtml(
        line,
        column,
        htmlContext.contentStartLine,
        htmlContext.contentStartColumn
      );
    };

    const visit = (node, parent) => {
      if (!node || typeof node !== 'object') return;

      if (this._isFunctionNode(node)) {
        const fnName = this._resolveFunctionName(node, parent) || `anonymous_${++anonymousCounter}`;
        const locStart = node.loc ? node.loc.start : { line: 0, column: 0 };
        const locEnd = node.loc && node.loc.end ? node.loc.end : { line: 0, column: 0 };
        const startOffset = typeof node.start === 'number' ? node.start : 0;
        const endOffset = typeof node.end === 'number' ? node.end : startOffset;
        const scriptLocation = { line: locStart.line, column: locStart.column };
        const location = toDocumentLoc(locStart.line, locStart.column, startOffset);
        const key = `${scriptUrl}::${fnName}@${location.line}:${location.column}`;

        map[key] = {
          scriptUrl,
          functionName: fnName,
          location,
          scriptLocation,
          loc: {
            start: toDocumentLoc(locStart.line, locStart.column, startOffset),
            end: toDocumentLoc(locEnd.line, locEnd.column, endOffset)
          },
          scriptLoc: {
            start: { line: locStart.line, column: locStart.column },
            end: { line: locEnd.line, column: locEnd.column }
          },
          range: {
            start: startOffset,
            end: endOffset
          },
          tags: this._deriveTags(node, parent, sourceCode, fnName),
          astFile: astFilePath,
          sourceFile: sourceFilePath
        };
      }

      for (const child of this._iterChildren(node)) {
        visit(child, node);
      }
    };

    visit(ast, null);
    return map;
  }

  _deriveTags(node, parent, sourceCode, fnName) {
    const tags = new Set();
    if (node.async) tags.add('async');
    if (node.generator) tags.add('generator');
    if (node.type === 'ArrowFunctionExpression') tags.add('arrow-function');
    if (parent && parent.type === 'CallExpression') tags.add('callback');
    if (parent && parent.type === 'MethodDefinition') tags.add('class-method');
    if (parent && parent.type === 'Property') tags.add('object-method');

    const bodyText = this._safeSliceFunctionBody(sourceCode, node);

    if (/\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\b/.test(bodyText)) tags.add('network');
    if (/\baddEventListener\s*\(|\bon[A-Z][a-zA-Z]+\s*=/.test(bodyText)) tags.add('event-handler');
    if (/\bsetTimeout\s*\(|\bsetInterval\s*\(|\brequestAnimationFrame\s*\(/.test(bodyText)) tags.add('timer');
    if (/\bPromise\b|\.then\s*\(|\.catch\s*\(|\.finally\s*\(/.test(bodyText)) tags.add('promise');
    if (/\bdocument\b|\bwindow\b|\bquerySelector\b|\bgetElementById\b/.test(bodyText)) tags.add('dom');
    if (/\btry\s*\{|\bthrow\b/.test(bodyText)) tags.add('error-handling');

    if (fnName && fnName !== 'anonymous' && new RegExp(`\\b${this._escapeRegex(fnName)}\\s*\\(`).test(bodyText)) {
      tags.add('recursive');
    }

    if (tags.size === 0) tags.add('general');
    return Array.from(tags);
  }

  _safeSliceFunctionBody(sourceCode, node) {
    const src = String(sourceCode || '');
    const srcLen = src.length;
    if (srcLen === 0 || !node) return '';

    const rawStart = Number.isFinite(node.start) ? node.start : 0;
    const rawEnd = Number.isFinite(node.end) ? node.end : rawStart;
    const start = Math.max(0, Math.min(srcLen, rawStart));
    const end = Math.max(start, Math.min(srcLen, rawEnd));

    // 防止极端大函数体导致 Invalid string length / 内存暴涨
    const MAX_ANALYZE_LEN = 200000;
    const safeEnd = Math.min(end, start + MAX_ANALYZE_LEN);
    try {
      return src.slice(start, safeEnd);
    } catch (e) {
      return '';
    }
  }

  _escapeRegex(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  _resolveFunctionName(node, parent) {
    if (node.id && node.id.name) return node.id.name;

    if (parent && parent.type === 'VariableDeclarator' && parent.id && parent.id.name) {
      return parent.id.name;
    }

    if (parent && parent.type === 'Property') {
      if (parent.key) {
        if (parent.key.name) return parent.key.name;
        if (typeof parent.key.value !== 'undefined') return String(parent.key.value);
      }
    }

    if (parent && parent.type === 'MethodDefinition' && parent.key) {
      if (parent.key.name) return parent.key.name;
      if (typeof parent.key.value !== 'undefined') return String(parent.key.value);
    }

    return null;
  }

  _isFunctionNode(node) {
    return node.type === 'FunctionDeclaration'
      || node.type === 'FunctionExpression'
      || node.type === 'ArrowFunctionExpression';
  }

  _iterChildren(node) {
    const children = [];
    for (const key of Object.keys(node)) {
      if (key === 'parent') continue;
      const value = node[key];
      if (!value) continue;

      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item && typeof item === 'object' && item.type) children.push(item);
        });
      } else if (typeof value === 'object' && value.type) {
        children.push(value);
      }
    }
    return children;
  }

  async _extractFunctionSnippet(mapEntry, sourceCache) {
    if (!mapEntry) return '';
    if (!mapEntry.sourceFile) {
      if (mapEntry.scriptUrl) {
        try {
          const fetched = await this._fetchScriptSourceViaNode(mapEntry.scriptUrl);
          if (fetched) return this._sliceByRange(fetched, mapEntry.range);
        } catch (e) {
          return '';
        }
      }
      return '';
    }
    const sourceFile = mapEntry.sourceFile;
    if (!fs.existsSync(sourceFile)) {
      if (mapEntry.scriptUrl) {
        try {
          const fetched = await this._fetchScriptSourceViaNode(mapEntry.scriptUrl);
          if (fetched) {
            return this._sliceByRange(fetched, mapEntry.range);
          }
        } catch (e) {
          return '';
        }
      }
      return '';
    }

    let sourceCode = sourceCache.get(sourceFile);
    if (typeof sourceCode !== 'string') {
      sourceCode = fs.readFileSync(sourceFile, 'utf8');
      sourceCache.set(sourceFile, sourceCode);
    }

    return this._sliceByRange(sourceCode, mapEntry.range);
  }

  _sliceByRange(sourceCode, range) {
    if (!range
      || typeof range.start !== 'number'
      || typeof range.end !== 'number'
      || range.end <= range.start
      || range.start < 0
      || range.end > sourceCode.length) {
      return '';
    }
    return sourceCode.slice(range.start, range.end);
  }

  _withTimeout(promise, ms, label) {
    const timeoutMs = Math.max(1000, Number(ms) || 30000);
    let timer = null;
    const timeoutPromise = new Promise((_, reject) => {
      timer = setTimeout(() => {
        reject(new Error(`${label || 'operation'} 超时 (${timeoutMs}ms)`));
      }, timeoutMs);
    });
    return Promise.race([promise, timeoutPromise]).finally(() => {
      if (timer) clearTimeout(timer);
    });
  }

  _writeJsonFileSafe(filePath, data) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      const reason = error && error.message ? error.message : String(error);
      console.warn(`JSON 美化写入失败 (${reason})，改为紧凑格式: ${filePath}`);
      fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
    }
  }
}

module.exports = AstAnalyzer;
