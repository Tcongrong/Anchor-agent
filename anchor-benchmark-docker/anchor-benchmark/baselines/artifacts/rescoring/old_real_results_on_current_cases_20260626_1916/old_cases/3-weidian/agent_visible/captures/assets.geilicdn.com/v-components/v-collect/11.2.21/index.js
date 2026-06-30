/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	if (!window.vcollectRunOnlyOnce) {
	  if (!window.document || !window.document.body) {
	    console.error("请将 vcollect 置于 body 下作为第一个 script");
	  } else {
	    window.vcollectRunOnlyOnce = true;
	    var Core = __webpack_require__(1);
	    var owl = __webpack_require__(13);
	    var spider = __webpack_require__(20);
	    var pathTracker = __webpack_require__(29);
	    var log = __webpack_require__(32);
	    var ua = __webpack_require__(5);
	    var util = __webpack_require__(2);

	    var tryjs = __webpack_require__(12);

	    // 注册各种埋点脚本
	    var registQueue = [
	      tryjs(
	        function registSpider() {
	          var core = new Core();
	          spider.init(core);

	          // 如果 script 标签没有禁用 spider 自动 pv 上报，则执行自动上报 pv
	          var disabled = util._listDisabledAuto();
	          if (disabled.indexOf("spider") < 0) {
	            spider.trackPageview();
	          }

	          core.onSpmChange(function() {
	            if (disabled.indexOf("spider") < 0) {
	              spider.trackPageview();
	            }
	          });
	        },
	        function(err) {
	          spider.reset();
	        }
	      ),

	      tryjs(function registPerf() {
	        var disabled = util._listDisabledAuto();
	        if (disabled.indexOf("perf") < 0) {
	          owl.init(new Core(), { auto: true });
	        } else {
	          owl.init(new Core(), { auto: false });
	        }
	      }),

	      tryjs(function registLog() {
	        var disabled = util._listDisabledAuto();
	        log.init(new Core(), {
	          // auto: disabled.indexOf("error") === -1
	          // 强制关闭错误主动上报
	          auto: false
	        });
	      }),

	      tryjs(function registPathTracker() {
	        pathTracker.init(new Core());
	      })
	    ];

	    for (var i = 0, len = registQueue.length; i < len; i++) {
	      registQueue[i]();
	    }

	    window.vcollect = {
	      ua: ua,
	      reportError: log.report,
	      setError: log.setError
	    };

	    window.cat = log;
	    window.spider = spider;
	    window.owl = owl;
	    window.pathTracker = pathTracker;
	  }
	}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var canvasFp = __webpack_require__(7);
	var ua = __webpack_require__(5);
	var uaTool = __webpack_require__(8);
	var SdkLoader = __webpack_require__(3);
	var console = util._console;

	var pageMetaData = {};
	var COOKIE_KEY_PREFIX = "__spider__"; // cookie 字段，历史原因，性能和埋点均使用该字段;
	var POST_DELAY = 100;
	var REF_URL = "";
	var REPORT_URL = (function() {
	  var hostname = location.hostname;
	  var env = "";
	  if (hostname.match(/\.(dev|daily|test)\./)) {
	    env = "daily.";
	  } else if (hostname.match(/\.pre\./)) {
	    env = "pre.";
	  }
	  // var envMatch = hostname.match(/\.(dev|daily|pre|test)\./);
	  // var env = envMatch ? "pre." : "";

	  return "https://logtake." + env + "weidian.com/h5collector/webcollect/3.0";
	})();

	// 启动 body-observe
	var bodyObserver = __webpack_require__(10)();

	var visitId = "";
	var total = 0;
	var index = 0;
	var Core = function Core() {
	  this._logQueue = [];
	  this._callbackQueue = [];
	  this.delayPostTimer = null;

	  total++;

	  this.init();

	  var self = this;
	  this.onSpmChange(function() {
	    // 如果是第一次触发变化，则重置 visitId
	    if (index === 0) {
	      visitId = "";
	    }
	    index++;
	    self.init();

	    // 如果是最后一次触发变化，则重置 index。便于下次变化重新计数
	    if (index === total) {
	      index = 0;
	    }
	  });
	};

	function doCallbackQueue(queue, success) {
	  var i, cb;
	  for (i = 0; i < queue.length; i++) {
	    cb = queue[i];
	    if (cb) {
	      cb(success);
	    }
	  }
	  queue.length = 0;
	}

	function generateRandomVisitorId() {
	  return util._generateToken(canvasFp() + (navigator.userAgent || ""));
	}

	function storeVisitorId(visitorId) {
	  var cookieStoreDomain = util._getCookieStoreDomain();

	  util._setCookie(COOKIE_KEY_PREFIX + "visitorid", visitorId, {
	    domain: cookieStoreDomain,
	    path: "/",
	    "max-age": 60 * 60 * 24 * 365 * 2
	  });
	}

	// 缓存ID，确保只执行一次
	var VISITOR_ID;
	function getVisitorIdFromApp(callback) {
	  if (VISITOR_ID) {
	    callback({
	      visitorId: VISITOR_ID,
	      // 不是第一次
	      noFirst: true
	    });
	    return;
	  }

	  function fallback() {
	    VISITOR_ID = generateRandomVisitorId();
	    callback({
	      visitorId: VISITOR_ID,
	      // 不是第一次
	      noFirst: true
	    });
	  }

	  if (ua.isApp) {
	    SdkLoader().ready(function() {
	      if (window.KDJSBridge2) {
	        window.KDJSBridge2.call("WDJSBridge", "getCuid", {}, function(res) {
	          if (res && res.param && res.param.cuid) {
	            VISITOR_ID = res.param.cuid;
	            callback({
	              visitorId: VISITOR_ID
	            });
	          } 
	          // else if (
	          //   uaTool.isWDSeller() &&
	          //   uaTool.isAndroid() &&
	          //   util.versionCompare(uaTool.getWDAppVersion(), "9.0.42") >= 0
	          // ) {
	          //   // 店长版Android用getDeviceInfo获取cuid 9.0.42版本开始
	          //   window.KDJSBridge2.call(
	          //     "service",
	          //     "UNISDKPayService",
	          //     {
	          //       params: {
	          //         action: "getDeviceInfo"
	          //       }
	          //     },
	          //     function(res) {
	          //       if (
	          //         res &&
	          //         res.param &&
	          //         res.param.result &&
	          //         res.param.result.data &&
	          //         res.param.result.data.cuid
	          //       ) {
	          //         VISITOR_ID = res.param.result.data.cuid;
	          //         callback({
	          //           visitorId: VISITOR_ID
	          //         });
	          //       } else {
	          //         fallback();
	          //       }
	          //     }
	          //   );
	          // } 
	          else {
	            fallback();
	          }
	        });
	      } else {
	        fallback();
	      }
	    });
	  } else {
	    fallback();
	  }
	}

	// 初始化：元数据、cookie、session 等
	Core.prototype.init = function(spma, spmb) {
	  if (arguments.length === 0) {
	    var meta = util._getMetaFromDom();
	    spma = meta.spma;
	    spmb = meta.spmb;
	  }

	  if (!spma || !spmb) {
	    return;
	  }

	  if (!util._isValidSpmValue(spma)) {
	    throw new Error(
	      "spm只允许英文、数字、中划线、下划线组成, " + spma + "不合法"
	    );
	  }

	  if (!util._isValidSpmValue(spmb)) {
	    throw new Error(
	      "spm只允许英文、数字、中划线、下划线组成, " + spmb + "不合法"
	    );
	  }

	  var visitorId = util._getCookie(COOKIE_KEY_PREFIX + "visitorid");
	  var sessionId = util._getCookie(COOKIE_KEY_PREFIX + "sessionid");
	  if (!visitorId) {
	    visitorId = generateRandomVisitorId();
	  }
	  if (!sessionId) {
	    sessionId = util._generateToken(visitorId);
	  }

	  // update the expires always
	  var cookieStoreDomain = util._getCookieStoreDomain();

	  // 存储visitorId
	  storeVisitorId(visitorId);

	  util._setCookie(COOKIE_KEY_PREFIX + "sessionid", sessionId, {
	    domain: cookieStoreDomain,
	    path: "/",
	    "max-age": 60 * 30
	  });

	  visitId = visitId || util._generateToken(visitorId);
	  var buyerId = util._getCookie("uid") || util._getCookie("WD_b_id") || null;
	  var sellerId = util._getCookie("sid") || util._getCookie("WD_s_id") || null;
	  pageMetaData = {
	    document_url: document.URL,
	    document_ref: REF_URL || document.referrer || null,
	    visitor_id: visitorId,
	    session_id: sessionId,
	    visit_id: visitId,
	    buyer_id: buyerId,
	    seller_id: sellerId,
	    spma: spma,
	    spmb: spmb,
	    biz_version: "vcollect94"
	  };
	};

	// 工具方法：数据上报
	Core.prototype.report = function(type, subtype, data, callback) {
	  if (typeof data !== "object" || data === null) {
	    return;
	  }

	  // 在请求之前更新掉visitorId
	  function updateVisitorId(args) {
	    var visitorId = args.visitorId;
	    pageMetaData.visitor_id = visitorId;
	    storeVisitorId(visitorId);
	  }

	  var self = this;
	  function handle() {
	    var meta = pageMetaData;
	    var reportData = util._extendObj({}, data, {
	      type: type,
	      subtype: subtype,
	      uuid: util._generateToken(meta.visitorid + meta.visitid),
	      report_time: +new Date()
	    });
	    self._logQueue.push(reportData);
	    if (callback) {
	      self._callbackQueue.push(callback);
	    }

	    if (self._logQueue.length >= 200) {
	      self._postData(type);
	    } else {
	      if (self.delayPostTimer === null) {
	        self.delayPostTimer = setTimeout(function() {
	          self._postData(type);
	        }, POST_DELAY);
	      }
	    }
	  }

	  if (ua.isApp && pageMetaData.visitor_id.length < 32) {
	    // 解决visitorId通过jsbridge获取
	    try {
	      getVisitorIdFromApp(function(args) {
	        !args.noFirst && updateVisitorId(args);
	        handle();
	      });
	    } catch (error) {
	      handle();
	      console.error(error);
	    }
	  } else {
	    handle();
	  }
	};

	Core.prototype._postData = function(type) {
	  var callbackQueue = this._callbackQueue.slice(0);
	  if (callbackQueue.length) {
	    setTimeout(function() {
	      doCallbackQueue(callbackQueue, false);
	    }, 800);
	  }
	  util._post({
	    url:
	      REPORT_URL +
	      "?" +
	      util._queryStringStringify({
	        type: type,
	        spm: [pageMetaData.spma, pageMetaData.spmb].join(".")
	      }),
	    data: {
	      log: util._JSONStringifySafty({
	        meta: pageMetaData,
	        data: this._logQueue
	      })
	    },
	    success: function(res) {
	      if (res && res.status && res.status.code !== 0) {
	        doCallbackQueue(callbackQueue, false);
	        console.warn("[vcollect] 上报失败，请检查数据格式是否正确");
	      } else {
	        doCallbackQueue(callbackQueue, true);
	      }
	    },
	    error: function() {
	      doCallbackQueue(callbackQueue, false);
	    }
	  });

	  this._logQueue.length = 0;
	  this._callbackQueue.length = 0;
	  clearTimeout(this.delayPostTimer);
	  this.delayPostTimer = null;
	};

	// 工具方法：获取元数据
	Core.prototype.getMeta = function() {
	  return pageMetaData;
	};

	// 工具方法：获取上报的 URL
	Core.prototype.getReportUrl = function() {
	  return REPORT_URL;
	};

	// 工具方法：更新 referer
	Core.prototype.updateDocReferrer = function() {
	  REF_URL = location.href;
	};

	Core.prototype.onSpmChange = function(fn) {
	  bodyObserver(function(preSpmb, curSpmb) {
	    var spma = pageMetaData.spma;
	    fn({ spma: spma, spmb: preSpmb }, { spma: spma, spmb: curSpmb });
	  });
	};

	module.exports = Core;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var SdkLoader = __webpack_require__(3);

	var sha1 = __webpack_require__(6);
	var console = (function() {
	  var ret = {};
	  var noop = function() {};

	  [
	    "log",
	    "info",
	    "warn",
	    "error",
	    "assert",
	    "group",
	    "groupCollapsed",
	    "groupEnd"
	  ].forEach(function(propertyName) {
	    try {
	      ret[propertyName] = window.console[propertyName].bind(window.console);
	    } catch (e) {
	      ret[propertyName] = noop;
	    }
	  });

	  return ret;
	})();

	/**
	 * decode string with try catch
	 *
	 * @param {String} str
	 * @returns {String}
	 */
	var decodeURIComponent = function(str) {
	  var ret = "";

	  try {
	    ret = window.decodeURIComponent(str);
	  } catch (e) {
	    // URIERROR
	    console.warn(str + " 无法被 decodeURIComponent，将尝试 unescape");
	  }

	  if (ret === "") {
	    try {
	      ret = window.unescape(str);
	    } catch (e) {
	      console.warn(str + " 无法被 unescape，不进行解码");
	      ret = str;
	    }
	  }

	  return ret;
	};

	/**
	 * _getCookie(key)
	 * @param  {string}  key cookie-key-name
	 * @return {string?}        对应cookie的值，如果该值不存在，返回 null
	 */
	function _getCookie(key) {
	  var splitToken = "; ";

	  var ret = {};
	  if (document.cookie !== "") {
	    document.cookie.split(splitToken).forEach(function(entry) {
	      var arr = entry.split("=");
	      ret[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1] || "");
	    });
	  }

	  return arguments.length === 0 ? ret : ret[key] || null;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/document/cookie
	function _setCookie(key, value, options) {
	  options = options || {};

	  var arr = [];
	  arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	  for (var optionKey in options) {
	    arr.push(optionKey + "=" + options[optionKey]);
	  }
	  document.cookie = arr.join("; ");
	}

	function _delCookie(key, options) {
	  var arr = [];
	  var exp = new Date();
	  exp.setTime(exp.getTime() - 1);

	  if (_getCookie(key)) {
	    arr.push(encodeURIComponent(key) + "=a");
	    for (var optionKey in options) {
	      arr.push(optionKey + "=" + options[optionKey]);
	    }
	    arr.push("max-age=" + 0);
	    document.cookie = arr.join("; ");
	  } else {
	    return;
	  }
	}

	/**
	 * _queryStringParse
	 * @param  {Querystring} querystring already encoded by encodeURIComponent
	 * @return {PlainObjectNotNested} already decoded by decodeURIComponent
	 */
	function _queryStringParse(querystring) {
	  var ret = {};

	  querystring = querystring.replace(/^\?/, "");

	  if (querystring !== "") {
	    querystring.split("&").forEach(function(entry) {
	      var arr = entry.split("=");
	      if (!arr[0]) return;
	      ret[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1] || "");
	    });
	  }

	  return ret;
	}

	/**
	 * _queryStringStringify
	 * @param  {PlainObjectNotNested} query
	 * @return {Querystring}
	 */
	function _queryStringStringify(query) {
	  var arr = [];
	  var validType = ["string", "boolean", "number"];
	  for (var key in query) {
	    if (key === "") continue;
	    if (validType.indexOf(typeof query[key]) > -1) {
	      switch (query[key]) {
	        case true:
	          arr.push(encodeURIComponent(key));
	          break;
	        case false:
	          break;
	        default:
	          arr.push(
	            encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
	          );
	      }
	    }
	  }
	  return arr.length === 0 ? "" : arr.join("&");
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/location
	function _urlParse(url) {
	  var anchor = document.createElement("a");
	  anchor.href = url;
	  return anchor;
	}

	function _post(options) {
	  var xmlhttp = new window.XMLHttpRequest();
	  xmlhttp.onreadystatechange = function() {
	    if (4 == xmlhttp.readyState) {
	      if (200 == xmlhttp.status) {
	        var data = xmlhttp.responseText;
	        options.success(_JSONParseSafty(data));
	      } else {
	        options.error && options.error();
	      }
	    }
	  };

	  xmlhttp.open("POST", options.url, true);
	  xmlhttp.withCredentials = true;
	  if (options) {
	    if (options.timeout) {
	      xmlhttp.timeout = options.timeout;
	    }

	    xmlhttp.setRequestHeader(
	      "Content-Type",
	      "application/x-www-form-urlencoded"
	    );
	    xmlhttp.setRequestHeader("Accept", "application/json", "text/plain, */*");
	  }
	  if (!(options.data instanceof FormData)) {
	    options.data = _queryStringStringify(options.data);
	  }
	  xmlhttp.send(options.data);
	}

	function _isValidSpmValue(str) {
	  var reg = /^[a-zA-Z0-9\-\_]+$/;

	  if (String(str).match(reg) === null) {
	    return false;
	  } else {
	    return true;
	  }
	}

	function _getCookieStoreDomain(hostname) {
	  hostname = hostname || location.hostname;
	  // leadingDot here is for browser compatibility
	  var leadingDot = ".";

	  // 三级域名以下解决方案
	  var subDomains = _get2ndLevelDomain(hostname);
	  var cookieDomain = leadingDot + subDomains;

	  // 多级域名下解决方案
	  // var hostnameLayer = hostname.split(".");
	  // if (hostnameLayer.length === 2) {
	  //     cookieDomain = leadingDot + hostname;
	  // }

	  // if (hostnameLayer.length > 2) {
	  //     cookieDomain = leadingDot + hostnameLayer.slice(1).join(".");
	  // }

	  return cookieDomain;
	}

	function _is3rdPartUrl(url) {
	  var parsedUrl = _urlParse(url);
	  var linkHostname = parsedUrl.hostname;

	  return (
	    !_isEqualPartUrl(linkHostname) &&
	    !_isWDHost(linkHostname) &&
	    !_isWDMainHost(linkHostname)
	  );
	}

	function _isEqualPartUrl(linkHostname) {
	  var docHostname = location.hostname;
	  return _get2ndLevelDomain(linkHostname) === _get2ndLevelDomain(docHostname);
	}

	function _get2ndLevelDomain(hostname) {
	  return hostname
	    .split(".")
	    .slice(-2)
	    .join(".");
	}

	function _extendObj(target) {
	  var to = Object(target);
	  for (var index = 1; index < arguments.length; index++) {
	    var nextSource = arguments[index];

	    // Skip over if undefined or null
	    if (nextSource != null) {
	      for (var nextKey in nextSource) {
	        // Avoid bugs when hasOwnProperty is shadowed
	        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
	          to[nextKey] = nextSource[nextKey];
	        }
	      }
	    }
	  }
	  return to;
	}

	function _generateToken(salt, bits) {
	  salt = salt || "";
	  bits = bits || 16;

	  var now = new Date();
	  var token = sha1(now.getTime() + Math.random() + salt).slice(0, bits);

	  return token;
	}

	function _generateHash(content, bits) {
	  bits = bits || 16;

	  var hash = sha1(content).slice(0, bits);

	  return hash;
	}

	function _getLocalStorageItemSafty(key) {
	  try {
	    var item = localStorage.getItem(key);
	    return item;
	  } catch (e) {
	    console.error("localStorage 不可用");
	    return null;
	  }
	}

	function _setLocalStorageItemSafty(key, item) {
	  try {
	    localStorage.setItem(key, item);
	  } catch (e) {
	    console.error("localStorage 不可用");
	  }
	}

	function _isObjectAndNotNull(obj) {
	  if (typeof obj !== "object") return false;
	  if (obj === null) return false;
	  return true;
	}

	function _isEmptyObject(obj) {
	  console.assert(typeof obj === "object", "必须是一个object");
	  if (obj === null) return false;
	  if (Object.keys(obj).length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function _JSONStringifySafty(obj) {
	  if (!_isObjectAndNotNull(obj)) return "";
	  if (_isEmptyObject(obj)) return "";
	  try {
	    return JSON.stringify(obj);
	  } catch (e) {
	    // console.warn("非法JSON对象，无法进行 JSON.stringify");
	    return "";
	  }
	}

	// always return a non-null object
	function _JSONParseSafty(str) {
	  // JSON.parse may throw error, return primitive, return null
	  try {
	    var val = JSON.parse(str);
	    if (typeof val === "object" && val !== null) {
	      return val;
	    } else {
	      return {};
	    }
	  } catch (err) {
	    // console.warn("非法JSON字符串，无法进行 JSON.parse");
	    return {};
	  }
	}

	function _closestElementUntilBody(startElement, matcher) {
	  var target = startElement;
	  while (target !== null) {
	    if (target === document.body) return null;
	    if (target === document.documentElement) return null;
	    if (matcher(target)) return target;

	    target = target.parentNode;
	  }

	  // elem.parentNode may return null
	  // @see http://devdocs.io/dom/node/parentnode
	  return null;
	}

	// var camelizeRE = /-(\w)/g;
	// function _camelize(str) {
	//     return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ""; });
	// }

	function _listCustomPlugin() {
	  // var currentScript = document.currentScript || document.querySelector("[data-vcollect-plugin]");
	  // var plugins = currentScript && currentScript.dataset.vcollectPlugin;
	  // var currentScript = document.currentScript || document.querySelector("[data-vcollect-plugin]");
	  var plugins = document.body.dataset.vcollectPlugin;
	  return plugins ? plugins.split(",") : [];
	}

	// 获取禁用的 body设置的 disabled 属性
	function _listDisabledAuto() {
	  // var currentScript = document.currentScript || document.querySelector("[data-vcollect-disabled]");
	  // var disabled = currentScript && currentScript.dataset.vcollectDisabled;

	  // var currentScript = document.currentScript || document.querySelector("[data-vcollect-disabled]");
	  var disabled = document.body.dataset.vcollectDisabled;
	  var formatted = [];
	  if (disabled) {
	    var disabledArray = disabled.split(",");

	    if (disabledArray && disabledArray.length) {
	      for (var i = 0, len = disabledArray.length; i < len; i++) {
	        formatted.push(
	          disabledArray[i].replace(/^\s*/g, "").replace(/\s*/g, "")
	        );
	      }
	    }
	  }

	  return formatted;
	}

	function _getNetwork(callback) {
	  if (typeof SdkLoader !== "function") {
	    console.warn("请引入 v-components/sdk-loader，用于获取网络状态!");
	    return callback(null);
	  }

	  SdkLoader().ready(function(env) {
	    if (env === "wx") {
	      if (window.wx && typeof window.wx.getNetworkType === "function") {
	        window.wx.getNetworkType({
	          success: function(res) {
	            callback(res.networkType, "wx-success");
	          },
	          fail: function() {
	            callback(null, "wx-fail");
	          }
	        });
	      } else {
	        // report test perf
	        callback(null, "in-wx-no-network");
	      }
	    } else if (env === "app" || env === "kdweidian" || env === "vbuyer") {
	      if (window.KDJSBridge2) {
	        window.KDJSBridge2.call("WDJSBridge", "getNetworkStatus", {}, function(
	          res
	        ) {
	          var maps = {
	            "2": "wifi",
	            "3": "2g",
	            "4": "3g",
	            "5": "4g"
	          };
	          if (res && res.param && res.param.network) {
	            callback(maps[res.param.network], "in-jsbridge-success");
	          } else {
	            callback(null, "in-jsbridge-fail");
	          }
	        });
	      } else {
	        callback(null, "in-app-no-jsbridge");
	      }
	    } else {
	      callback(null, "not-in-wx-jsbridge");
	    }
	  });
	}

	function _forEach(arr, callback) {
	  if (typeof arr === "object" && arr.length) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	      callback(arr[i], i);
	    }
	  }
	}

	function _isWDHost(targetHost) {
	  targetHost = targetHost || location.hostname;

	  var writeList = ["koudai.com", "91ruyu.com", "bibikan.cn", "fangxin.com"];
	  var isWDHost = false;

	  writeList.forEach(function(domain) {
	    if (!isWDHost && targetHost.indexOf(domain) > -1) {
	      isWDHost = true;
	    }
	  });
	  return isWDHost;
	}

	function _isWDMainHost(targetHost) {
	  return targetHost.indexOf("weidian.com") > -1;
	}

	function _normalizeReportData(data) {
	  Object.keys(data).forEach(function(key) {
	    if (data[key] === "") {
	      data[key] = null;
	      return;
	    }

	    if (_isObjectAndNotNull(data[key])) {
	      if (_isEmptyObject(data[key])) {
	        data[key] = null;
	      } else {
	        // notice, todo
	        Object.keys(data[key]).forEach(function(secondKey) {
	          var value = data[key][secondKey];
	          if (value === "" || typeof value === "object") {
	            data[key][secondKey] = null;
	          }
	        });
	      }
	    }
	  });
	  return data;
	}

	function _getMetaFromDom() {
	  var head = document.head;
	  var spma =
	    head.querySelector("meta[name='data-spider']") &&
	    head.querySelector("meta[name='data-spider']").getAttribute("content");
	  var spmaPrior =
	    head.querySelector("meta[name='data-spider-prior']") &&
	    head
	      .querySelector("meta[name='data-spider-prior']")
	      .getAttribute("content");
	  var bizVersion =
	    head.querySelector("meta[name='spider-biz-version']") &&
	    head
	      .querySelector("meta[name='spider-biz-version']")
	      .getAttribute("content");
	  var spmb =
	    document.body.getAttribute("data-spider-prior") ||
	    document.body.getAttribute("data-spider");

	  spma = spmaPrior || spma;

	  return {
	    spma: spma,
	    spmb: spmb,
	    bizVersion: bizVersion
	  };
	}

	function hasOwn(obj, key) {
	  return Object.prototype.hasOwnProperty.call(obj, key);
	}

	function _getSearch() {
	  return (window.location.search || "?").replace("?", "");
	}

	function versionCompare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	  var a_components = a.split(".");
	  var b_components = b.split(".");
	  var len = Math.min(a_components.length, b_components.length);
	  // loop while the components are equal
	  for (var i = 0; i < len; i++) {
	    // A bigger than B
	    if (parseInt(a_components[i]) > parseInt(b_components[i])) {
	      return 1;
	    }
	    // B bigger than A
	    if (parseInt(a_components[i]) < parseInt(b_components[i])) {
	      return -1;
	    }
	  }
	  // If one's a prefix of the other, the longer one is greater.
	  if (a_components.length > b_components.length) {
	    return 1;
	  }
	  if (a_components.length < b_components.length) {
	    return -1;
	  }
	  // Otherwise they are the same.
	  return 0;
	}

	module.exports = {
	  _console: console,
	  _post: _post,
	  _getCookie: _getCookie,
	  _setCookie: _setCookie,
	  _delCookie: _delCookie,
	  _getSearch: _getSearch,
	  _queryStringStringify: _queryStringStringify,
	  _queryStringParse: _queryStringParse,
	  _isValidSpmValue: _isValidSpmValue,
	  _getCookieStoreDomain: _getCookieStoreDomain,
	  _get2ndLevelDomain: _get2ndLevelDomain,
	  _is3rdPartUrl: _is3rdPartUrl,
	  _extendObj: _extendObj,
	  _generateToken: _generateToken,
	  _generateHash: _generateHash,
	  _sha1: sha1,
	  _getLocalStorageItemSafty: _getLocalStorageItemSafty,
	  _setLocalStorageItemSafty: _setLocalStorageItemSafty,
	  _JSONParseSafty: _JSONParseSafty,
	  _JSONStringifySafty: _JSONStringifySafty,
	  _urlParse: _urlParse,
	  _isObjectAndNotNull: _isObjectAndNotNull,
	  _isEmptyObject: _isEmptyObject,
	  _listCustomPlugin: _listCustomPlugin,
	  _listDisabledAuto: _listDisabledAuto,
	  _getNetwork: _getNetwork,
	  _noop: function() {},
	  _hasOwn: hasOwn,
	  _forEach: _forEach,
	  _isWDHost: _isWDHost,
	  _isWDMainHost: _isWDMainHost,
	  _isEqualPartUrl: _isEqualPartUrl,
	  _normalizeReportData: _normalizeReportData,
	  _getMetaFromDom: _getMetaFromDom,
	  versionCompare: versionCompare
	};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	!(function(factory) {
	  if (typeof module !== "undefined" && module.exports) {
	    module.exports = factory();
	  } else {
	    window.SdkLoader = factory();
	  }
	})(function() {
	  __webpack_require__(4);
	  var ua = __webpack_require__(5);
	  var PUBLIC_ID = "gh_c6feb778444d";
	  function Loader() {
	    this._init();
	    var self = this;

	    return function() {
	      return self;
	    };
	  }

	  (function() {
	    var wxSDK =
	        "//assets.geilicdn.com/v-components/cdn/jweixin/1.3.2/index.fix.min.js",
	      qqSDK =
	        "//assets.geilicdn.com/v-components/cdn/qqsdk/default/index.fix.min.js",
	      qqBrowserServer = "//jsapi.qq.com/get?api=app.share",
	      kdjsbridge2 =
	        "https://assets.geilicdn.com/v-components/jsbridge/1.0.1/index.min.js";

	    this._init = function() {
	      this.isReady = false;
	      this.callbackList = [];

	      this._env = ua.name;
	      this.errorCount = 0;
	      this._loadEnv();
	    };

	    this.reset = function(mpid) {
	      this.isReady = false;

	      this._mpid = mpid || PUBLIC_ID;
	      this.errorCount = 0;
	      this._loadEnv(true);
	      return this;
	    };

	    this.block = function() {
	      this.isReady = false;
	      this.callbackList = [];
	    };

	    this.ready = function(cb) {
	      if (this.isReady) {
	        cb(this._env);
	        return;
	      }

	      this.callbackList.push(cb);
	    };

	    this.wxApiList = [
	      "onMenuShareTimeline",
	      "onMenuShareAppMessage",
	      "onMenuShareQQ",
	      "onMenuShareQZone",
	      "hideMenuItems",
	      "showMenuItems",
	      "chooseImage",
	      "getLocalImgData",
	      "previewImage",
	      "downloadImage",
	      "openLocation",
	      "getLocation",
	      "launch3rdApp",
	      "getInstallState",
	      "uploadImage",
	      "scanQRCode"
	    ];

	    this._mpid = PUBLIC_ID;

	    this._loadEnv = function(reset) {
	      var self = this;
	      var env = self._env;

	      var sdkMap = {
	        wx: wxSDK,
	        qq: qqSDK,
	        qqbrowser: qqBrowserServer,
	        app: kdjsbridge2,
	        kdweidian: kdjsbridge2,
	        vbuyer: kdjsbridge2,
	        browser: ""
	      };

	      if (env === ua.constant.WX && typeof window.wx === "object") {
	        if (reset) {
	          self._initWeixinSDK(reset);
	        } else {
	          window.wx &&
	            window.wx.ready(function() {
	              self._callback();
	            });
	        }

	        return;
	      }

	      if (ua.isApp && window.KDJSBridge2 !== undefined) {
	        self._callback();
	        return;
	      }

	      var sdk = sdkMap[env];
	      this._loadJs(sdk, function() {
	        if (env == ua.constant.WX) {
	          self._initWeixinSDK();
	          return;
	        }
	        self._callback();
	      });
	    };

	    this._initWeixinSDK = function(reset) {
	      var hostname = location.hostname;
	      var envMatch = hostname.match(/\.(dev|daily|pre)\./);
	      var env = envMatch ? "pre." : "";
	      // var env = "";
	      // if (hostname.match(/\.(dev|daily)\./)) {
	      //   env = "daily.";
	      // } else if (hostname.match(/\.pre\./)) {
	      //   env = "pre.";
	      // }

	      var self = this,
	        url =
	          "https://thor." +
	          env +
	          "weidian.com/weixin/getjsconfig/2.0?param=" +
	          JSON.stringify({
	            url: encodeURIComponent(location.href),
	            mpid: this._mpid || PUBLIC_ID
	          });
	      self._ajax(url, function(res) {
	        if (res.status.code == 0) {
	          var args = res.result;
	          // 配置微信JS-SDK
	          window.wx &&
	            window.wx.config({
	              beta: true,
	              debug: false,
	              appId: args.appId,
	              timestamp: args.timestamp,
	              nonceStr: args.nonceStr,
	              signature: args.signature,
	              jsApiList: self.wxApiList
	            });

	          window.wx &&
	            window.wx.ready(function() {
	              self._callback();
	              // 自定义触发wxsdk加载完成事件
	              self.dispatch("wxJsbridgeLoad", { reset : !!reset });
	            });

	          window.wx &&
	            window.wx.error(function() {
	              self.dispatch("wxJsbridgeLoad", false);
	            });
	        } else {
	          self.dispatch("wxJsbridgeLoad", false);
	        }
	      });
	    };

	    this.dispatch = function(event, detail) {
	      var e = new CustomEvent(event, {
	        bubbles: true,
	        cancelable: true,
	        detail: detail
	      });

	      window.dispatchEvent(e);
	    };

	    this._callback = function() {
	      var callbackList = this.callbackList;
	      var env = this._env;
	      var error = this.errorCount > 2;
	      callbackList.forEach(function(cb) {
	        cb(env, error);
	      });
	      this.callbackList = [];
	      this.isReady = true;
	    };

	    this._ajax = function(url, callback) {
	      var xhr = new XMLHttpRequest();
	      xhr.onload = function() {
	        if ((this.status >= 200 && this.status < 300) || xhr.status == 304) {
	          try {
	            callback && callback(JSON.parse(this.response));
	          } catch (e) {}
	        }
	      };
	      xhr.open("POST", url, true);
	      xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
	      xhr.send();
	    };

	    this._loadJs = function(src, cb) {
	      var _this = this;
	      if (!src) {
	        cb();
	        return;
	      }

	      var script = document.createElement("script");
	      script.src = src;
	      script.crossOrigin = "anonymous";
	      script.addEventListener("load", function() {
	        cb();
	      });

	      script.addEventListener("error", function() {
	        if (_this.errorCount++ >= 2) {
	          cb();
	        } else {
	          _this._loadJs(src, cb);
	        }
	      });

	      document.getElementsByTagName("head")[0].appendChild(script);
	    };
	  }.call(Loader.prototype));

	  return new Loader();
	});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = (function() {
	  if (typeof window.CustomEvent === "undefined") {
	    function CustomEvent(event, params) {
	      params = params || {
	        bubbles: false,
	        cancelable: false,
	        detail: undefined
	      };

	      var evt = document.createEvent("Events");

	      var bubbles = true;

	      for (var name in params) {
	        name === "bubbles"
	          ? (bubbles = !!params[name])
	          : (evt[name] = params[name]);
	      }

	      // 默认自定义事件支持冒泡且允许被取消
	      evt.initEvent(event, bubbles, true);

	      return evt;
	    }

	    CustomEvent.prototype = window.Event.prototype;

	    window.CustomEvent = CustomEvent;
	  }
	})();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var ua = window.navigator.userAgent;
	var constant = {
	  QQ_BROWSER: "qqbrowser",
	  WX: "wx",
	  QQ: "qq",
	  APP: "app",
	  VBUYER: "vbuyer",
	  WD: "kdweidian"
	};

	function _decideEnv() {
	  var env = "browser";
	  var version = "0.0.0";
	  var match = null;

	  if (/MQQBrowser\//i.test(ua)) {
	    env = "qqbrowser";
	  }

	  if (/MicroMessenger/i.test(ua)) {
	    env = "wx";
	  }

	  if (/QQ\/([\d\.]+)/i.test(ua)) {
	    env = "qq";
	  }

	  if (/WDAPP\(/.test(ua)) {
	    env = "app";
	  }

	  if (/WDAPP\(WDBuyer/.test(ua)) {
	    env = "vbuyer";
	    match = ua.match(/WDAPP\(WDBuyer\/([\d\.]+)/);
	  }

	  if (/WDAPP\(WD\//.test(ua)) {
	    env = "kdweidian";
	    match = ua.match(/WDAPP\(WD\/([\d\.]+)/);
	  }

	  if (match) {
	    version = match && match[1];
	  }
	  return {
	    name: env,
	    version: version,
	    constant: constant,
	    isWx: env === constant.WX,
	    isQQ: env === constant.QQ,
	    isQQBrowser: env === constant.QQ_BROWSER,
	    isVbuyer: env === constant.VBUYER,
	    isWD: env === constant.WD,
	    isApp:
	      env === constant.WD || env === constant.VBUYER || env === constant.APP
	  };
	}

	module.exports = _decideEnv();


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	* https://raw.githubusercontent.com/kvz/locutus/master/src/php/strings/sha1.js 
	*/
	function sha1(str) {
	  var hash;

	  var _rotLeft = function(n, s) {
	    var t4 = (n << s) | (n >>> (32 - s));
	    return t4;
	  };

	  var _cvtHex = function(val) {
	    var str = "";
	    var i;
	    var v;

	    for (i = 7; i >= 0; i--) {
	      v = (val >>> (i * 4)) & 0x0f;
	      str += v.toString(16);
	    }
	    return str;
	  };

	  var blockstart;
	  var i, j;
	  var W = new Array(80);
	  var H0 = 0x67452301;
	  var H1 = 0xefcdab89;
	  var H2 = 0x98badcfe;
	  var H3 = 0x10325476;
	  var H4 = 0xc3d2e1f0;
	  var A, B, C, D, E;
	  var temp;

	  // utf8_encode
	  str = unescape(encodeURIComponent(str));
	  var strLen = str.length;

	  var wordArray = [];
	  for (i = 0; i < strLen - 3; i += 4) {
	    j =
	      (str.charCodeAt(i) << 24) |
	      (str.charCodeAt(i + 1) << 16) |
	      (str.charCodeAt(i + 2) << 8) |
	      str.charCodeAt(i + 3);
	    wordArray.push(j);
	  }

	  switch (strLen % 4) {
	    case 0:
	      i = 0x080000000;
	      break;
	    case 1:
	      i = (str.charCodeAt(strLen - 1) << 24) | 0x0800000;
	      break;
	    case 2:
	      i =
	        (str.charCodeAt(strLen - 2) << 24) |
	        (str.charCodeAt(strLen - 1) << 16) |
	        0x08000;
	      break;
	    case 3:
	      i =
	        (str.charCodeAt(strLen - 3) << 24) |
	        (str.charCodeAt(strLen - 2) << 16) |
	        (str.charCodeAt(strLen - 1) << 8) |
	        0x80;
	      break;
	  }

	  wordArray.push(i);

	  while (wordArray.length % 16 !== 14) {
	    wordArray.push(0);
	  }

	  wordArray.push(strLen >>> 29);
	  wordArray.push((strLen << 3) & 0x0ffffffff);

	  for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
	    for (i = 0; i < 16; i++) {
	      W[i] = wordArray[blockstart + i];
	    }
	    for (i = 16; i <= 79; i++) {
	      W[i] = _rotLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
	    }

	    A = H0;
	    B = H1;
	    C = H2;
	    D = H3;
	    E = H4;

	    for (i = 0; i <= 19; i++) {
	      temp =
	        (_rotLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999) &
	        0x0ffffffff;
	      E = D;
	      D = C;
	      C = _rotLeft(B, 30);
	      B = A;
	      A = temp;
	    }

	    for (i = 20; i <= 39; i++) {
	      temp =
	        (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) & 0x0ffffffff;
	      E = D;
	      D = C;
	      C = _rotLeft(B, 30);
	      B = A;
	      A = temp;
	    }

	    for (i = 40; i <= 59; i++) {
	      temp =
	        (_rotLeft(A, 5) +
	          ((B & C) | (B & D) | (C & D)) +
	          E +
	          W[i] +
	          0x8f1bbcdc) &
	        0x0ffffffff;
	      E = D;
	      D = C;
	      C = _rotLeft(B, 30);
	      B = A;
	      A = temp;
	    }

	    for (i = 60; i <= 79; i++) {
	      temp =
	        (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) & 0x0ffffffff;
	      E = D;
	      D = C;
	      C = _rotLeft(B, 30);
	      B = A;
	      A = temp;
	    }

	    H0 = (H0 + A) & 0x0ffffffff;
	    H1 = (H1 + B) & 0x0ffffffff;
	    H2 = (H2 + C) & 0x0ffffffff;
	    H3 = (H3 + D) & 0x0ffffffff;
	    H4 = (H4 + E) & 0x0ffffffff;
	  }

	  temp = _cvtHex(H0) + _cvtHex(H1) + _cvtHex(H2) + _cvtHex(H3) + _cvtHex(H4);
	  return temp.toLowerCase();
	}

	module.exports = sha1;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// https://www.browserleaks.com/canvas#how-does-it-work
	function getCanvasFootPrint () {
	    var canvas = document.createElement("canvas");
	    canvas.width = 2000;
	    canvas.height = 200;
	    canvas.style.display = "inline";
	    var ctx = canvas.getContext("2d");

	    ctx.textBaseline = "alphabetic";

	    ctx.fillStyle = "#f60";
	    ctx.fillRect(125, 1, 62, 20);

	    ctx.fillStyle = "#069";
	    ctx.font = "11pt Arial";
	    ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);

	    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
	    ctx.font = "18pt Arial";
	    ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

	    return canvas.toDataURL();
	}

	module.exports = getCanvasFootPrint;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var regex_1 = __webpack_require__(9);
	var UA = navigator.userAgent.toLowerCase();
	/**
	 * 是否是移动端
	 * @returns true/false
	 */
	function isMobile() {
	    return regex_1.MOBILE_REGEXP.test(UA);
	}
	exports.isMobile = isMobile;
	/**
	 * 是否是Android系统
	 * @returns true/false
	 */
	function isAndroid() {
	    return regex_1.ANDROID_REGEXP.test(UA);
	}
	exports.isAndroid = isAndroid;
	/**
	 * 是否是iOS系统
	 * @returns true/false
	 */
	function isIOS() {
	    return regex_1.IOS_REGEXP.test(UA);
	}
	exports.isIOS = isIOS;
	/**
	 * 是否是苹果产品系列
	 * @returns true/false
	 */
	function isApple() {
	    return regex_1.APPLE_REGEXP.test(UA);
	}
	exports.isApple = isApple;
	/**
	 * 是否是iPhone
	 * @returns true/false
	 */
	function isIphone() {
	    return regex_1.IPHONE_REGEXP.test(UA);
	}
	exports.isIphone = isIphone;
	/**
	 * 是否是iPad
	 * @returns true/false
	 */
	function isIpad() {
	    return regex_1.IPAD_REGEXP.test(UA);
	}
	exports.isIpad = isIpad;
	/**
	 * 是否是QQ APP
	 * @returns true/false
	 */
	function isQQ() {
	    return regex_1.QQ_REGEXP.test(UA);
	}
	exports.isQQ = isQQ;
	/**
	 * 是否是微信
	 * @returns true/false
	 */
	function isWeiXin() {
	    return regex_1.WEI_XIN_REGEXP.test(UA) && !isWeiXinWork();
	}
	exports.isWeiXin = isWeiXin;
	/**
	 * 是否是企业微信
	 * @returns true/false
	 */
	function isWeiXinWork() {
	    return regex_1.WEI_XIN_WORK_REGEXP.test(UA);
	}
	exports.isWeiXinWork = isWeiXinWork;
	/**
	 * 是否是微博
	 * @returns true/false
	 */
	function isWeiBo() {
	    return regex_1.WEI_BO_REGEXP.test(UA);
	}
	exports.isWeiBo = isWeiBo;
	/**
	 * 是否是买家版
	 * @returns true/false
	 */
	function isWDBuyer() {
	    return regex_1.WD_BUYER_REGEXP.test(UA);
	}
	exports.isWDBuyer = isWDBuyer;
	/**
	 * 获取买家版,卖家版APP版本，返回版本号字符串，例如 5.5.1
	 * @returns 版本号。 不是买家版、卖家版就返回 undefined
	 */
	function getWDAppVersion() {
	    var version;
	    var match = UA.match(regex_1.WD_APP_VERSION_REGEXP);
	    if (match) {
	        version = match[1];
	    }
	    return version;
	}
	exports.getWDAppVersion = getWDAppVersion;
	/**
	 * 是否是卖家版
	 * @returns true/false
	 */
	function isWDSeller() {
	    return regex_1.WD_SELLER_REGEXP.test(UA);
	}
	exports.isWDSeller = isWDSeller;
	/**
	 * 判断是否在小程序环境
	 * @returns true/false
	 */
	function isMiniProgram() {
	    return (window.__wxjs_environment === 'miniprogram' ||
	        regex_1.MINI_PROGRAM_REGEXP.test(UA));
	}
	exports.isMiniProgram = isMiniProgram;
	/**
	 * 判断是否在支付宝环境
	 * @returns true/false
	 */
	function isAlipay() {
	    return regex_1.ALIPAY_REGEXP.test(UA);
	}
	exports.isAlipay = isAlipay;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// 判断Android系统的正则
	exports.ANDROID_REGEXP = /(Android)\s+([\d.]+)/i;
	// 判断iOS系统的正则
	exports.IOS_REGEXP = /\(i[^;]+;( U;)? cpu.+mac os x/i;
	// 判断移动端正则
	exports.MOBILE_REGEXP = /AppleWebKit.*Mobile.*/i;
	// 判断苹果产品系列正则
	exports.APPLE_REGEXP = /(iPhone|iPad|iPod|iOS|Mac OS X)/i;
	// 判断iPad正则
	exports.IPAD_REGEXP = /(iPad).*OS\s([\d_]+)/i;
	// 判断iPhone正则
	exports.IPHONE_REGEXP = /(iPhone\sOS)\s([\d_]+)/i;
	// 判断QQ APP正则
	exports.QQ_REGEXP = /QQ\/([\d.]+)/i;
	// 判断微信正则
	exports.WEI_XIN_REGEXP = /micromessenger/i;
	// 判断企业微信正则
	exports.WEI_XIN_WORK_REGEXP = /wxwork\/.* MicroMessenger/i;
	// 判断微博正则
	exports.WEI_BO_REGEXP = /WeiBo/i;
	// 判断买家版正则
	exports.WD_BUYER_REGEXP = /WDAPP\(WDBuyer/i;
	// 判断卖家版正则
	exports.WD_SELLER_REGEXP = /WDAPP\(WD\//i;
	// 获取买家版、买家版版本号正则
	exports.WD_APP_VERSION_REGEXP = /WDAPP\((?:wdbuyer|wd)\/([\d.]+)/i;
	// 判断支付宝正则
	exports.ALIPAY_REGEXP = /AlipayClient/i;
	// 判断miniProgram正则
	exports.MINI_PROGRAM_REGEXP = /miniProgram/i;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(11);

	module.exports = function() {
	  var tryjs = __webpack_require__(12);

	  var DATA_SPIDER = "data-spider";
	  var DATA_SPIDER_PRIOR = "data-spider-prior";

	  var body = document.body;
	  var curAttrValue;
	  var preAttrValue =
	    body.getAttribute(DATA_SPIDER_PRIOR) || body.getAttribute(DATA_SPIDER); // 初始化为当前数据

	  var callbacks = [];

	  var observer = new MutationObserver(
	    tryjs(function(mutations) {
	      mutations.forEach(function(record) {
	        if (record.type == "attributes") {
	          var attrName = record.attributeName;
	          if (attrName === DATA_SPIDER_PRIOR || attrName === DATA_SPIDER) {
	            curAttrValue =
	              body.getAttribute(DATA_SPIDER_PRIOR) ||
	              body.getAttribute(DATA_SPIDER);

	            // console.log("监听到 body 属性变化， pre: ", preAttrValue, " cur: ", curAttrValue);
	            if (curAttrValue && curAttrValue !== preAttrValue) {
	              // callback
	              for (var i = 0; i < callbacks.length; i++) {
	                callbacks[i](preAttrValue, curAttrValue);
	              }
	            }

	            preAttrValue = curAttrValue;
	          }
	        }
	      });
	    })
	  );

	  observer.observe(body, { attributes: true });

	  return function(fn) {
	    callbacks.push(fn);
	  };
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
	// Authors: Graeme Yeates (github.com/megawac) 
	window.MutationObserver=window.MutationObserver||function(w){function v(a){this.i=[];this.m=a}function I(a){(function c(){var d=a.takeRecords();d.length&&a.m(d,a);a.h=setTimeout(c,v._period)})()}function p(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==w&&a[c]!==w&&(b[c]=a[c]);return b}function J(a,b){var c=C(a,b);return function(d){var f=d.length,n;b.a&&3===a.nodeType&&
	a.nodeValue!==c.a&&d.push(new p({type:"characterData",target:a,oldValue:c.a}));b.b&&c.b&&A(d,a,c.b,b.f);if(b.c||b.g)n=K(d,a,c,b);if(n||d.length!==f)c=C(a,b)}}function L(a,b){return b.value}function M(a,b){return"style"!==b.name?b.value:a.style.cssText}function A(a,b,c,d){for(var f={},n=b.attributes,k,g,x=n.length;x--;)k=n[x],g=k.name,d&&d[g]===w||(D(b,k)!==c[g]&&a.push(p({type:"attributes",target:b,attributeName:g,oldValue:c[g],attributeNamespace:k.namespaceURI})),f[g]=!0);for(g in c)f[g]||a.push(p({target:b,
	type:"attributes",attributeName:g,oldValue:c[g]}))}function K(a,b,c,d){function f(b,c,f,k,y){var g=b.length-1;y=-~((g-y)/2);for(var h,l,e;e=b.pop();)h=f[e.j],l=k[e.l],d.c&&y&&Math.abs(e.j-e.l)>=g&&(a.push(p({type:"childList",target:c,addedNodes:[h],removedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),y--),d.b&&l.b&&A(a,h,l.b,d.f),d.a&&3===h.nodeType&&h.nodeValue!==l.a&&a.push(p({type:"characterData",target:h,oldValue:l.a})),d.g&&n(h,l)}function n(b,c){for(var g=b.childNodes,
	q=c.c,x=g.length,v=q?q.length:0,h,l,e,m,t,z=0,u=0,r=0;u<x||r<v;)m=g[u],t=(e=q[r])&&e.node,m===t?(d.b&&e.b&&A(a,m,e.b,d.f),d.a&&e.a!==w&&m.nodeValue!==e.a&&a.push(p({type:"characterData",target:m,oldValue:e.a})),l&&f(l,b,g,q,z),d.g&&(m.childNodes.length||e.c&&e.c.length)&&n(m,e),u++,r++):(k=!0,h||(h={},l=[]),m&&(h[e=E(m)]||(h[e]=!0,-1===(e=F(q,m,r,"node"))?d.c&&(a.push(p({type:"childList",target:b,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),z++):l.push({j:u,l:e})),
	u++),t&&t!==g[u]&&(h[e=E(t)]||(h[e]=!0,-1===(e=F(g,t,u))?d.c&&(a.push(p({type:"childList",target:c.node,removedNodes:[t],nextSibling:q[r+1],previousSibling:q[r-1]})),z--):l.push({j:e,l:r})),r++));l&&f(l,b,g,q,z)}var k;n(b,c);return k}function C(a,b){var c=!0;return function f(a){var k={node:a};!b.a||3!==a.nodeType&&8!==a.nodeType?(b.b&&c&&1===a.nodeType&&(k.b=G(a.attributes,function(c,f){if(!b.f||b.f[f.name])c[f.name]=D(a,f);return c})),c&&(b.c||b.a||b.b&&b.g)&&(k.c=N(a.childNodes,f)),c=b.g):k.a=
	a.nodeValue;return k}(a)}function E(a){try{return a.id||(a.mo_id=a.mo_id||H++)}catch(b){try{return a.nodeValue}catch(c){return H++}}}function N(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}function G(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function F(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}v._period=30;v.prototype={observe:function(a,b){for(var c={b:!!(b.attributes||b.attributeFilter||b.attributeOldValue),c:!!b.childList,g:!!b.subtree,
	a:!(!b.characterData&&!b.characterDataOldValue)},d=this.i,f=0;f<d.length;f++)d[f].s===a&&d.splice(f,1);b.attributeFilter&&(c.f=G(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({s:a,o:J(a,c)});this.h||I(this)},takeRecords:function(){for(var a=[],b=this.i,c=0;c<b.length;c++)b[c].o(a);return a},disconnect:function(){this.i=[];clearTimeout(this.h);this.h=null}};var B=document.createElement("i");B.style.top=0;var D=(B="null"!=B.attributes.style.value)?L:M,H=1;return v}(void 0);
	//# sourceMappingURL=mutationobserver.map


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = function(fn, backupFn) {
	  return function() {
	    try {
	      fn.apply(this, arguments);
	    } catch (err) {
	      console.warn("vcollect err: ", err);

	      if (!backupFn || typeof backupFn !== "function") {
	        return;
	      }

	      var args = Array.prototype.slice.call(arguments, 0);
	      args.unshift(err);

	      backupFn.apply(this, args);
	    }
	  };
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// owl 用于性能监控，因为历史原因，延续 owl 的叫法

	"use strict";
	var performance = __webpack_require__(14);
	var autoComputeFirstScreen = __webpack_require__(16);

	var autoComputeFirstScreenConfig = {
	  request: {
	    excludeUrl: []
	  }
	};
	var handComputeFirstScreenConfig = {
	    request: {
	      excludeUrl: []
	    }
	};

	var afterReport = function() {};
	var showPerfResult = function(result) {
	  try {
	    console.log("[vcollect] performance info:");
	    console.log(" - report type: " + result.type);
	    console.log(" - first screen time: ", result.firstScreenTime, "ms");
	    console.log(" - details: window.vcollectPerf");
	    var lastImgDetail = result.firstScreenImagesDetail[0];

	    if (lastImgDetail) {
	      console.log(" - last-image: ", lastImgDetail);
	    }
	  } catch (err) {}
	};

	function autoCompute() {
	  // 自动上报性能数据
	  autoComputeFirstScreenConfig = autoComputeFirstScreen({
	    onReport: function(result) {
	      // 用于开发者查看详细性能信息
	      window.vcollectPerf = result;

	      if (result.success) {
	        //console.log('auto--ok')
	        performance.reportTime(result.firstScreenTimeStamp, result, "auto");
	        showPerfResult(result);
	      }

	      afterReport && afterReport(result);
	    },
	    // 所有 XHR 请求返回触发回调
	    onAllXhrResolved: function(time) {
	      performance.xhrLoad(time);
	    },

	    delayReport: 300
	  });
	}

	module.exports = {
	  perf: performance,
	  onReport: function(callback) {
	    if (callback && typeof callback === "function") {
	      afterReport = callback;
	    }
	  },
	  init: function(core, options) {
	    var _this = this;
	    performance.install.call(this.perf, core, options);

	    if (options && options.auto) {
	      autoCompute();

	      core.onSpmChange(function(pre) {
	        if (pre && pre.spmb) {
	          _this.reportPerf();
	        }
	      });
	    }
	  },
	  reportPerf: function() {
	    // 手动上报性能数据
	    autoComputeFirstScreen.report({
	      // 所有 XHR 请求返回触发回调
	      onAllXhrResolved: function(time) {
	        performance.xhrLoad(time);
	      },

	      onReport: function(result) {
	        // 用于开发者查看详细性能信息
	        window.vcollectPerf = result;
	        if (result.success) {
	          //console.log('hand--ok')
	          performance.reportTime(result.firstScreenTimeStamp, result, "hand");
	          showPerfResult(result);
	        }

	        afterReport && afterReport(result);
	      },

	        request: handComputeFirstScreenConfig.request
	    });
	  },
	  getFirstScreenInfo: function() {},
	  ignoreRequestUrl:function(urls) {
	    var i = 0;
	    var currentUrl;
	    if(urls instanceof Array){
	      for(;i<urls.length;i++){
	        currentUrl = urls[i];
	        if(typeof currentUrl === 'string'){
	            handComputeFirstScreenConfig.request.excludeUrl.push(currentUrl);
	            autoComputeFirstScreenConfig.request.excludeUrl.push(currentUrl);
	        }
	      }
	    }
	  }
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var util = __webpack_require__(2);

	// 一些模块级全局变量
	var perf = {};
	var win = window;
	var performance = win.performance;
	var STORAGE_NAME = "__performance__visit_history";
	var long2shortMap = __webpack_require__(15);

	var debugMode = /debug/.test(window.location.href);

	var globalFirstScreenResult = {};

	function _source2plainObject(target) {
	  var copy = {};
	  for (var key in target) {
	    var shortKey = key;
	    if (typeof target[key] == "function") continue;
	    if (typeof target[key] == "number") {
	      if (key === "navigationStart") {
	        copy[shortKey] = globalFirstScreenResult.navigationStartTimeStamp;
	      } else {
	        copy[shortKey] = Number(target[key].toFixed(3));
	      }
	    } else {
	      copy[shortKey] = target[key];
	    }
	  }
	  return copy;
	}

	// 获取开发者设置的 navigation start time
	// var globalHasSettedPerfStart;
	// 应该废弃了，待验证
	// function getSettedNavigationStartTime() {
	//   var curPerfStartTimeStamp = parseFloat(document.body.getAttribute('perf-start'));

	//   if (curPerfStartTimeStamp) {
	//     if (!globalHasSettedPerfStart) {
	//       return performance.timing.navigationStart;
	//     } else {
	//       return curPerfStartTimeStamp;
	//     }
	//   } else {
	//     return performance.timing.navigationStart;
	//   }
	// }

	function long2shortData(longData) {
	  return longData; // 后端接口暂不支持长短字段名称切换，先直接返回长字段对象

	  var shortData = {};

	  for (var longKey in longData) {
	    if (long2shortMap[longKey]) {
	      shortData[long2shortMap[longKey]] = longData[longKey];
	    } else {
	      shortData[longKey] = longData[longKey];
	    }
	  }

	  return shortData;
	}

	// 初始化各种 API
	function initUserTimingAPI(core) {
	  if (!performance) return;

	  var _originalMark = function(name) {
	    performance.mark(name);
	    var data = performance.getEntriesByName(name, "mark").pop();
	    _reportUserTiming(data);
	  };

	  var _mockMark = function(name) {
	    var data = {
	      duration: 0,
	      entryType: "mark",
	      name: name,
	      startTime: Date.now()
	    };

	    _mockMarkQueue.push(data);
	    _reportUserTiming(data);
	  };

	  var _originalMeasure = function(name, startMark, endMark) {
	    performance.measure(name, startMark, endMark);
	    var data = performance.getEntriesByName(name, "measure").pop();
	    _reportUserTiming(data);
	  };

	  var _mockMeasure = function(name, startMark, endMark) {
	    var startTime, endTime, duration;
	    var mockMarkQueue = _mockMarkQueue;

	    if (startMark === undefined) {
	      startTime = 0;
	    } else {
	      startTime = mockMarkQueue._getMarkStartTime(startMark);
	    }

	    if (endMark === undefined) {
	      endTime = Date.now();
	    } else {
	      endTime = mockMarkQueue._getMarkStartTime(endMark);
	    }

	    duration = endTime - startTime;
	    var data = {
	      duration: duration,
	      entryType: "measure",
	      name: name,
	      startTime: startTime
	    };
	    _reportUserTiming(data);
	  };

	  var _reportUserTiming = function(data) {
	    util._getNetwork(function(network) {
	      data.network = network;
	      var plainData = _source2plainObject(data);
	      core.report("performance", "userTiming", plainData);
	    });
	  };

	  var _mockMarkQueue = {
	    push: function(data) {
	      this._markCache.push(data);
	    },
	    _markCache: [],
	    _getMarkStartTime: function(name) {
	      var startTime;
	      this._markCache.forEach(function(mark) {
	        if (mark.name === name) {
	          startTime = mark.startTime;
	        }
	      });
	      return startTime;
	    }
	  };

	  // 应该废弃了，待验证
	  // function _getHighResolutionTime() {
	  //   if (typeof performance.now === "function") return performance.now();
	  //   return Date.now() - getSettedNavigationStartTime();
	  // }

	  this.mark = (function() {
	    if (typeof performance.mark === "function") {
	      return _originalMark;
	    }
	    return _mockMark;
	  })();

	  this.measure = (function() {
	    if (typeof performance.measure === "function") {
	      return _originalMeasure;
	    }
	    return _mockMeasure;
	  })();
	}

	// 运行主要函数（巨型函数）
	function runPerf(core) {
	  //提前定义接口函数，规避兼容性问题
	  this.recordFirstScreen = function() {};
	  this.docRetrieveStart = function() {};
	  this.docRetrieveEnd = function() {};
	  this.onRecord = false;

	  if (!performance || performance.timing == undefined) return;

	  var _perfQueue = {
	    _firstScreenLoadStart: 0,
	    _firstScreenLoadEnd: 0,
	    _resourceTiming: [],
	    _pageTiming: null,
	    reportData: function(firstScreenResult) {
	      var self = this;

	      if (!firstScreenResult.success) {
	        return;
	      }

	      util._getNetwork(function(network) {
	        var counts = {
	          xhrCounts: 0,
	          cssCounts: 0,
	          imgCounts: 0,
	          jsCounts: 0,
	          fontCounts: 0,
	          unknown: 0,
	          resourceCounts: 0
	        };

	        var formateRequestUrl = function(url) {
	          if (url) {
	            return (url = url
	              .replace(/^http(s)?:/, "")
	              .replace(/^\/\//, "")
	              .replace(/\?[\w\W]*/, ""));
	          } else {
	            return url;
	          }
	        };

	        var matchRequest = function(url, requests) {
	          for (var i = 0, len = requests.length; i < len; i++) {
	            if (formateRequestUrl(requests[i].src) == formateRequestUrl(url)) {
	              return true;
	            }
	          }

	          return false;
	        };

	        var filterResourceAndReport = function(resource) {
	          // 在 navigationStart 之前开始加载的资源不再统计
	          if (resource.startTime < firstScreenResult.navigationStartTime) {
	            return;
	          }

	          var copiedResource = _source2plainObject(resource);

	          // 首屏时间之后再发出的资源请求不再统计
	          if (
	            copiedResource.startTime &&
	            parseInt(copiedResource.startTime) >
	              parseInt(firstScreenResult.firstScreenTime)
	          ) {
	            return;
	          }

	          var resourceUrl = copiedResource.name;
	          // var firstScreenImgs = firstScreenResult.firstScreenImages;

	          var cssReg = /\.((css$)|(css\?)|(css#))/;
	          var jsReg = /\.((js$)|(js\?)|(js#))/;
	          var fontReg = /\.(ttf|woff)$/;
	          var imgReg = /(\.)(png|jpg|jpeg|gif|webp)($|#|\?)/;

	          if (imgReg.test(resourceUrl)) {
	            // if (firstScreenImgs.indexOf(resourceUrl) > -1) {
	            counts.imgCounts++;
	            copiedResource.initiatorType = "img";
	            // 只记录 首屏内的图片
	          } else if (
	            matchRequest(resourceUrl, firstScreenResult.requests) ||
	            /callback=jsonp/i.test(resourceUrl)
	          ) {
	            // 只记录 首屏内的请求
	            counts.xhrCounts++;
	            copiedResource.initiatorType = "xhr";
	          } else if (cssReg.test(resourceUrl)) {
	            // css 文件
	            counts.cssCounts++;
	            copiedResource.initiatorType = "css";
	          } else if (jsReg.test(resourceUrl)) {
	            // js 文件
	            counts.jsCounts++;
	            copiedResource.initiatorType = "script";
	          } else if (fontReg.test(resourceUrl)) {
	            // 未识别的资源记为 unknown
	            counts.fontCounts++;
	            copiedResource.initiatorType = "font";
	          } else {
	            counts.unknown++;
	            copiedResource.initiatorType = "unknown";
	          }

	          counts.resourceCounts++;

	          copiedResource.network = network;
	          core.report(
	            "performance",
	            "resourceTiming",
	            long2shortData(copiedResource)
	          );
	        };

	        // 处理 resourceTiming 样本对象，用于上报自定义数据时生成对象模板
	        self._resourceTiming.forEach(function(resource) {
	          filterResourceAndReport(resource);
	        });

	        // 上报的数据模板
	        var reportDataTemplate = JSON.stringify({
	          network: null,
	          initiatorType: "vcollect-perf",
	          nextHopProtocol: "http/1.1",
	          workerStart: 0,
	          redirectStart: 0,
	          redirectEnd: 0,
	          fetchStart: 0,
	          domainLookupStart: 0,
	          domainLookupEnd: 0,
	          connectStart: 0,
	          connectEnd: 0,
	          secureConnectionStart: 0,
	          requestStart: 0,
	          responseStart: 0,
	          responseEnd: 0,
	          transferSize: 0,
	          encodedBodySize: 0,
	          decodedBodySize: 0,
	          serverTiming: [],
	          name: "",
	          entryType: "resource",
	          startTime: 0,
	          duration: 0
	        });

	        // 从性能监控结果中取出一部分内容上报 （上报到 name 字段），便于后续分析
	        var _getDetails = function() {
	          var details = {};
	          var maxNum = 12;

	          for (var key in firstScreenResult) {
	            if (
	              !/^((firstScreenImages)|(firstScreenImagesDetail)|(network)|(firstScreenTimeStamp)|(requests)|(navigationStartTimeStamp))$/.test(
	                key
	              )
	            ) {
	              details[key] = firstScreenResult[key];
	            }
	          }

	          // 自定义 firstScreenImages
	          if (firstScreenResult.firstScreenImagesDetail) {
	            details.imgDetail = firstScreenResult.firstScreenImagesDetail.slice(
	              0,
	              maxNum
	            );
	            if (firstScreenResult.firstScreenImagesDetail.length > maxNum) {
	              details.imgDetail.push("...");
	            }
	          }

	          return details;
	        };

	        // 上传更多性能监控信息
	        var reportMoreInfo = function() {
	          var reportObj = JSON.parse(reportDataTemplate);
	          var details = _getDetails();

	          reportObj.initiatorType = "vcollect-perf";

	          if (debugMode) {
	            console.log("上报的自定义性能字段：", details);
	          }

	          reportObj.name = JSON.stringify(details);

	          core.report(
	            "performance",
	            "resourceTiming",
	            long2shortData(reportObj)
	          );

	          // todo report spider test data
	        };

	        try {
	          reportMoreInfo();
	        } catch (err) {
	          if (debugMode) {
	            console.log("error in reportMoreInfo: ", err);
	          }
	        }

	        // 如果有性能数据（不等于 -1），则上报，否则不上报
	        if (firstScreenResult.success) {
	          // 处理 pageTiming
	          var pageTiming = self._pageTiming;

	          for (var countsKey in counts) {
	            pageTiming[countsKey] = counts[countsKey];
	          }

	          pageTiming.firstScreenLoadStart = self._firstScreenLoadStart;
	          pageTiming.firstScreenLoadEnd = self._firstScreenLoadEnd;
	          pageTiming.network = network;
	          pageTiming.firstScreen = firstScreenResult.firstScreenTime; // 上报性能数据时运行

	          var plainData = _source2plainObject(pageTiming);

	          // 上报首次二次数据
	          var type = _determineVisitType() === 0 ? "first" : "second";
	          core.report("performance", "pageTiming_" + type, plainData);
	        }
	      });
	    }
	  };

	  // 上报性能数据
	  this.reportTime = function _reportTime(time, firstScreenResult, reportType) {
	    var pageTiming = performance.timing;

	    globalFirstScreenResult = firstScreenResult;

	    pageTiming.name = "document";
	    pageTiming.entryType = "navigation";
	    pageTiming.startTime = 0;
	    pageTiming.duration = globalFirstScreenResult.firstScreenTime;
	    _perfQueue._firstScreenLoadEnd = time;
	    _perfQueue._pageTiming = pageTiming;

	    _setResourceTiming();

	    _perfQueue.reportData(firstScreenResult, reportType);
	  };

	  this.xhrLoad = function _xhrLoad(time) {
	    _perfQueue._firstScreenLoadStart = time;
	  };

	  function _setResourceTiming() {
	    if (typeof performance.getEntries === "function") {
	      var resource = performance.getEntriesByType("resource");
	      _perfQueue._resourceTiming = resource;
	    }
	  }

	  function _determineVisitType() {
	    var historyViewList = util._getLocalStorageItemSafty(STORAGE_NAME);
	    var pageMeta = core.getMeta();
	    var curSpm = [pageMeta.spma, pageMeta.spmb].join(".");
	    var index = -1;

	    var getSourceArray = function() {
	      var arr = [];

	      var scripts = [].slice.call(document.getElementsByTagName("script"), 0);
	      var links = [].slice.call(document.getElementsByTagName("link"), 0);

	      var i;
	      var len;
	      var attr;

	      var formateUrl = function(url) {
	        if (url) {
	          return (url = url.replace(/^http(s)?:/, "").replace(/^\/\//, ""));
	        } else {
	          return url;
	        }
	      };

	      for (i = 0, len = scripts.length; i < len; i++) {
	        attr = scripts[i].getAttribute("src");
	        if (attr && /\.js/.test(attr)) {
	          arr.push(formateUrl(attr));
	        }
	      }

	      for (i = 0, len = links.length; i < len; i++) {
	        attr = links[i].getAttribute("href");
	        if (attr && /\.css/.test(attr)) {
	          arr.push(formateUrl(attr));
	        }
	      }

	      return arr;
	    };

	    // 解析 LS 存储的值
	    var parseLS = function(preValue) {
	      var value = [];
	      try {
	        value = JSON.parse(preValue);
	      } catch (err) {}

	      if (Object.prototype.toString.call(value) !== "[object Array]") {
	        value = [];
	      }

	      return value;
	    };

	    // 页面上 script 和 link 的资源链接数组
	    var sourceArray = getSourceArray();
	    sourceArray.sort();

	    var md5SourceArray = util._generateHash(sourceArray.join(","));
	    historyViewList = historyViewList ? historyViewList.split("|") : [];
	    var secondTimeVisit = historyViewList.some(function(record, i) {
	      record = util._JSONParseSafty(record);
	      if (record.spm === curSpm) {
	        index = i;

	        var prevSourceArray = null;

	        // 兼容处理，以前 record.v 存储的是数组
	        if (/\[/.test(record.v)) {
	          prevSourceArray = parseLS(record.v);
	        }

	        var md5PreSourceArray = prevSourceArray
	          ? util._generateHash(prevSourceArray.join(","))
	          : record.v;

	        // 2592000 * 1000 缓存时间
	        if (
	          md5PreSourceArray === md5SourceArray &&
	          Date.now() - record.time <= 2592000000
	        ) {
	          return true;
	        }
	        return false;
	      }
	      return false;
	    });

	    var viewList = JSON.stringify({
	      spm: curSpm,
	      time: Date.now(),
	      v: md5SourceArray
	    });
	    if (index === -1) {
	      historyViewList.splice(historyViewList.length, 0, viewList);
	    } else {
	      historyViewList.splice(index, 1, viewList);
	    }

	    util._setLocalStorageItemSafty(STORAGE_NAME, historyViewList.join("|"));
	    return secondTimeVisit ? 1 : 0;
	  }
	}

	perf.install = function(core, options) {
	  initUserTimingAPI.call(perf, core);
	  runPerf.call(perf, core);
	};

	module.exports = perf;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = {
	  initiatorType: "it",
	  nextHopProtocol: "nhp",
	  workerStart: "ws",
	  redirectStart: "rs",
	  redirectEnd: "re",
	  fetchStart: "fs",
	  domainLookupStart: "dls",
	  domainLookupEnd: "dle",
	  connectStart: "cs",
	  connectEnd: "ce",
	  secureConnectionStart: "scs",
	  requestStart: "reqs",
	  responseStart: "ress",
	  responseEnd: "rese",
	  transferSize: "ts",
	  encodedBodySize: "ebs",
	  decodedBodySize: "dbs",
	  serverTiming: "st",
	  name: "n",
	  entryType: "et",
	  startTime: "st",
	  duration: "dt"
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @description compute first screen time of one page with inaccuracy less than 250ms
	 * @author 刘远洋 https://github.com/hoperyy
	 * @date 2018/02/22
	 */
	var supportTiming = window.performance && window.performance.timing;
	var supportPerformance =
	  window.performance &&
	  window.performance.getEntries &&
	  typeof window.performance.getEntries === "function" &&
	  window.performance.getEntries() instanceof Array;

	function noop() {}
	if (supportTiming && supportPerformance) {
	  module.exports = __webpack_require__(17).auto;
	  module.exports.report = __webpack_require__(17).hand;
	} else {
	  module.exports = noop;
	  module.exports.report = noop;
	}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// 脚本开始运行的时间，用于各种 log 等
	var scriptStartTime = new Date().getTime();

	var win = window;
	var util = __webpack_require__(18);
	var _global = util.initGlobal();

	function generateApi() {
	  // 所有变量和函数定义在闭包环境，为了支持同时手动上报和自动上报功能
	  function runOnPageStable() {
	    // 标记稳定时刻已经找到
	    if (_global.hasStableFound) {
	      return;
	    }

	    _global.hasStableFound = true;

	    // 标记停止监听请求
	    _global.stopCatchingRequest = true;

	    // 获取当前时刻获取的首屏信息，并根据该信息获取首屏时间
	    var stableObject = recordFirstScreenInfo();

	    // 触发用户注册的回调
	    _global.onStableStatusFound(stableObject);
	  }

	  function _report(resultObj) {
	    resultObj.device = _global.device;
	    resultObj.success = true;

	    if (_global.delayReport) {
	      var timer = setTimeout(function() {
	        if (!_global.hasReported) {
	          _global.hasReported = true;
	          _global.onReport(resultObj); // 上报的内容是定时器之前的数据
	        }
	        clearTimeout(timer);
	      }, _global.delayReport);
	    } else {
	      if (!_global.hasReported) {
	        _global.hasReported = true;
	        _global.onReport(resultObj);
	      }
	    }
	  }

	  // 重操作：记录运行该方法时刻的 dom 信息，主要是 images
	  function recordFirstScreenInfo() {
	    var firstScreenImages = _getImagesInFirstScreen();
	    var firstScreenImagesDetail = [];

	    // 找到最后一个图片加载完成的时刻，作为首屏时刻
	    // 最终呈现给用户的首屏信息对象
	    var resultObj = {
	      type: "perf",
	      isStaticPage: _global.isFirstRequestSent
	        ? false
	        : /auto/.test(_global.reportDesc)
	          ? true
	          : "unknown",
	      firstScreenImages: [],
	      firstScreenImagesLength: 0,
	      firstScreenImagesDetail: firstScreenImagesDetail,
	      requests: util.transRequestDetails2Arr(_global),
	      firstScreenTime: -1, // 需要被覆盖的
	      firstScreenTimeStamp: -1, // 需要被覆盖的
	      // maxErrorTime: 0,
	      navigationStartTimeStamp: _global._originalNavStart,
	      version: util.version,
	      runtime: util.getTime() - scriptStartTime,
	      reportDesc: _global.reportDesc,
	      url: window.location.href.substring(0, 200),
	      // globalIndex: _global.globalIndex,
	      reportTimeFrom: _global.reportTimeFrom // init，后面还会被赋值
	    };

	    var processNoImages = function() {
	      if (/^hand/.test(_global.reportDesc)) {
	        resultObj.firstScreenTimeStamp = _global.handExcuteTime;
	        resultObj.firstScreenTime =
	          _global.handExcuteTime - _global._originalNavStart;

	        resultObj.reportTimeFrom = "perf-hand-from-force";
	        _report(resultObj);
	      } else {
	        util.getDomReadyTime(_global, function(domReadyTimeStamp) {
	          resultObj.firstScreenTimeStamp = domReadyTimeStamp;
	          resultObj.firstScreenTime =
	            domReadyTimeStamp - _global._originalNavStart;
	          resultObj.reportTimeFrom = "domContentLoadedEventStart";
	          _report(resultObj);
	        });
	      }
	    };

	    resultObj.firstScreenImages = firstScreenImages;
	    resultObj.firstScreenImagesLength = firstScreenImages.length;

	    if (!firstScreenImages.length) {
	      processNoImages();
	    } else {
	      util.getByOnload(
	        _global,
	        firstScreenImages,
	        function(imgOnLoadResult) {
	          resultObj.firstScreenTime = imgOnLoadResult.firstScreenTime;
	          resultObj.firstScreenTimeStamp = imgOnLoadResult.firstScreenTimeStamp;
	          resultObj.firstScreenImagesDetail =
	            imgOnLoadResult.firstScreenImagesDetail;
	          resultObj.reportTimeFrom = "perf-img-from-onload";
	          _report(resultObj);
	        },
	        function(performanceResult) {
	          resultObj.firstScreenTime = performanceResult.firstScreenTime;
	          resultObj.firstScreenTimeStamp =
	            performanceResult.firstScreenTimeStamp;
	          resultObj.firstScreenImagesDetail =
	            performanceResult.firstScreenImagesDetail;
	          resultObj.reportTimeFrom = "perf-img-from-performance";
	          _report(resultObj);
	        }
	      );
	    }

	    return resultObj;
	  }

	  function _getImagesInFirstScreen() {
	    var screenHeight = win.innerHeight;
	    var screenWidth = win.innerWidth;

	    // 写入设备信息，用于上报（这里只会执行一次）
	    _global.device.screenHeight = screenHeight;
	    _global.device.screenWidth = screenWidth;

	    var nodeIterator = util.queryAllNode(_global.ignoreTag);
	    var currentNode = nodeIterator.nextNode();
	    var imgList = [];

	    var onImgSrcFound = function(imgSrc) {
	      var parsedImg = util.parseUrl(imgSrc);
	      var protocol = parsedImg.protocol;
	      if (protocol && protocol.indexOf("http") === 0) {
	        // 去重
	        if (imgList.indexOf(parsedImg.href) === -1) {
	          imgList.push(parsedImg.href);
	        }
	      }
	    };

	    while (currentNode) {
	      var imgSrc = util.getImgSrcFromDom(currentNode);

	      if (!imgSrc) {
	        currentNode = nodeIterator.nextNode();
	        continue;
	      }

	      util.recordCurrentPos(currentNode, _global);

	      if (util.isInFirstScreen(currentNode)) {
	        onImgSrcFound(imgSrc);
	      }

	      currentNode = nodeIterator.nextNode();
	    }

	    return imgList;
	  }

	  // 插入脚本，用于获取脚本运行完成时间，这个时间用于获取当前页面是否有异步请求发出
	  function testStaticPage() {
	    util.testStaticPage(function() {
	      runOnPageStable("perf-auto-timeout");
	    }, _global);
	  }

	  function overrideRequest() {
	    util.overrideRequest(_global, function() {
	      runOnPageStable("perf-auto-request-end");
	    });
	  }

	  function monitorPageLeave() {
	    util.monitorPageLeave(function() {
	      runOnPageStable("perf-auto-page-leave");
	    }, _global);
	  }

	  function mergeUserConfig(userConfig) {
	    util.mergeUserConfig(_global, userConfig);
	  }

	  return {
	    mergeUserConfig: mergeUserConfig,
	    testStaticPage: testStaticPage,
	    overrideRequest: overrideRequest,
	    recordFirstScreenInfo: recordFirstScreenInfo,
	    runOnPageStable: runOnPageStable,
	    monitorPageLeave: monitorPageLeave,
	    global: _global
	  };
	}

	module.exports = {
	  auto: function(userConfig) {
	    var api = generateApi("auto");
	    api.global.reportDesc = "auto-perf";
	    api.mergeUserConfig(userConfig);
	    api.testStaticPage();
	    api.overrideRequest();
	    api.monitorPageLeave();
	    return api.global;
	  },
	  hand: function(userConfig) {
	    var api = generateApi("hand");
	    api.global.reportDesc = "hand-perf";
	    api.global.handExcuteTime = new Date().getTime();
	    api.mergeUserConfig(userConfig);
	    api.runOnPageStable("perf-hand");
	    return api.global;
	  }
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var MutationObserver =
	  window.MutationObserver ||
	  window.WebKitMutationObserver ||
	  window.MozMutationObserver;

	var acftGlobal = __webpack_require__(19);

	var SLICE = Array.prototype.slice;
	var imgFilter = [/(\.)(png|jpg|jpeg|gif|webp)/i]; // 匹配图片的正则表达式

	module.exports = {
	  version: "6.0.0-beta",

	  getDomReadyTime: function(_global, callback) {
	    var count = 0;
	    var handler = function() {
	      if (performance.timing.domContentLoadedEventStart != 0) {
	        callback(performance.timing.domContentLoadedEventStart);
	      }

	      if (++count >= 50 || performance.timing.domContentLoadedEventStart != 0) {
	        clearInterval(timer);
	      }
	    };
	    // 轮询获取 domComplete 的值，最多轮询 10 次
	    var timer = setInterval(handler, 500);

	    handler();
	  },
	  /* 这部分都是获取首屏图片的代码 */
	  getImgSrcFromDom: function(dom) {
	    var src;

	    if (dom.nodeName.toUpperCase() == "IMG") {
	      src = dom.getAttribute("src");
	    } else {
	      var computedStyle = window.getComputedStyle(dom);
	      var bgImg =
	        computedStyle.getPropertyValue("background-image") ||
	        computedStyle.getPropertyValue("background");

	      var match = bgImg.match(/url\(.+\)/);
	      var str = match && match[0];
	      if (str) {
	        str = str.replace(/^url\(['"]?/, "").replace(/['"]?\)$/, "");

	        if (
	          (/^http/.test(str) || /^\/\//.test(str)) &&
	          this._filteImg(str)
	        ) {
	          src = str;
	        }
	      }
	    }

	    return src;
	  },
	  _filteImg: function(src) {
	    for (var i = 0, len = imgFilter.length; i < len; i++) {
	      if (imgFilter[i].test(src)) {
	        return true;
	      }
	    }

	    return false;
	  },

	  currentPos: {
	    scrollTop: 0,
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0
	  },
	  recordCurrentPos: function(currentNode, _global) {
	    var boundingClientRect = currentNode.getBoundingClientRect();

	    var scrollWrapper = document.querySelector(_global.scrollWrapper);
	    var scrollTop;

	    // 优先使用加了 perf-scroll 标志的 dom 节点作为滚动容器
	    if (scrollWrapper) {
	      var scrollWrapperClientRect = scrollWrapper.getBoundingClientRect();

	      if (scrollWrapperClientRect.top < 0) {
	        scrollTop = -scrollWrapperClientRect.top;
	      } else {
	        scrollTop = 0;
	      }
	    } else {
	      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	    }

	    var top = boundingClientRect.top; // getBoundingClientRect 会引起重绘
	    var bottom = boundingClientRect.bottom;
	    var left = boundingClientRect.left;
	    var right = boundingClientRect.right;

	    this.currentPos.scrollTop = scrollTop;
	    this.currentPos.top = top;
	    this.currentPos.bottom = bottom;
	    this.currentPos.left = left;
	    this.currentPos.right = right;
	  },
	  isInFirstScreen: function(currentNode) {
	    // 如果已不显示（display: none），top 和 bottom 均为 0
	    if (!this.currentPos.top && !this.currentPos.bottom) {
	      return false;
	    }

	    var screenHeight = window.innerHeight;
	    var screenWidth = window.innerWidth;

	    var scrollTop = this.currentPos.scrollTop;
	    var top = this.currentPos.top;
	    var left = this.currentPos.left;
	    var right = this.currentPos.right;

	    // 如果在结构上的首屏内（上下、左右）
	    // 这边还要考虑 fix 定位的图片 todo.kjc
	    if (scrollTop + top < screenHeight && right > 0 && left < screenWidth) {
	      return true;
	    }

	    return false;
	  },
	  queryAllNode: function(ignoreTag) {
	    var _this = this;
	    var ignoredNodes = document.querySelectorAll(ignoreTag);
	    var firstScreenDom = document.querySelector("[perf-dom]") || document.body;

	    var result = document.createNodeIterator(
	      document.body,
	      NodeFilter.SHOW_ELEMENT,
	      function(node) {
	        // 判断该元素及其父元素是否是需要忽略的元素
	        if (
	          !_this._shouldIgnoreNode(node, ignoredNodes) &&
	          _this._isChild(node, firstScreenDom)
	        ) {
	          return NodeFilter.FILTER_ACCEPT;
	        }
	      }
	    );

	    return result;
	  },
	  _shouldIgnoreNode: function(child, ignoredNodes) {
	    for (var i = 0, len = ignoredNodes.length; i < len; i++) {
	      if (this._isChild(child, ignoredNodes[i])) {
	        return true;
	      }
	    }

	    return false;
	  },
	  _isChild: function(child, parent) {
	    var isChild = false;

	    while (child) {
	      if (child === parent) {
	        isChild = true;
	        break;
	      }

	      child = child.parentNode;
	    }

	    return isChild;
	  },
	  parseUrl: function(url) {
	    var anchor = document.createElement("a");
	    anchor.href = url;
	    return anchor;
	  },

	  /* 下面是其他代码 */
	  transRequestDetails2Arr: function(_global) {
	    var requests = [];
	    var requestItem = {};

	    // 规范化 requests
	    for (var requestDetailKey in _global.requestDetails) {
	      var parsedRequestDetailKey = requestDetailKey
	        .split(">time")[0]
	        .replace(/^http(s)?:/, "")
	        .replace(/^\/\//, "");

	      requestItem = {
	        src: parsedRequestDetailKey
	      };

	      for (var requestItemkey in _global.requestDetails[requestDetailKey]) {
	        requestItem[requestItemkey] =
	          _global.requestDetails[requestDetailKey][requestItemkey];
	      }

	      requests.push(requestItem);
	    }

	    return requests;
	  },
	  initGlobal: function() {
	    return {
	      // 是否已经上报的标志
	      stopCatchingRequest: false,

	      // 是否抓取过请求的标志位
	      isFirstRequestSent: false,

	      // 可以抓取请求的时间窗口队列
	      catchRequestTimeSections: [],

	      // 设备信息，用于样本分析
	      device: {},

	      requestDetails: {},

	      ignoreTag: "[perf-ignore]",

	      scrollWrapper: "[perf-scroll]",

	      // 是否已经上报
	      hasReported: false,

	      hasStableFound: false,

	      // 描述上报类型，默认是空
	      reportDesc: "",

	      // 手动上报运行的时刻
	      handExcuteTime: 0,

	      _originalNavStart: window.performance.timing.navigationStart,

	      onReport: function() {},

	      onStableStatusFound: function() {},

	      request: {
	        limitedIn: [],
	        exclude: [/(sockjs)|(socketjs)|(socket\.io)|(logtake)/],
	          excludeUrl:[]
	      },

	      // 获取数据后，认为渲染 dom 的时长；同时也是串联请求的等待间隔
	      renderTimeAfterGettingData: 300,

	      // onload 之后延时一段时间，如果到期后仍然没有异步请求发出，则认为是纯静态页面
	      watingTimeWhenDefineStaticPage: 2000,

	      // 延时执行上报
	      delayReport: 0,

	      // 用于拦截 jsonp 请求，js url 匹配该正则时
	      jsonpFilter: /callback=jsonp/,

	      reportTimeFrom: ""
	    };
	  },

	  getTime: function() {
	    return new Date().getTime();
	  },
	  overrideRequest: function(_global, onStable) {
	    var _this = this;
	    var requestTimerStatusPool = {};

	    var hasAllReuestReturned = function() {
	      for (var key in _global.requestDetails) {
	        if (
	          _global.requestDetails[key] &&
	          _global.requestDetails[key].status !== "complete"
	        ) {
	          return false;
	        }
	      }

	      return true;
	    };

	    var isRequestTimerPoolEmpty = function() {
	      for (var key in requestTimerStatusPool) {
	        if (requestTimerStatusPool[key] !== "stopped") {
	          return false;
	        }
	      }

	      return true;
	    };

	    var shouldCatchThisRequest = function(url) {
	      // 默认抓取该请求到队列，认为其可能影响首屏
	      var shouldCatch = true;

	      if (_global.stopCatchingRequest) {
	        shouldCatch = false;
	      }

	      var sendTime = _this.getTime();

	      // 如果发送数据请求的时间点在时间窗口内，则认为该抓取该请求到队列，主要抓取串联型请求
	      for (
	        var sectionIndex = 0;
	        sectionIndex < _global.catchRequestTimeSections.length;
	        sectionIndex++
	      ) {
	        var poolItem = _global.catchRequestTimeSections[sectionIndex];
	        if (sendTime >= poolItem[0] && sendTime <= poolItem[1]) {
	          break;
	        }
	      }
	      if (
	        _global.catchRequestTimeSections.length &&
	        sectionIndex === _global.catchRequestTimeSections.length
	      ) {
	        shouldCatch = false;
	      }

	      // 如果发送请求地址不符合白名单和黑名单规则。则认为不该抓取该请求到队列
	      for (var i = 0, len = _global.request.limitedIn.length; i < len; i++) {
	        if (!_global.request.limitedIn[i].test(url)) {
	          shouldCatch = false;
	        }
	      }

	      for (i = 0, len = _global.request.exclude.length; i < len; i++) {
	        if (_global.request.exclude[i].test(url)) {
	          shouldCatch = false;
	        }
	      }

	      //可以设置被忽略的 url
	      for (i = 0, len = _global.request.excludeUrl.length; i < len; i++){
	        if(url.indexOf(_global.request.excludeUrl[i]) !== -1){
	          shouldCatch = false;
	          break;
	        }
	      }

	      /*if(!shouldCatch){
	          console.log('被忽略的URL',url)
	      }*/

	      return shouldCatch;
	    };

	    var ensureRequestDetail = function(requestKey) {
	      if (!_global.requestDetails[requestKey]) {
	        _global.requestDetails[requestKey] = {
	          status: "",
	          completeTimeStamp: "",
	          completeTime: "",
	          type: ""
	        };
	      }
	    };

	    var onRequestSend = function(url, type) {
	      if (!_global.isFirstRequestSent) {
	        _global.isFirstRequestSent = true;
	      }

	      var requestKey = url + ">time:" + _this.getTime();
	      ensureRequestDetail(requestKey);

	      _global.requestDetails[requestKey].status = "sent";
	      _global.requestDetails[requestKey].type = type;

	      requestTimerStatusPool[requestKey] = "start";

	      return {
	        requestKey: requestKey
	      };
	    };

	    var afterRequestReturn = function(requestKey) {
	      //  当前时刻
	      var returnTime = _this.getTime();

	      ensureRequestDetail(requestKey);
	      // 标记这个请求完成
	      _global.requestDetails[requestKey].status = "complete";
	      _global.requestDetails[requestKey].completeTimeStamp = returnTime;
	      _global.requestDetails[requestKey].completeTime =
	        returnTime - _global._originalNavStart;

	      // 从这个请求返回的时刻起，延续一段时间，该时间段内的请求也需要被监听
	      _global.catchRequestTimeSections.push([
	        returnTime,
	        returnTime + _global.renderTimeAfterGettingData
	      ]);

	      var renderDelayTimer = setTimeout(function() {
	        requestTimerStatusPool[requestKey] = "stopped";
	        if (hasAllReuestReturned() && isRequestTimerPoolEmpty()) {
	          _global.onAllXhrResolved(Date.now());
	          onStable();
	        }
	        clearTimeout(renderDelayTimer);
	      }, _global.renderTimeAfterGettingData);
	    };

	    var overideXhr = function(onRequestSend, afterRequestReturn) {
	      var XhrProto = XMLHttpRequest.prototype;

	      var oldOpen = XhrProto.open;
	        XhrProto.open = function(method, url) {
	          this._http = this._http || {};
	          this._http.method = method;
	          this._http.url = url;
	          return oldOpen.apply(this, [].slice.call(arguments));
	        };

	      var oldXhrSend = XhrProto.send;
	      XhrProto.send = function() {
	        if (shouldCatchThisRequest(this._http.url)) {
	          var requestKey = onRequestSend(this._http.url, "xhr").requestKey;

	          var oldReadyCallback = this.onreadystatechange;
	          this.onreadystatechange = function() {
	            if (this.readyState === 4) {
	              afterRequestReturn(requestKey);
	            }

	            if (oldReadyCallback && oldReadyCallback.apply) {
	              oldReadyCallback.apply(this, arguments);
	            }
	          };
	        }

	        return oldXhrSend.apply(this, SLICE.call(arguments));
	      };
	    };

	    var overrideFetch = function(onRequestSend, afterRequestReturn) {
	      if (window.fetch && typeof Promise === "function") {
	        // ensure Promise exists. If not, skip cathing request
	        var oldFetch = window.fetch;
	        window.fetch = function() {
	          var _this = this;
	          var args = arguments;

	          return new Promise(function(resolve, reject) {
	            var url;
	            var requestKey;

	            if (typeof args[0] === "string") {
	              url = args[0];
	            } else if (typeof args[0] === "object") {
	              // Request Object
	              url = args[0].url;
	            }

	            // when failed to get fetch url, skip report
	            if (url) {
	              // console.warn('[auto-compute-first-screen-time] no url param found in "fetch(...)"');
	              requestKey = onRequestSend(url, "fetch").requestKey;
	            }

	            oldFetch
	              .apply(_this, args)
	              .then(function(response) {
	                if (requestKey) {
	                  afterRequestReturn(requestKey);
	                }
	                resolve(response);
	              })
	              .catch(function(err) {
	                if (requestKey) {
	                  afterRequestReturn(requestKey);
	                }
	                reject(err);
	              });
	          });
	        };
	      }
	    };
	    // overide fetch first, then xhr, because fetch could be mocked by xhr
	    overrideFetch(onRequestSend, afterRequestReturn);

	    overideXhr(onRequestSend, afterRequestReturn);
	  },

	  monitorPageLeave: function(onStable, _global) {
	    // window.addEventListener("beforeunload", function() {
	    //   if (_global.hasStableFound) {
	    //     // todo
	    //   }
	    // })
	  },
	  mergeUserConfig: function(_global, userConfig) {
	    if (userConfig) {
	      for (var userConfigKey in userConfig) {
	        if (
	          [
	            "watingTimeWhenDefineStaticPage",
	            "onReport",
	            "onStableStatusFound",
	            "renderTimeAfterGettingData",
	            "onAllXhrResolved",
	            "delayReport",
	            "jsonpFilter"
	          ].indexOf(userConfigKey) !== -1
	        ) {
	          _global[userConfigKey] = userConfig[userConfigKey];
	        }
	      }

	      var requestConfig = userConfig.request || userConfig.xhr;
	      if (requestConfig) {
	        if (requestConfig.limitedIn) {
	          _global.request.limitedIn = _global.request.limitedIn.concat(
	            requestConfig.limitedIn
	          );
	        }
	        if (requestConfig.exclude) {
	          _global.request.exclude = _global.request.exclude.concat(
	            requestConfig.exclude
	          );
	        }
	        if (requestConfig.excludeUrl) {
	          _global.request.excludeUrl = _global.request.excludeUrl.concat(
	              requestConfig.excludeUrl
	          );
	        }
	      }

	      if (userConfig.img) {
	        if (
	          typeof userConfig.img === "object" &&
	          typeof userConfig.img.test === "function"
	        ) {
	          _global.img.push(userConfig.img);
	        } else {
	          console.error(
	            '[auto-compute-first-screen-time] param "img" should be type RegExp'
	          );
	        }
	      }
	    }
	  },
	  testStaticPage: function(onStable, _global) {
	    var handler = function() {
	      acftGlobal.onloadFinished = true;

	      // 如果脚本运行完毕，延时一段时间后，再判断页面是否发出异步请求，如果页面还没有发出异步请求，则认为该时刻为稳定时刻，尝试上报
	      var timer = setTimeout(function() {
	        clearTimeout(timer);

	        if (!_global.isFirstRequestSent) {
	          onStable();
	        }
	      }, _global.watingTimeWhenDefineStaticPage);
	    };

	    if (acftGlobal.onloadFinished) {
	      handler();
	    } else {
	      window.addEventListener("load", handler);
	    }
	  },
	  cycleGettingPerformaceTime: function(_global, firstScreenImages, callback) {
	    var maxFetchTimes = 50;
	    var fetchCount = 0;

	    var getPerformanceTime = function() {
	      var source = performance.getEntries();
	      var matchedLength = 0;
	      var i;
	      var len;

	      var firstScreenImagesDetail = []; // reset

	      // source 去重
	      var filteredSource = [];
	      var sourceMap = {};
	      for (i = 0, len = source.length; i < len; i++) {
	        var sourceItem = source[i];
	        var url = sourceItem.name;
	        if (!sourceMap[url]) {
	          sourceMap[url] = true;
	          filteredSource.push(sourceItem);
	        }
	      }

	      // 从 source 中找到图片加载信息
	      for (i = 0, len = filteredSource.length; i < len; i++) {
	        var sourceItem = filteredSource[i];
	        var imgUrl = sourceItem.name;
	        if (firstScreenImages.indexOf(imgUrl) !== -1) {
	          matchedLength++;

	          var responseEnd = parseInt(sourceItem.responseEnd);
	          var fetchStart = parseInt(sourceItem.fetchStart);
	          firstScreenImagesDetail.push({
	            src: imgUrl,
	            responseEnd: responseEnd < 0 ? 0 : responseEnd,
	            fetchStart: fetchStart < 0 ? 0 : fetchStart,
	            from: "performance"
	          });
	        }
	      }

	      // 倒序
	      firstScreenImagesDetail.sort(function(a, b) {
	        return b.responseEnd - a.responseEnd;
	      });

	      if (matchedLength === firstScreenImages.length) {
	        clearInterval(timer);

	        callback({
	          firstScreenTime: parseInt(firstScreenImagesDetail[0].responseEnd),
	          firstScreenTimeStamp:
	            parseInt(firstScreenImagesDetail[0].responseEnd) +
	            _global._originalNavStart,
	          firstScreenImagesDetail: firstScreenImagesDetail
	        });
	      }

	      fetchCount++;
	      if (fetchCount >= maxFetchTimes) {
	        clearInterval(timer);
	      }
	    };

	    // 轮询多次获取 performance 信息，直到 performance 信息能够展示首屏资源情况
	    var timer = setInterval(getPerformanceTime, 1000);

	    getPerformanceTime();
	  },
	  getByOnload: function(_global, firstScreenImages, callbackImg, callbackPerf) {
	    this.cycleGettingPerformaceTime(_global, firstScreenImages, function(
	      performanceResult
	    ) {
	      callbackPerf(performanceResult);
	    });
	  }
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = {
	  onloadFinished: false
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * 如果业务方在调用上存在错误，spider通过两种方式进行通知
	 * 在必经流程中，使用 throw new Error() 抛出异常  ==> 修正为 console.warn by liuyuanyang 2018/01/27；
	 * 在边界场景中，使用 console API 与 return 特殊值的方式取消本次行为与给予提示
	 */
	var util = __webpack_require__(2);
	var spiderImpression = __webpack_require__(21);
	var spiderFix = __webpack_require__(22).default;
	var uaTool = __webpack_require__(8);
	var urlTool = __webpack_require__(23);
	var console = util._console;
	var spider = {};
	var VERSION = "0.1.3";

	var DATA_SPIDER = "data-spider";
	var DATA_SPIDER_PRIOR = "data-spider-prior";
	var DATA_SPIDER_MODE = "data-spider-mode";
	var DATA_ACTION_NAME = "data-spider-action-name";
	var DATA_ACTION_ARGS = "data-spider-action-args";
	var DATA_SPIDER_IMPRESSION = "data-spider-impression";
	var AUTO_TRACK_SPIDER = "spider-auto";

	var URL_SEARCH_PARAMS_SPM = "spider";
	var URL_SEARCH_PARAMS_ACTION = "spider_action";
	var URL_SEARCH_PARAMS_KEY = "spider_token";
	var VOID_HREF = "javascript:";

	var COOKIE_NAME_PREFIX = "__spider__" + "token" + "_";
	var cookieStoreDomain = util._getCookieStoreDomain();

	var constants = {
	  BUY_NOW: "_buyNow",
	  ADD_TO_CART: "_addToCart",
	  ADD_TO_FAVORITES: "_addToFavorites",
	  CANCEL_TO_FAVORITES: "_cancelToFavorites",
	  SHARE: "_share",
	  LIKE: "_like",
	  EXPOSE: "_expose",
	  ITEM: "_item",
	  SHOP: "_shop",
	  DOWNLOAD: "_download",
	  DEPRECATED: "_deprecated"
	};

	// default value should always be compliant
	var cur_spm_array = [undefined, undefined, undefined, undefined];
	var cur_page_args = {};
	var cur_action_name = "";
	var cur_action_args = {};
	var cur_elem = null;

	// var prevSpmb = "";

	cur_spm_array.toString = function() {
	  return this.join(".");
	};

	function reset() {
	  spider.trackPageview = util._noop;
	  spider.trackAction = util._noop;
	  spider.transferAction = util._noop;
	  spider.transferActionBy = util._noop;
	  spider.getClickElement = util._noop;
	  spider.extractActionFrom = util._noop;

	  spider.disableAutoReport = util._noop;
	  spider.constants = util._noop;

	  spider.getSearchParams = util._noop;
	  spider.getCookie = util._getCookie;
	  spider.VERSION = VERSION;
	}

	// 恢复出厂设置（该逻辑不会报错，用于 catch 到错误后的恢复）
	spider.reset = reset;

	spider.init = function(core) {
	  // 先初始化
	  this.reset();
	  try {
	    spiderFix.init();
	  } catch (error) {
	    console.error("error", error);
	  }
	  var storeKey = _getCurURLSearchParams()[URL_SEARCH_PARAMS_KEY];

	  var timer = null;
	  function trackPageview(pageArgs) {
	    if (!document.body.dataset.spider && !document.body.dataset.spiderPrior) {
	      return;
	    }
	    var args = arguments;
	    clearTimeout(timer);
	    timer = setTimeout(function() {
	      // 参数可变，进行适配
	      if (args.length === 0) {
	        pageArgs = {};
	      } else {
	        pageArgs =
	          typeof args[args.length - 1] === "object"
	            ? args[args.length - 1]
	            : {};
	      }
	      var meta = core.getMeta();
	      cur_spm_array[0] = meta.spma;
	      cur_spm_array[1] = meta.spmb;
	      cur_spm_array[2] = "0";
	      cur_spm_array[3] = "0";

	      if (!cur_spm_array[0] || !cur_spm_array[1]) {
	        // 如果 a、b 位有一个不存在，则不上报
	        // console.warn("[vcollect 提示] meta & body 上必须包含 data-spider 值");
	        return;
	      }
	      var prevInfo = _restorePrevInfo();
	      // make to a function, todo
	      if (pageArgs._page) {
	        var actionName = pageArgs._page;
	        delete pageArgs._page;
	        if (_isBuildinActionName(actionName)) {
	          // 这个判断条件很重要，非常重要，要提取成函数
	          if (prevInfo.prev_spm) {
	            prevInfo.prev_action_name = actionName;
	            prevInfo.prev_action_args = util._extendObj(
	              {},
	              pageArgs,
	              prevInfo.prev_action_args
	            );
	          }
	        } else {
	          console.error(
	            "pageArgs._page 需是内置的 actionName 值，详见 spider.contants"
	          );
	        }
	      }
	      // if prevAction still don't have actionName, default to one
	      if (!prevInfo.prev_action_name && prevInfo.prev_spm) {
	        prevInfo.prev_action_name =
	          "_jumpTo_" + cur_spm_array[0] + "." + cur_spm_array[1];
	      }

	      _sendPrevActionIfNeeded(prevInfo);

	      cur_page_args = pageArgs;
	      // always ignore developer-defined ts & wfr
	      cur_page_args.ts = +new Date();
	      cur_page_args.wfr = _getCurURLSearchParams()["wfr"];
	      if (!cur_page_args.wfr) {
	        delete cur_page_args.wfr;
	      }
	      cur_page_args.ifr = _getCurURLSearchParams()["ifr"];
	      if (!cur_page_args.ifr) {
	        delete cur_page_args.ifr;
	      }

	      // make to a function like _constructPageviewReportData, todo
	      var curInfo = util._extendObj({}, prevInfo);

	      curInfo.cur_spm = cur_spm_array.toString();
	      curInfo.cur_page_args = cur_page_args;
	      _report("page_view", curInfo);

	      clearTimeout(timer);
	    });
	  }

	  function trackAction(action, callback) {
	    if (!cur_spm_array[0] || !cur_spm_array[1]) {
	      var meta = core.getMeta();
	      cur_spm_array[0] = meta.spma;
	      cur_spm_array[1] = meta.spmb;
	    }

	    if (!cur_spm_array[0] || !cur_spm_array[1]) {
	      // 如果 a、b 位有一个不存在，则不上报
	      // console.warn("[vcollect 提示] meta & body 上必须包含 data-spider 值");
	      return;
	    }

	    var success = _updateState(action);
	    if (!success) return;
	    _report("click", _constructActionReportData(), callback);
	  }

	  function trackImpression(action, callback) {
	    if (!cur_spm_array[0] || !cur_spm_array[1]) {
	      var meta = core.getMeta();
	      cur_spm_array[0] = meta.spma;
	      cur_spm_array[1] = meta.spmb;
	    }

	    if (!cur_spm_array[0] || !cur_spm_array[1]) {
	      // 如果 a、b 位有一个不存在，则不上报
	      // console.warn("[vcollect 提示] meta & body 上必须包含 data-spider 值");
	      return;
	    }

	    var success = _updateState(action);
	    if (!success) return;
	    _report("expose", _constructActionReportData(), callback);
	  }

	  //调用该方法 页面可能会跳走
	  function transferActionBy(url, action) {
	    url = url.trim();
	    if (_isPrivateProtocolA(url)) {
	      if (_isWebviewA(url)) {
	        var anchorElem = util._urlParse(url);
	        var queryParams = util._queryStringParse(anchorElem.search);
	        if (!queryParams.url) {
	          trackAction(action);
	          return url;
	        }

	        var redirectUrl = _assignDataToUrl(queryParams.url, action);
	        queryParams.url = redirectUrl;
	        var querystring = util._queryStringStringify(queryParams);
	        // use string replace instead of using URLUtils.toString()
	        // to preserve the original string as far as possible
	        return url.replace(/(\?|#)[\S]*$/, "") + "?" + querystring;
	      } else {
	        trackAction(action);
	        return url;
	      }
	    } else if (!_isHttpOrHttpsUrl(url)) {
	      return url;
	    } else if (util._is3rdPartUrl(url)) {
	      trackAction(action);
	      return url;
	    }

	    // 是否支持转换H5链接到小程序
	    function supportTransformUrl() {
	      var params = _getCurURLSearchParams();
	      var minip = "vc_minip";
	      return params[minip] !== "wx_zhuanzhuan";
	    }

	    // 是否为专享小程序webview
	    function isSpecialMiniProgram() {
	      var params = _getCurURLSearchParams();
	      return params["invoke"] == "thirdApp";
	    }

	    function isMiniProgramPath(path) {
	      return /^\/lib\//.test(path);
	    }

	    //如果是小程序环境
	    if (uaTool.isMiniProgram()) {
	      // 打开H5 url 才需要加 invoke
	      if (isSpecialMiniProgram() && !isMiniProgramPath(url)) {
	        // 专享小程序webview
	        url = urlTool.setQuerystring(url, {
	          invoke: "thirdApp"
	        });
	      }
	      if (supportTransformUrl()) {
	        // 支持转换H5链接到小程序
	        var entry = _resolveMiniProgramEntry(url);
	        var pageMap = {
	          item: {
	            url: "/lib/item/dist/pages/index/index?itemId=",
	            actionName: spider.constants.ITEM
	          },
	          user: {
	            url: "/lib/shop/dist/pages/index/index?shopId=",
	            actionName: spider.constants.SHOP
	          }
	        };

	        if (entry) {
	          if (_isElement(action)) {
	            action = extractActionFrom(action);
	          } else if (!util._isObjectAndNotNull(action)) {
	            console.error("action 必须是一个对象");
	            action = null;
	          }

	          if (action !== null) {
	            action.actionName = pageMap[entry.page].actionName;
	            trackAction(action);
	          }
	          window.wx &&
	            window.wx.miniProgram.navigateTo({
	              url: pageMap[entry.page].url + entry.id + "&" + entry.param
	            });
	          return VOID_HREF;
	        }
	      }
	    }
	    return _assignDataToUrl(url, action);
	  }

	  function transferAction(action) {
	    var success = _updateState(action);
	    if (!success) {
	      return;
	    } else {
	      core.updateDocReferrer();
	      storeKey = _storeCurInfoToCookie();
	    }
	  }

	  function getClickElement() {
	    return cur_elem;
	  }

	  /**
	   * extractActionFrom, if the input is a valid SpiderElement return action
	   * else return null.  can also be used as isSpiderElement() function
	   *
	   * @param   {HTMLElement}   spiderElement
	   * @returns {Action|null}   not completely validated, just from DOM
	   */
	  function extractActionFrom(spiderElement) {
	    if (!(_isElement(spiderElement) && _isSpiderElementLikely(spiderElement))) {
	      console.error("extractActionFrom() 应接收 spiderElement 作参数");
	      return null;
	    }

	    var dElem = spiderElement;
	    var actionName = dElem.getAttribute(DATA_ACTION_NAME) || "";

	    var actionArgs = util._JSONParseSafty(dElem.getAttribute(DATA_ACTION_ARGS));

	    var cElem = _closestElementUntilBody(dElem.parentNode, _isSpiderCElement);

	    var spmc;
	    var spmd;
	    if (cElem) {
	      spmc =
	        cElem.getAttribute(DATA_SPIDER_PRIOR) ||
	        cElem.getAttribute(DATA_SPIDER);
	      spmd = String(_getIndexOf_From(dElem, cElem) || "_");
	    } else {
	      spmc = "_";
	      spmd = String(_getIndexOfFreeBtn(dElem) || "_");
	    }

	    if (spmc === "_" && actionName === "" && _isNetworkA(dElem)) {
	      var realHref = dElem.getAttribute("href");
	      if (realHref.indexOf("#") !== 0) {
	        spmc = AUTO_TRACK_SPIDER;
	        spmd = String(_getIndexOf_UntrackA(dElem));
	      }
	    }

	    return {
	      spmc: spmc,
	      spmd: spmd,
	      actionName: actionName,
	      actionArgs: actionArgs
	    };
	  }

	  // to fix webkit highlight color, use document.body
	  document.body.addEventListener("click", _eventHandler, true);
	  function disableAutoReport() {
	    document.body.removeEventListener("click", _eventHandler, true);
	    return _eventHandler;
	  }

	  // 透传通用参数
	  function passCommonQuery(query, currentPageQuery) {
	    var PREFIX = "vc_";

	    function isCommonKey(key) {
	      return key.indexOf(PREFIX) === 0 && key.length > PREFIX.length;
	    }

	    for (var key in currentPageQuery) {
	      if (
	        util._hasOwn(currentPageQuery, key) &&
	        isCommonKey(key) &&
	        currentPageQuery[key]
	      ) {
	        query[key] = query[key] || currentPageQuery[key];
	      }
	    }
	    return query;
	  }

	  // 将数据合并到url上
	  function _assignDataToUrl(url, action) {
	    var success = _updateState(action);
	    if (!success) return url;

	    var parsedUrl = util._urlParse(url);
	    var query = util._queryStringParse(parsedUrl.search.replace("?", ""));

	    // keep here to be compatibility with piwik-spm.js
	    // 解决跨域后 spider_token 无法传递的问题。
	    if (!util._isEqualPartUrl(parsedUrl.hostname)) {
	      query[URL_SEARCH_PARAMS_SPM] = cur_spm_array.toString();
	      if (cur_action_name) {
	        query[URL_SEARCH_PARAMS_ACTION] = cur_action_name;
	      }
	    } else {
	      query[URL_SEARCH_PARAMS_KEY] = _storeCurInfoToCookie();
	    }

	    var curUrlParams = _getCurURLSearchParams();
	    query.wfr = query.wfr || curUrlParams.wfr;
	    query.ifr = query.ifr || curUrlParams.ifr;
	    // share_relation 不能在当前页面生成，只能透传
	    query.share_relation = curUrlParams.share_relation;

	    // 合并参数
	    util._extendObj(query, passCommonQuery(query, curUrlParams));

	    if (!query.wfr) delete query.wfr;
	    if (!query.ifr) delete query.ifr;
	    if (!query.share_relation) delete query.share_relation;

	    var hash = parsedUrl.hash;
	    var querystring = util._queryStringStringify(query);
	    // use string replace instead of using URLUtils.toString()
	    // to preserve the original string as far as possible
	    return url.replace(/(\?|#)[\S]*$/, "") + "?" + querystring + hash;
	  }

	  function _constructActionReportData() {
	    return {
	      cur_spm: cur_spm_array.toString(),
	      cur_page_args: cur_page_args,
	      cur_action_name: cur_action_name,
	      cur_action_args: cur_action_args
	    };
	  }

	  function _constructPageviewReportData(prevInfo) {
	    // todo init

	    var transformed = _replacePropertyPrefix(prevInfo, "cur_", "prev_");

	    return util._extendObj({}, transformed, {
	      cur_spm: cur_spm_array.toString(),
	      cur_page_args: cur_page_args
	    });
	  }

	  function _closestElementUntilBody(startElement, matcher) {
	    var target = startElement;
	    while (true) {
	      if (target === document.body) return null;
	      if (target === document.documentElement) return null;
	      // elem.parentNode may return null @see http://devdocs.io/dom/node/parentnode
	      if (target === null) return null;
	      if (matcher(target)) return target;

	      target = target.parentNode;
	    }
	  }

	  function _isSpiderElementLikely(elem) {
	    if (elem.hasAttribute(DATA_SPIDER) && elem.getAttribute(DATA_SPIDER) === "")
	      return true;
	    if (
	      elem.getAttribute(DATA_ACTION_NAME) ||
	      // elem.getAttribute(DATA_SPIDER_IMPRESSION) !== undefined
	      elem.hasAttribute(DATA_SPIDER_IMPRESSION)
	    )
	      return true;
	    if (_isNetworkA(elem)) return true;
	    if (_isPrivateProtocolA(elem)) return true;
	    return false;
	  }

	  function _isSpiderCElement(elem) {
	    return !!(
	      elem.getAttribute(DATA_SPIDER_PRIOR) || elem.getAttribute(DATA_SPIDER)
	    );
	  }

	  function _isElement(any) {
	    if (!util._isObjectAndNotNull(any)) return false;
	    return any.nodeType === Node.ELEMENT_NODE ? true : false;
	  }

	  /**
	   * get index of elem from spiderCElement's descendant spiderElement,
	   * index starts from 1
	   * number 0 is used to represent not finding elem in spiderCElement
	   *
	   * @param   {Element} elem
	   * @param   {Element} spiderCElement
	   * @returns {number}
	   */
	  function _getIndexOf_From(elem, spiderCElement) {
	    var MISSING_VALUE = 0;
	    var elements = _getPotentialSpiderElementFrom(spiderCElement);
	    var count = 0;

	    for (var i = 0, len = elements.length; i < len; i++) {
	      var element = elements[i];
	      if (_isSpiderElementLikely(element)) count++;
	      if (element === elem) {
	        return count;
	      }
	    }

	    return MISSING_VALUE;
	  }

	  function _getIndexOfFreeBtn(elem) {
	    var MISSING_VALUE = 0;
	    var count = 0;
	    var elements = document.querySelectorAll(
	      "[" + DATA_ACTION_NAME + "], [" + DATA_SPIDER_IMPRESSION + "]"
	    );

	    for (var i = 0; i < elements.length; i++) {
	      var cElem = _closestElementUntilBody(
	        elements[i].parentNode,
	        _isSpiderCElement
	      );
	      if (cElem === null) count++;
	      if (elem === elements[i]) return count;
	    }

	    return MISSING_VALUE;
	  }

	  function _getIndexOf_UntrackA(elem) {
	    var MISSING_VALUE = 0;
	    var elements = document.querySelectorAll("a");
	    var count = 0;

	    elements = [].filter.call(elements, function(element) {
	      var cElem = _closestElementUntilBody(
	        element.parentNode,
	        _isSpiderCElement
	      );

	      var actionName = element.getAttribute(DATA_ACTION_NAME);
	      var spmd = element.getAttribute(DATA_SPIDER);

	      // 如果 a 链接不存在 c 区块、data-spider 无值(自身非 c 区块)、不存在 actionName
	      // 则被认为是一个未显示申明的 a 元素
	      var untrack = !cElem && !actionName && !spmd;
	      return untrack;
	    });

	    for (var i = 0, len = elements.length; i < len; i++) {
	      var element = elements[i];
	      count++;
	      if (element === elem) {
	        return count;
	      }
	    }

	    return MISSING_VALUE;
	  }

	  function _getPotentialSpiderElementFrom(contextElem) {
	    return contextElem.querySelectorAll(
	      "[" +
	        DATA_SPIDER +
	        "], [" +
	        DATA_ACTION_NAME +
	        "],[" +
	        DATA_SPIDER_IMPRESSION +
	        "], a[href]"
	    );
	  }

	  function _eventHandler(e) {
	    var dElem = _closestElementUntilBody(e.target, _isSpiderElementLikely);
	    if (dElem === null) return;

	    var action = extractActionFrom(dElem);
	    if (action === null) return;

	    // structurally unvalid action should not be treated as SpiderElement
	    // should make the assert here instead of in extractActionFrom
	    if (action.spmc === "_" && action.actionName === "") {
	      return;
	    }

	    var actionMode = dElem.getAttribute(DATA_SPIDER_MODE);
	    cur_elem = dElem;
	    switch (actionMode) {
	      case "none":
	        break;
	      case "transferAction":
	        transferAction(action);
	        break;
	      case "transferActionBy":
	        var url = dElem.getAttribute("data-href");
	        if (url) {
	          dElem.setAttribute("data-href", transferActionBy(url, action));
	        }
	        break;
	      case "trackAction":
	        trackAction(action);
	        break;
	      // absent or invalid of DATA_SPIDER_MODE
	      default:
	        // if dElem itself OR it's ancestor element matches <a>[href]
	        // this will change the action mode to transferActionBy
	        // this is worthy noticing, and need to clarify
	        var aElem = _closestElementUntilBody(dElem, function(elem) {
	          return _isNetworkA(elem) || _isPrivateProtocolA(elem);
	        });

	        if (aElem) {
	          var href = transferActionBy(aElem.href, action);
	          if (href === VOID_HREF) {
	            e.preventDefault();
	          } else {
	            aElem.href = href;
	          }
	        } else {
	          trackAction(action);
	        }
	        break;
	    }
	  }

	  /**
	   *
	   * @param {Action|Element}  action
	   * @returns {boolean}   flag indicates whether it is success
	   */
	  function _updateState(action) {
	    if (_isElement(action)) {
	      action = extractActionFrom(action);
	      if (action === null) return false;
	    } else if (!util._isObjectAndNotNull(action)) {
	      console.error("action 必须是一个对象");
	      return false;
	    } else if (action.spmd === undefined) {
	      action.spmd = 1;
	    }

	    var spmc = String(action.spmc || "_");
	    var spmd = String(action.spmd || "_");

	    var actionName = String(action.actionName || "");
	    // deprecated
	    var actionType = String(action.actionType || "");
	    if (actionType) {
	      actionName = actionName || actionType;
	      console.warn("action.actionType 将废弃，请使用 action.actionName 代替");
	    }

	    if (action.actionArgs && typeof action.actionArgs !== "object") {
	      console.error("actionArgs 必须是一个 object");
	      return false;
	    }
	    var actionArgs = action.actionArgs || {};

	    if (!util._isValidSpmValue(spmc)) {
	      console.error(
	        "spm只允许英文、数字、中划线、下划线组成，" + spmc + "不合法"
	      );
	      return false;
	    }

	    if (!util._isValidSpmValue(spmd)) {
	      console.error(
	        "spm只允许英文、数字、中划线、下划线组成，" + spmd + "不合法"
	      );
	      return false;
	    }

	    if (actionName.indexOf("_") === 0 && !_isBuildinActionName(actionName)) {
	      console.error(
	        "下划线起始的 actionName 代表特定功能，禁止自定义，请查看 spider.constants 了解内置的 actionName"
	      );
	      return false;
	    }

	    if (spmc === "_" && actionName === "") {
	      console.error("spmc, actionName 不能同时为空");
	      return false;
	    }

	    if (spmc !== "_" && spmd === "_") {
	      console.error("spmc 有值时 spmd 不能同时为空");
	      return false;
	    }

	    cur_spm_array[2] = spmc;
	    cur_spm_array[3] = spmd;
	    cur_action_name = actionName;
	    cur_action_args = actionArgs;

	    return true;
	  }

	  // todo, info rename to action
	  function _storeCurInfoToCookie() {
	    // 如果a、b值不存在，则返回
	    if (!cur_spm_array[0] || !cur_spm_array[1]) {
	      return;
	    }
	    var token = util._generateToken(cur_spm_array.toString(), 4);
	    var cookieName = COOKIE_NAME_PREFIX + token;
	    var curInfo = _replacePropertyPrefix(
	      _constructActionReportData(),
	      "cur_",
	      "prev_"
	    );

	    curInfo.prev_action_args = curInfo.prev_action_args || {};
	    curInfo.prev_action_args.realVisitId = core.getMeta().visit_id;
	    util._setCookie(cookieName, util._JSONStringifySafty(curInfo), {
	      domain: cookieStoreDomain,
	      path: "/",
	      "max-age": 30
	    });

	    return token;
	  }

	  function _sendPrevActionIfNeeded(prevInfo) {
	    var spmMissingValue = "";
	    var curInfo = _replacePropertyPrefix(prevInfo, "prev_", "cur_");

	    if (curInfo["cur_spm"] === spmMissingValue) {
	      return;
	    } else {
	      _report("click", curInfo);
	    }
	  }

	  function _replacePropertyPrefix(obj, matchPrefix, replacePrefix) {
	    var ret = {};

	    Object.keys(obj).forEach(function(prevName) {
	      var curName = prevName.replace(matchPrefix, replacePrefix);
	      ret[curName] = obj[prevName];
	    });

	    return ret;
	  }

	  // 取出上一页存储的埋点数据
	  function _restorePrevInfo() {
	    var prevInfoDefault = _getDefaultPrevInfo();
	    var prevInfo;
	    // 如果参数中存在storeKey，则从cookie取出，否则从url中取出
	    if (storeKey) {
	      prevInfo = _restorePrevInfoFromCookie(storeKey) || prevInfoDefault;
	    } else {
	      prevInfo = _restorePrevInfoFromURLSearchParams() || prevInfoDefault;
	    }
	    // fix: 调用transferActionBy重复种cookie的问题，原来是在有storeKey的时候清除cookie，现在是任何情况都清除
	    _delPollutedCookies();
	    return prevInfo;
	  }

	  function _getDefaultPrevInfo() {
	    return {
	      prev_spm: "",
	      prev_page_args: {},
	      prev_action_name: "",
	      prev_action_args: {}
	    };
	  }

	  function _isBuildinActionName(str) {
	    return _isBuildinActionName.validList.indexOf(str) >= 0;
	  }
	  _isBuildinActionName.validList = Object.keys(constants).map(function(key) {
	    return constants[key];
	  });

	  function _getCurURLSearchParams() {
	    var search = util._getSearch();
	    return util._queryStringParse(search);
	  }

	  function _restorePrevInfoFromURLSearchParams() {
	    var params = _getCurURLSearchParams();
	    var spm = params[URL_SEARCH_PARAMS_SPM];
	    var actionName = params[URL_SEARCH_PARAMS_ACTION];

	    // 这里也用登录相同的方式来搞

	    if (!spm) {
	      return null;
	    } else {
	      var ret = _getDefaultPrevInfo();
	      ret.prev_spm = spm;
	      ret.prev_action_name = actionName;
	      return ret;
	    }
	  }

	  function _restorePrevInfoFromCookie(key) {
	    var prevInfoStr = _getCookieAndClean(key);
	    if (prevInfoStr === null) return null;

	    return util._JSONParseSafty(prevInfoStr);
	  }

	  function _getCookieAndClean(key) {
	    var cookieName = COOKIE_NAME_PREFIX + key;
	    var val = util._getCookie(cookieName);

	    _delPollutedCookies();

	    return val;
	  }

	  function _delPollutedCookies() {
	    var cookies = util._getCookie();

	    Object.keys(cookies).forEach(function(cookieName) {
	      if (cookieName.indexOf(COOKIE_NAME_PREFIX) === 0) {
	        util._delCookie(cookieName, {
	          domain: cookieStoreDomain,
	          path: "/"
	        });
	      }
	    });
	  }

	  function getParamsString(url) {
	    var matchs;
	    return url && (matchs = url.match(/^[^\?#]*\?([^#]*)/)) && matchs[1];
	  }

	  function _resolveMiniProgramEntry(url) {
	    var itemReg = /weidian.com\/item\.html.*(item)ID=(\d+)/;
	    var shopReg = /weidian\.com\/?\?.*(user)id=(\d+)/;
	    var isItemOrShop = url.match(itemReg) || url.match(shopReg);

	    if (!isItemOrShop) {
	      return false;
	    }

	    var page = isItemOrShop[1];
	    var id = isItemOrShop[2];

	    return {
	      page: page,
	      id: id,
	      // 透传url中的所有参数
	      param: getParamsString(url)
	    };
	  }

	  function _isNetworkA(elem) {
	    var href = elem.getAttribute("href");
	    var jumpA = href && href !== "" && href.indexOf("#") !== 0;
	    if (
	      elem.nodeName === "A" &&
	      elem.protocol &&
	      elem.protocol.indexOf("http") === 0 &&
	      jumpA
	    ) {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  function _isPrivateProtocolA(url) {
	    var anchorElem = util._urlParse(url);
	    return anchorElem.protocol === "weidianbuyer:";
	  }

	  function _isWebviewA(url) {
	    var anchorElem = util._urlParse(url);
	    return (
	      anchorElem.protocol === "weidianbuyer:" &&
	      // anchorElem.hostname === "wdb" &&
	      anchorElem.pathname.indexOf("//wdb/webview") >= 0
	    );
	  }

	  function _isHttpOrHttpsUrl(url) {
	    var anchorElem = util._urlParse(url);
	    return _isNetworkA(anchorElem);
	  }

	  function _report(subtype, data, callback) {
	    core.report("spider", subtype, util._normalizeReportData(data), callback);
	  }

	  (function fixIOSClickBug() {
	    if (!navigator.userAgent.match(/iPhone OS [\d_]+/)) {
	      return;
	    }

	    var style = document.createElement("style");
	    style.type = "text/css";
	    style.innerHTML =
	      '\
	    [data-spider=""], \
	    [data-spider-action-type], \
	    [data-spider-action-name] {\
	        cursor: pointer; \
	    }';
	    document
	      .getElementsByTagName("head")
	      .item(0)
	      .appendChild(style);
	  })();

	  (function autoTrackPageview() {
	    function autoTrack() {
	      cur_spm_array[2] = "0";
	      cur_spm_array[3] = "0";
	      // only modify pageview time and keep other status
	      cur_page_args.ts = +new Date();

	      var curInfo = _getDefaultPrevInfo();
	      curInfo.cur_spm = cur_spm_array.toString();
	      curInfo.cur_page_args = cur_page_args;

	      _report("page_view", curInfo);
	    }

	    window.addEventListener("pageshow", function(event) {
	      if (event.persisted === true) {
	        autoTrack();
	      }
	    });

	    // must figure out when this event get called,
	    // and notice the relationship with load and pageshow
	    // window.addEventListener("visibilitychange", function() {
	    //     if (document.visibilityState === "visible") {
	    //         autoTrack();
	    //     }
	    // });
	  })();

	  spider.trackPageview = trackPageview;
	  spider.trackAction = trackAction;
	  spider.trackImpression = trackImpression;
	  spider.transferAction = transferAction;
	  spider.transferActionBy = transferActionBy;
	  spider.getClickElement = getClickElement;
	  spider.extractActionFrom = extractActionFrom;

	  spider.disableAutoReport = disableAutoReport;
	  spider.constants = constants;

	  spider.getSearchParams = _getCurURLSearchParams;

	  // 空方法，用于兼容旧式写法 spider.impression.observe
	  spider.impression = {
	    observe: function() {}
	  };

	  var plugins = util._listCustomPlugin();
	  if (plugins.indexOf("impression") > -1) {
	    spiderImpression.init(spider);
	  }

	  // 为 可视化埋点 准备
	  /* istanbul ignore next */
	  function loadVisualScript() {
	    function _loadScript(url, callback) {
	      var script = document.createElement("script");
	      script.src = url;

	      document.head && document.head.appendChild(script);
	      script.onload = function() {
	        callback && callback();
	      };
	    }

	    function _rewriteTrackPageview() {
	      // var spider = spider;
	      var trackPageview = spider.trackPageview;

	      spider.trackPageview = function() {
	        trackPageview.apply(this, [].slice.call(arguments));
	        setTimeout(function() {
	          window.spider_visual.init(cur_spm_array.toString(), cur_page_args);
	        });
	      };

	      if (cur_spm_array[0] !== undefined) {
	        window.spider_visual.init(cur_spm_array.toString(), cur_page_args);
	      }
	    }

	    if (window !== window.top && window.name.indexOf("visual-window:") === 0) {
	      var reg = /^visual-window:([\S\s]+)$/;
	      var whiteList = [
	        "assets.geilicdn.com",
	        "assets.pre.geilicdn.com",
	        "assets.daily.geilicdn.com",
	        "h5.dev.weidian.com"
	      ];

	      var urls = window.name.match(reg)[1];
	      var urlArr = urls.split("|");
	      var scriptCounts = urlArr.length;
	      var loadedScript = 0;
	      urlArr.forEach(function(url) {
	        var anchorElem = util._urlParse(url);

	        if (
	          !_isNetworkA(anchorElem) ||
	          whiteList.indexOf(anchorElem.hostname) < 0
	        ) {
	          return;
	        }

	        _loadScript(url, function() {
	          if (++loadedScript === scriptCounts) {
	            _rewriteTrackPageview();
	          }
	        });
	      });
	    }
	  }

	  /**
	   * 因为 trackPageview 使用了 setTimeout
	   * 在可视化埋点脚本存在浏览器缓存的时候, 无法执行到任何逻辑中完成可视化埋点的初始化
	   * 因此延后执行, 如果要删除, 优先解决上方 trackPageview 的延时问题
	   */

	  /* istanbul ignore next */
	  setTimeout(function() {
	    loadVisualScript();
	  });
	};
	module.exports = spider;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var spiderImpression = {};

	spiderImpression.init = function(spider) {
	  var win = window;
	  var doc = document;
	  var ATTR_IMPRESSION = "data-spider-impression";
	  var viewport = {
	    container: win,
	    height: win.innerHeight,
	    scrollHandler: _debounce(_calAndReportImpression, 500),
	    resizeHandler: function() {
	      viewport.height = win.innerHeight;
	      viewport.scrollHandler();
	    }
	  };

	  function observe() {
	    if (spider.impression && !spider.impression.ALREADY_EXEC) {
	      spider.impression.ALREADY_EXEC = true;
	      viewport.scrollHandler();
	      win.addEventListener("resize", viewport.resizeHandler);
	      win.addEventListener("scroll", viewport.scrollHandler);
	    }
	  }

	  function disconnect() {
	    if (spider.impression && spider.impression.ALREADY_EXEC) {
	      spider.impression.ALREADY_EXEC = false;
	      win.removeEventListener("resize", viewport.resizeHandler);
	      win.removeEventListener("scroll", viewport.scrollHandler);
	    }
	  }

	  function _calAndReportImpression() {
	    // in case of dom scripting, we should do the query every time instead of snapshot
	    // unless we use mutationObserver to react to dom change
	    var maybeImpressionElems1 =
	      doc.querySelectorAll("[" + ATTR_IMPRESSION + '=""]') || [];
	    var maybeImpressionElems2 =
	      doc.querySelectorAll("[" + ATTR_IMPRESSION + '="true"]') || [];
	    var maybeImpressionElems = [];
	    for (var i = 0, l1 = maybeImpressionElems1.length; i < l1; i++) {
	      maybeImpressionElems.push(maybeImpressionElems1[i]);
	    }
	    for (var k = 0, l2 = maybeImpressionElems2.length; k < l2; k++) {
	      maybeImpressionElems.push(maybeImpressionElems2[k]);
	    }

	    var containerRect = null;
	    var container = viewport.container;
	    if (
	      container &&
	      container !== win &&
	      typeof container.getBoundingClientRect === "function"
	    ) {
	      containerRect = container.getBoundingClientRect();
	    }

	    [].forEach.call(maybeImpressionElems, function(element) {
	      if (_isInViewport(element, containerRect)) {
	        // element should impress the reader only once
	        _markElementImpressed(element);
	        _reportImpression(element);
	      }
	    });
	  }

	  function _markElementImpressed(element) {
	    element.dataset.spiderImpression = "impressed";
	  }

	  function _reportImpression(element) {
	    var impressiondReport = spider.extractActionFrom(element);
	    if (impressiondReport) {
	      if (!impressiondReport.actionArgs.hasOwnProperty("spoor")) {
	        // console.warn("如果是推荐业务，请在data-spider-action-args中添加曝光埋点所需的spoor值");
	      }
	      spider.trackImpression(impressiondReport);
	    }
	  }

	  // strictly we should use isVisible and isInViewport both
	  function _isInViewport(element, containerRect) {
	    var elemRect = element.getBoundingClientRect();
	    var elemTop = elemRect.top;
	    var elemBottom = elemRect.bottom;
	    var elemHeight = elemBottom - elemTop;
	    var viewportHeight = viewport.height;

	    // todo 这里逻辑应该整合
	    if (containerRect) {
	      return (
	        elemTop - containerRect.top >= -elemHeight / 4 &&
	        elemTop <= containerRect.bottom - (elemHeight * 3) / 4
	      );
	    } else {
	      //元素超过可视区高度情况
	      if (elemHeight > viewportHeight) {
	        return (
	          elemTop >= (-elemHeight * 3) / 4 &&
	          elemTop <= (viewportHeight * 3) / 4
	        );
	      } else {
	        return (
	          elemTop >= -elemHeight / 4 &&
	          elemTop <= viewportHeight - (elemHeight * 3) / 4
	        );
	      }
	    }
	  }

	  function _debounce(cb, delay) {
	    var timer;
	    return function() {
	      if (timer) clearTimeout(timer);
	      timer = setTimeout(function() {
	        cb && cb();
	      }, delay);
	    };
	  }

	  spider.impression = {
	    observe: observe,
	    disconnect: disconnect,
	    traverse: function(container) {
	      viewport.container = container || win;
	      viewport.scrollHandler();
	    }
	  };

	  observe();
	};

	module.exports = spiderImpression;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n,i;r.r(t),function(e){e.Create="create",e.Update="update",e.Delete="delete",e.Immutable="immutable",e.sourceIdChanged="sourceIdChanged"}(n||(n={})),function(e){e.DB="DB",e.DOM="DOM"}(i||(i={}));var o="data-v-spiderid",a="data-spider",s="data-spider-vda",u="data-spider-action-name",c="data-spider-impression",d="data-spider-action-args";function f(){var e=document.head,t=e.querySelector("meta[name='data-spider']")&&e.querySelector("meta[name='data-spider']").getAttribute("content");return{spma:t=e.querySelector("meta[name='data-spider-prior']")&&e.querySelector("meta[name='data-spider-prior']").getAttribute("content")||t,spmb:document.body.getAttribute("data-spider-prior")||document.body.getAttribute("data-spider")}}function l(e,t){return(t=t||document).querySelectorAll("["+o+'="'+e+'"]')}function p(e,t,r){if(void 0===r&&(r=!0),e&&0!==e.length)return e&&e.length?Array.from(e).forEach(function(e){p(e,t,r)}):(r&&e.setAttribute(s,""),e.setAttribute(a,t))}function h(e,t,r){if(void 0===r&&(r=!0),e&&0!==e.length)return e&&e.length?Array.from(e).forEach(function(e){h(e,t,r)}):(r&&e.setAttribute(s,""),e.setAttribute(u,t))}function b(e,t){if(void 0===t&&(t=!0),e&&0!==e.length)return e&&e.length?Array.from(e).forEach(function(e){b(e,t)}):(t&&e.setAttribute(s,""),e.setAttribute(a,""))}function m(e,t){if(void 0===t&&(t=!0),e&&0!==e.length)return e&&e.length?Array.from(e).forEach(function(e){m(e,t)}):(t&&e.setAttribute(s,""),e.setAttribute(c,""))}function v(e,t){if(e&&0!==e.length){if(e&&e.length)return Array.from(e).forEach(function(e){v(e,t)});var r={};return t.forEach(function(t){var n=t.sourceId,i=e.getAttribute(o)===n?e:e.querySelector("["+o+'="'+n+'"]')?e.querySelector("["+o+'="'+n+'"]'):e.parentNode.getAttribute(o)===n?e.parentNode:null;i&&("innerText"===t.args?r[t.name]=i.innerText:r[t.name]=i.getAttribute(t.args))}),e.setAttribute(d,JSON.stringify(r))}}var y=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}u((n=n.apply(e,t||[])).next())})},g=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},S="";S=location.host.indexOf("dev")>-1||location.href.indexOf("localhost")>-1?"https://thor.daily.weidian.com/vda/spider.getSpiderInfo/1.0":location.host.indexOf("daily")>-1?"https://thor.daily.weidian.com/vda/spider.getSpiderInfo/1.0":location.host.indexOf("pre")>-1?"https://thor.pre.weidian.com/vda/spider.getSpiderInfo/1.0":"https://thor.weidian.com/vda/spider.getSpiderInfo/1.0";var A=A||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};var w=function(e){return y(this,void 0,void 0,function(){var t,r,n,i,o,a,s;return g(this,function(u){switch(u.label){case 0:t=0,r=e,u.label=1;case 1:if(!(t<r.length))return[3,11];switch(n=r[t],i=n.type,i){case"childList":return[3,2];case"subtree":return[3,8]}return[3,9];case 2:return u.trys.push([2,7,,8]),n.addedNodes.length>0?Array.from(n.addedNodes).some(function(e){return 1===e.nodeType&&!e.classList.contains("vda-shade")})?(o=f(),this.cachedMeta.spma===o.spma&&this.cachedMeta.spmb===o.spmb?[3,4]:(this.cachedMeta=o,a=this,[4,this.getSpiderInfo(o.spma,o.spmb)])):[3,5]:[3,6];case 3:a.cachedSpmList=u.sent(),u.label=4;case 4:this.setSpiders(this.cachedSpmList),u.label=5;case 5:return[3,10];case 6:return[3,8];case 7:return s=u.sent(),console.error("observer error",s),[3,8];case 8:case 9:return[3,10];case 10:return t++,[3,1];case 11:return[2]}})})},x={observerConfig:{attributes:!1,childList:!0,subtree:!0},init:function(){return y(this,void 0,void 0,function(){var e,t,r,n;return g(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),e=this.cachedMeta=f(),t=this,[4,this.getSpiderInfo(e.spma,e.spmb)];case 1:return t.cachedSpmList=i.sent(),this.setSpiders(this.cachedSpmList),o=w,a=100,s=this,u=null,r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];u&&clearTimeout(u),u=setTimeout(function(){o.apply(s,e)},a)},this.observer=new MutationObserver(r),this.observer.observe(document.body,this.observerConfig),[3,3];case 2:return n=i.sent(),console.error("init error",n),[3,3];case 3:return[2]}var o,a,s,u})})},setSpiders:function(e){if(e&&Array.isArray(e)){var t=0,r=e.slice();A(function e(n){for(;t<r.length;t++){var i=r[t];if(!(n.timeRemaining()>0)){A(e);break}var o=l(i.sourceId);i.spmc&&p(o,i.spmc),i.spmd&&b(o),i.actionName&&h(o,i.actionName),1===i.actionType&&m(o),i.actionArgInfo&&v(o,JSON.parse(i.actionArgInfo))}})}},getSpiderInfo:function(e,t){return y(this,void 0,void 0,function(){var r,n;return g(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(o=S,a={spma:e,spmb:t},s=new XMLHttpRequest,new Promise(function(e,t){if(s.onreadystatechange=function(){4==s.readyState&&(s.status>=200&&s.status<300||304==s.status?e(JSON.parse(s.responseText)):t(s.status))},"object"==typeof a){o+="?";var r=[];Object.keys(a).forEach(function(e){r.push(e+"="+a[e])}),o+=r.join("&")}s.open("get",o,!0),s.send(null)}))];case 1:return[2,(r=i.sent())&&r.result];case 2:return n=i.sent(),console.error(n),[3,3];case 3:return[2]}var o,a,s})})}};t.default=x}])});
	//# sourceMappingURL=index.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var constant_1 = __webpack_require__(24);
	var querystring_1 = __webpack_require__(25);
	var util_1 = __webpack_require__(26);
	var url_1 = __webpack_require__(28);
	exports.Url = url_1.default;
	/**
	 * 设置url地址的querystring。
	 * @param url 链接地址，如果url为null/undefined，则以当前页面url作为默认值。
	 * @param params 参数对象。
	 * @param options 设置参数合并规则，具体见参数合并规则。
	 * @returns 设置后的url地址。
	 */
	function setQuerystring(url, params, options) {
	    // get window href
	    var href = constant_1.GLOBAL.location.href;
	    // normalize arguments
	    if (util_1.default.isObject(url)) {
	        options = params;
	        params = url;
	        url = href;
	    }
	    // set href if url is undefined/null
	    if (util_1.default.isUndef(url)) {
	        url = href;
	    }
	    // merge options
	    options = Object.assign({
	        replace: true
	    }, options);
	    var instance = new url_1.default(url);
	    if (options.replace) {
	        // merge params if is replace
	        instance.query = Object.assign(instance.query || {}, params);
	    }
	    else {
	        var search = querystring_1.stringify(params);
	        if (search) {
	            var delimit = instance.search.indexOf(constant_1.SEARCH_DELIMIT) === -1
	                ? constant_1.SEARCH_DELIMIT
	                : constant_1.PARAM_DELIMIT;
	            instance.search += delimit + search;
	        }
	    }
	    return instance.toString();
	}
	exports.setQuerystring = setQuerystring;
	/**
	 * 获取传入url地址的参数对象。
	 * @param url 链接地址 如果url为null/undefined，则以当前页面url作为默认值，如果url为相对地址，不进行url规整化处理。
	 * @returns 序列化后的参数对象。
	 */
	function getQuerystring(url) {
	    if (util_1.default.isUndef(url)) {
	        url = constant_1.GLOBAL.location.href;
	    }
	    return querystring_1.parse(url);
	}
	exports.getQuerystring = getQuerystring;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SEARCH_DELIMIT = '?';
	exports.PARAM_DELIMIT = '&';
	exports.PARAM_VALUE_DELIMIT = '=';
	exports.HASH_DELIMIT = '#';
	exports.GLOBAL = window;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var util_1 = __webpack_require__(26);
	var constant_1 = __webpack_require__(24);
	var SEARCH_REGXP = /^[^\?#]*\?([^#]*)/;
	function getSearch(url) {
	    var matchs;
	    return (url && (matchs = url.match(SEARCH_REGXP)) && matchs[1]) || '';
	}
	function encode(value) {
	    return encodeURIComponent(value).replace(/%20/g, '+');
	}
	function decode(value) {
	    return decodeURIComponent(value).replace(/\+/g, ' ');
	}
	function parse(url) {
	    // get search string
	    url = getSearch(url);
	    // split params
	    var parts = url.split(constant_1.PARAM_DELIMIT);
	    var params = {};
	    parts.forEach(function (param) {
	        // if param is empty
	        if (!param) {
	            return;
	        }
	        // split param value
	        var splits = param.split(constant_1.PARAM_VALUE_DELIMIT);
	        var name = splits[0];
	        // set param = '' if querystring is '?param'
	        var value = splits[1] || '';
	        if (name) {
	            name = decode(name);
	            value = decode(value);
	            if (util_1.default.hasOwn(params, name)) {
	                if (!util_1.default.isArray(params[name])) {
	                    params[name] = [params[name]];
	                }
	                // tslint:disable-next-line
	                ;
	                params[name].push(value);
	            }
	            else {
	                params[name] = value;
	            }
	        }
	    });
	    return params;
	}
	exports.parse = parse;
	function stringify(params) {
	    if (!util_1.default.isObject(params)) {
	        return '';
	    }
	    var search = [];
	    util_1.default.forEach(params, function (value, name) {
	        if (!util_1.default.isUndef(value)) {
	            if (!util_1.default.isArray(value)) {
	                value = [value];
	            }
	            name = encode(name);
	            // normalize {name:array} param to name=array[0]&name=array[1]
	            value.forEach(function (val) {
	                search.push("" + name + constant_1.PARAM_VALUE_DELIMIT + encode(val));
	            });
	        }
	    });
	    return search.join(constant_1.PARAM_DELIMIT);
	}
	exports.stringify = stringify;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var util = __webpack_require__(27);
	exports.default = util;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 空函数
	 */
	// tslint:disable-next-line
	function noop() { }
	exports.noop = noop;
	/**
	 * 判断是否是未定义
	 * @param value 入参
	 * @returns true/false，undefined、null返回true
	 */
	function isUndef(value) {
	    return value === undefined || value === null;
	}
	exports.isUndef = isUndef;
	/**
	 * 判断是否为空
	 * @param value 入参
	 * @returns true/false，undefined、null、空字符串返回true
	 */
	function isEmpty(value) {
	    return value === undefined || value === null || value === '';
	}
	exports.isEmpty = isEmpty;
	function isType(type) {
	    return function (value) { return Object.prototype.toString.call(value) === "[object " + type + "]"; };
	}
	/**
	 * 判断是否为Number类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isNumber(value) {
	    return isType('Number')(value);
	}
	exports.isNumber = isNumber;
	/**
	 * 判断是否为String类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isString(value) {
	    return isType('String')(value);
	}
	exports.isString = isString;
	/**
	 * 判断是否为Error类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isError(value) {
	    return isType('Error')(value);
	}
	exports.isError = isError;
	/**
	 * 判断是否为Array类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isArray(value) {
	    return isType('Array')(value);
	}
	exports.isArray = isArray;
	/**
	 * 判断是否为Function类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isFunction(value) {
	    return isType('Function')(value);
	}
	exports.isFunction = isFunction;
	/**
	 * 判断是否为Date类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isDate(value) {
	    return isType('Date')(value);
	}
	exports.isDate = isDate;
	/**
	 * 判断是否为Boolean 类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isBoolean(value) {
	    return isType('Boolean')(value);
	}
	exports.isBoolean = isBoolean;
	/**
	 * 判断是否为严格Object类型
	 * @param value 入参
	 * @returns true/false
	 */
	function isObject(value) {
	    return isType('Object')(value);
	}
	exports.isObject = isObject;
	/**
	 * 判断是否为泛object，不包括null
	 * @param value 入参
	 * @returns true/false
	 */
	function isWideObject(value) {
	    return value !== null && typeof value === 'object';
	}
	exports.isWideObject = isWideObject;
	/**
	 * 是否为FormData实例
	 * @param value - 入参
	 * @returns true/false，不支持FormData时返回false
	 */
	function isFormData(value) {
	    return typeof FormData !== 'undefined' && value instanceof FormData;
	}
	exports.isFormData = isFormData;
	/**
	 * 是否为URLSearchParams实例
	 * @param value - 入参
	 * @returns true/false，不支持URLSearchParams时返回false
	 */
	function isURLSearchParams(value) {
	    return (typeof URLSearchParams !== 'undefined' &&
	        value instanceof URLSearchParams);
	}
	exports.isURLSearchParams = isURLSearchParams;
	/**
	 * 对象是否有某个实例属性hasOwnProperty方法封装
	 * @param obj 对象
	 * @param key 对象的属性
	 * @returns true/false
	 */
	function hasOwn(obj, key) {
	    return Object.prototype.hasOwnProperty.call(obj, key);
	}
	exports.hasOwn = hasOwn;
	/**
	 * 循环对象和数组
	 * @param obj 对象或者数组
	 * @param fn 回调函数
	 * @returns undefined
	 */
	function forEach(obj, fn) {
	    if (isArray(obj)) {
	        // Iterate over array values
	        for (var i = 0, l = obj.length; i < l; i++) {
	            fn.call(null, obj[i], i, obj);
	        }
	    }
	    else if (isObject(obj)) {
	        // Iterate over object keys
	        for (var key in obj) {
	            if (hasOwn(obj, key)) {
	                fn.call(null, obj[key], key, obj);
	            }
	        }
	    }
	}
	exports.forEach = forEach;
	/**
	 * 合并多个对象
	 * @param targetOrDeep 目标对象或者是否深度合并
	 * @param sources 多个源对象
	 * @returns target 目标对象
	 */
	function merge(targetOrDeep) {
	    var sources = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        sources[_i - 1] = arguments[_i];
	    }
	    var deep;
	    var target;
	    if (isBoolean(targetOrDeep)) {
	        deep = targetOrDeep;
	        target = sources.shift();
	    }
	    else {
	        target = targetOrDeep;
	    }
	    forEach(sources, function (source) {
	        forEach(source, function (value, key) {
	            if (deep && (isArray(value) || isObject(value))) {
	                if (isArray(value)) {
	                    if (!isArray(target[key])) {
	                        target[key] = [];
	                    }
	                }
	                else {
	                    if (!isObject(target[key])) {
	                        target[key] = {};
	                    }
	                }
	                merge(deep, target[key], value);
	            }
	            else {
	                target[key] = value;
	            }
	        });
	    });
	    return target;
	}
	exports.merge = merge;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var util_1 = __webpack_require__(26);
	var querystring_1 = __webpack_require__(25);
	var constant_1 = __webpack_require__(24);
	var QUERY_PROPERTY = 'query';
	var NORMAL_PROPERTIES = [
	    'hash',
	    'host',
	    'hostname',
	    'pathname',
	    'port',
	    'protocol'
	];
	var QUERY_RELATED_PROPERTIES = ['href', 'search'];
	var READONLY_PROPERTIES = ['origin'];
	var defineProperty = Object.defineProperty;
	// validate url property
	function validate(name, value) {
	    if (name === QUERY_PROPERTY) {
	        return util_1.default.isObject(value);
	    }
	    return util_1.default.isString(value) || util_1.default.isNumber(value);
	}
	function getSearch(query) {
	    // stringify query to search string
	    var search = querystring_1.stringify(query);
	    // always use query as search string
	    return (search ? constant_1.SEARCH_DELIMIT : '') + search;
	}
	function defineNormalProperties(instance, element) {
	    function handler(name) {
	        defineProperty(instance, name, {
	            get: function () {
	                return element[name];
	            },
	            set: function (value) {
	                if (!validate(name, value)) {
	                    return;
	                }
	                element[name] = value;
	            },
	            enumerable: true
	        });
	    }
	    NORMAL_PROPERTIES.forEach(handler);
	}
	function defineQueryProperty(instance, element) {
	    function handler(name) {
	        defineProperty(instance, name, {
	            get: function () {
	                // set search property then normalize query
	                instance.search = getSearch(element[name]);
	                return element[name];
	            },
	            set: function (value) {
	                if (!validate(name, value)) {
	                    return;
	                }
	                element[name] = value;
	            },
	            enumerable: true
	        });
	    }
	    handler(QUERY_PROPERTY);
	}
	function defineQueryRelatedProperties(instance, element) {
	    function handler(name) {
	        defineProperty(instance, name, {
	            get: function () {
	                element.search = getSearch(element[QUERY_PROPERTY]);
	                return element[name];
	            },
	            set: function (value) {
	                if (!validate(name, value)) {
	                    return;
	                }
	                element[name] = value;
	                // sync query from search
	                element[QUERY_PROPERTY] = querystring_1.parse(element.search);
	            },
	            enumerable: true
	        });
	    }
	    QUERY_RELATED_PROPERTIES.forEach(handler);
	}
	function defineReadonlyProperties(instance, element) {
	    function handler(name) {
	        defineProperty(instance, name, {
	            get: function () {
	                return element[name];
	            },
	            enumerable: true
	        });
	    }
	    READONLY_PROPERTIES.forEach(handler);
	}
	/**
	 * Url类
	 * ```
	 * const url = new Url('https://www.weidian.com/')
	 * // get url href
	 * let href = url.href
	 * // set url href
	 * url.href = 'https://www.koudai.com/a.html'
	 * console.log(url.host) // www.koudai.com
	 * ```
	 */
	var Url = /** @class */ (function () {
	    /**
	     * Url
	     * @param url 链接地址，未传递使用当前页面链接，如果为相对地址，则会以当前页面url作为base url。
	     */
	    function Url(url) {
	        // if url is empty then set default href
	        if (util_1.default.isEmpty(url)) {
	            url = constant_1.GLOBAL.location.href;
	        }
	        // create element
	        var element = (this._element = constant_1.GLOBAL.document.createElement('A'));
	        // refresh href
	        element.href = url;
	        // define normal properties
	        defineNormalProperties(this, this._element);
	        // define query related properties
	        defineQueryRelatedProperties(this, this._element);
	        // define query property
	        defineQueryProperty(this, this._element);
	        // define readonly properties
	        defineReadonlyProperties(this, this._element);
	        // refresh query
	        this.href = element.href;
	    }
	    /**
	     * toString方法，在String(instance)调用。
	     * @returns href属性。
	     */
	    Url.prototype.toString = function () {
	        return this.href;
	    };
	    return Url;
	}());
	exports.default = Url;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var util = __webpack_require__(2);
	var sha1 = util._sha1;
	var canvasFp = __webpack_require__(7);
	var Share = __webpack_require__(30);
	var console = util._console;
	var urlTool = __webpack_require__(23);
	var uaTool = __webpack_require__(8);

	var tracker = {};
	var VERSION = "1.0.9";

	/*关系透传参数key & value：
	* key: share_relation
	* value:${分享唯一ID}_${分享来源WD_b_id}_${分享level}
	* */
	var TRAKC_QUERY_NAME = "share_relation";
	var TRACK_TYPE = "pathtracker";
	var TRACK_SUB_TYPE = {
	  click: "share_click",
	  first: "share_first",
	  reshare: "share_reshare"
	};
	tracker.version = VERSION;
	tracker.share = util._noop;
	tracker.getShareUrl = util._noop;
	tracker.successTrack = util._noop;

	tracker.init = function(core) {
	  var isDebug = location.search.indexOf("share_debug") != -1;

	  function _report(subtype, data, callback) {
	    core.report(TRACK_TYPE, subtype, util._normalizeReportData(data), callback);
	  }

	  function _getSearchParams(key) {
	    var search = (window.location.search || "?").replace("?", "");
	    return key
	      ? util._queryStringParse(search)[key] || null
	      : util._queryStringParse(search);
	  }

	  function _getPathInfo(path) {
	    var arr = path.split("_");
	    return {
	      share_id: arr[0] || "",
	      share_buyer_id: arr[1] || "",
	      share_level: arr[2] || ""
	    };
	  }

	  //生成分享唯一id
	  function _getShareId() {
	    try {
	      var salt = canvasFp();
	      var now = new Date();
	      var shareId = sha1(
	        (navigator.userAgent || "") + now.getTime() + Math.random() + salt
	      ).slice(0, 16);

	      return shareId;
	    } catch (e) {
	      return "";
	    }
	  }

	  //获取分享渠道
	  function _getChannel() {
	    var wfr = _getSearchParams("wfr");
	    if (!wfr) {
	      return "unknown";
	    }
	    var result = wfr;
	    return result;
	  }

	  //生成当前用户分享的链接
	  var share_id_first = "";
	  function _getShareUrl(url) {
	    try {
	      if (!url) {
	        return "";
	      }

	      var pathQuery = _getSearchParams(TRAKC_QUERY_NAME);
	      var value = "";
	      var share_buyer_id =
	        util._getCookie("uid") || util._getCookie("WD_b_id") || "";
	      var share_id = "";
	      var share_level = "";
	      if (pathQuery) {
	        //再次分享
	        var pathInfo = _getPathInfo(pathQuery);
	        share_id = pathInfo.share_id;
	        share_level = parseInt(pathInfo.share_level || 0) + 1;
	      } else {
	        //首次分享
	        share_id = _getShareId();
	        share_id_first = share_id;
	        share_level = 1;
	      }
	      value = [share_id, share_buyer_id, share_level].join("_");

	      var urlParam = {};
	      urlParam[TRAKC_QUERY_NAME] = value;
	      return urlTool.setQuerystring(url, urlParam);
	    } catch (e) {
	      return url;
	    }
	  }

	  //基于不同的类型获取上报的数据信息
	  function _getTrackOption(type) {
	    try {
	      var pathQuery = _getSearchParams(TRAKC_QUERY_NAME);
	      var metaInfo = util._getMetaFromDom();
	      var pathInfo = pathQuery ? _getPathInfo(pathQuery) : null;
	      var page_id = "";
	      if (metaInfo.spma && metaInfo.spmb) {
	        page_id = metaInfo.spma + "." + metaInfo.spmb;
	      }

	      if (type == TRACK_SUB_TYPE.click) {
	        //click数据类型
	        if (!pathQuery) {
	          return {};
	        } else {
	          return {
	            share_id: pathInfo.share_id,
	            page_id: page_id,
	            share_buyer_id: pathInfo.share_buyer_id,
	            share_channel: _getChannel(),
	            click_buyer_id:
	              util._getCookie("uid") || util._getCookie("WD_b_id") || "",
	            click_seller_id:
	              util._getCookie("sid") || util._getCookie("WD_s_id") || "",
	            share_level: parseInt(pathInfo.share_level),
	            gmt_action: Date.now().toString(),
	            business_type: null,
	            business_id: null
	          };
	        }
	      } else if (type == TRACK_SUB_TYPE.first) {
	        //首次分享数据类型
	        return {
	          share_id: share_id_first || _getShareId(),
	          page_id: page_id,
	          share_buyer_id:
	            util._getCookie("uid") || util._getCookie("WD_b_id") || "",
	          share_seller_id:
	            util._getCookie("sid") || util._getCookie("WD_s_id") || "",
	          share_level: 1,
	          gmt_action: Date.now().toString(),
	          business_type: null,
	          business_id: null
	        };
	      } else if (type == TRACK_SUB_TYPE.reshare) {
	        //再次分享数据类型
	        return {
	          share_id: pathInfo.share_id,
	          page_id: page_id,
	          share_buyer_id: pathInfo.share_buyer_id,
	          reshare_buyer_id:
	            util._getCookie("uid") || util._getCookie("WD_b_id") || "",
	          reshare_seller_id:
	            util._getCookie("sid") || util._getCookie("WD_s_id") || "",
	          share_level: parseInt(pathInfo.share_level || 0) + 1,
	          gmt_action: Date.now().toString(),
	          business_type: null,
	          business_id: null
	        };
	      } else {
	        return {};
	      }
	    } catch (e) {
	      console.log(e);
	      return {};
	    }
	  }

	  //自动上报通过分享点击的数据内容
	  function _trackByPageView() {
	    try {
	      // core.init("unknown", "unknown", "0.0.0");
	      var option = _getTrackOption(TRACK_SUB_TYPE.click);
	      isDebug && console.log("share_click:", option);
	      if (Object.keys(option).length != 0) {
	        _report(TRACK_SUB_TYPE.click, option);
	      }
	    } catch (e) {
	      console.log(e);
	    }
	  }

	  //上报当前用户主动分享成功的数据内容
	  function _trackByShare(channel) {
	    try {
	      var pathQuery = _getSearchParams(TRAKC_QUERY_NAME);
	      channel = channel || "unknown";
	      if (pathQuery) {
	        //再次分享上报
	        var option = _getTrackOption(TRACK_SUB_TYPE.reshare);
	        option["reshare_channel"] = channel;
	        isDebug && console.log("share_reshare:", option);
	        _report(TRACK_SUB_TYPE.reshare, option);
	      } else {
	        //首次分享上报
	        var option = _getTrackOption(TRACK_SUB_TYPE.first);
	        option["share_channel"] = channel;
	        isDebug && console.log("share_first:", option);
	        _report(TRACK_SUB_TYPE.first, option);
	      }
	    } catch (e) {}
	  }

	  (function() {
	    //微信环境，如果未登录进行静默登录
	    try {
	      if (uaTool.isMiniProgram()) {
	        return;
	      }
	      if (
	        util._getCookie("is_login") != "true" &&
	        uaTool.isWeiXin() &&
	        util._listDisabledAuto().indexOf("silentlogin") < 0
	      ) {
	        var redirectUrl = location.href;
	        var hash = location.hash;
	        var ua = navigator.userAgent;
	        var isAndorid = /Android/.test(ua);
	        var query = util._queryStringParse(location.search);
	        var SLIENT_LOGIN_KEY = "slr";
	        if (hash !== "" && isAndorid) {
	          var salt = query[SLIENT_LOGIN_KEY] || "";
	          query[SLIENT_LOGIN_KEY] = util._generateToken(salt, 4);
	        } else if (query[SLIENT_LOGIN_KEY]) {
	          delete query[SLIENT_LOGIN_KEY];
	        }

	        var querystring = util._queryStringStringify(query);
	        redirectUrl =
	          location.href.replace(/(\?|#)[\S]*$/, "") + "?" + querystring + hash;

	        var domain = util._get2ndLevelDomain(location.hostname);
	        // 这里是对特殊域名做特殊判断

	        if (util._isWDHost()) {
	          var redirectApi = "https://sso.weidian.com/user/synclogin";
	          if (location.host.match(/\.daily\./) !== null) {
	            redirectApi = "https://sso-daily.test.weidian.com/user/synclogin";
	          }
	          if (location.host.match(/\.pre\./) !== null) {
	            redirectApi = "https://sso-pre.test.weidian.com/user/synclogin";
	          }
	          redirectUrl =
	            redirectApi +
	            "?type=" +
	            domain +
	            "&redirect=" +
	            encodeURIComponent(redirectUrl);
	        }

	        var slientLoginUrl =
	          "https://sso.weidian.com/user/oauth/wechat/silentlogin?redirect=";
	        if (location.host.match(/\.daily\./) !== null) {
	          slientLoginUrl =
	            "https://sso-daily.test.weidian.com/user/oauth/wechat/silentlogin?redirect=";
	        }
	        if (location.host.match(/\.pre\./) !== null) {
	          slientLoginUrl =
	            "https://sso-pre.test.weidian.com/user/oauth/wechat/silentlogin?redirect=";
	        }

	        location.href = slientLoginUrl + encodeURIComponent(redirectUrl);
	      } else {
	        window.addEventListener("DOMContentLoaded", function(event) {
	          _trackByPageView();
	        });
	      }
	    } catch (e) {
	      console.log(e);
	    }
	  })();

	  tracker.version = VERSION;

	  var old = Share.prototype.resetUserConfig;
	  Share.prototype.resetUserConfig = function(config, notSyncTopRight) {
	    if (config.url) {
	      var url = config.url;
	      config.url = _getShareUrl(url);
	    }

	    old.call(this, config, notSyncTopRight);
	  };

	  tracker.share = function(option) {
	    try {
	      option = option || {};
	      var url = option.config.url;
	      //修改分享url share_realtion的值
	      if (url) {
	        option.config.url = _getShareUrl(url);
	      }

	      if (typeof option.option === "object") {
	        var _wxCallback = option.option.wxSuccessCb;
	        //修改微信分享成功的回到函数
	        option.option.wxSuccessCb = function(wfr, res) {
	          _trackByShare(wfr);
	          if (_wxCallback && typeof _wxCallback == "function") {
	            _wxCallback(wfr, res);
	          }
	        };
	      } else {
	        option.option = {
	          wxSuccessCb: function(wfr) {
	            _trackByShare(wfr);
	          }
	        };
	      }
	      return new Share(option);
	    } catch (e) {
	      console.log(e);
	    }
	  };

	  tracker.share.CONSTANT = {
	    CHATS: "1",
	    MOMENT: "2",
	    QQ: "3",
	    QZONE: "4",
	    WEIBO: "5"
	  };
	  /*
	    * 生成当前分享的url，
	    * @param url {string} 指定的url
	    * return {string} 带有share_relation关系的url
	    * */
	  tracker.getShareUrl = _getShareUrl;

	  /*
	    * 分享成功,上报数据
	    * @param channel {string} 分享渠道，默认unkonwn
	    * */
	  tracker.successTrack = _trackByShare;
	};
	module.exports = tracker;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	!(function(factory) {
	  if (typeof module !== "undefined" && module.exports) {
	    module.exports = factory();
	  } else {
	    window.ShareV2 = factory();
	  }
	})(function() {
	  var SdkLoader = __webpack_require__(3);
	  var ua = __webpack_require__(5);
	  var util = __webpack_require__(2);
	  var cssFactory = __webpack_require__(31);
	  cssFactory();

	  var WFR_MAP = {
	    qq: "qfriendh5",
	    qzone: "qzoneh5",
	    chats: "wxh5",
	    moments: "wxph5"
	  };

	  function Share(setting) {
	    var _this = this;
	    this.errorFn = null;
	    SdkLoader().ready(function(env, error) {
	      if (error) {
	        _this.errorFn && _this.errorFn();
	        return;
	      }

	      _this._setShareOption(setting.option);
	      _this._setUserConfig(setting.config, _this._initShareDOM);
	    });
	  }

	  /**
	     * 默认分享渠道配置参数
	     * @type {{isInApp: boolean, appName: string}}
	     * @scene 卖家版 native 面板渠道
	      {1:微信好友,2:朋友圈,3:qq好友,4:qq空间,5:微博,6复制链接}
	     * @momentMode 卖家版 native 面板朋友圈分享方式
	      {0:普通分享,1:多图分享,2:大图分享,3:小程序分享}
	     */
	  var defaultOption = {
	    vbuyerShare: true,
	    wdShare: true,
	    scene: [1, 2, 3, 4, 5],
	    prependHtml: "",
	    wxShareTipImge: "",
	    wxSuccessCb: null,
	    appSuccessCb: null,
	    hideMenuItems: [],
	    showMenuItems: [],
	    momentMode: 0,
	    panel: [1]
	  };

	  Share.prototype.direct = function(channel) {
	    /* istanbul ignore next */
	    if (ua.isQQBrowser) {
	      this._shareInQQBrowser(channel);
	      return;
	    }

	    if (ua.isApp) {
	      this._showNativeShare(channel);
	      return;
	    }

	    this.showPanel();
	  };

	  Share.prototype.sharePyq = function() {
	    this.share("moments");
	  };

	  Share.prototype.shareChats = function() {
	    this.share("chats");
	  };

	  Share.prototype.shareQZone = function() {
	    this.share("qzone");
	  };

	  Share.prototype.shareQQ = function() {
	    this.share("qq");
	  };

	  /**
	   * 对外接口，用来重设分享配置
	   */
	  Share.prototype.resetShareOption = function(option) {
	    if (!option.showMenuItems) {
	      option.showMenuItems = defaultOption.showMenuItems;
	    }
	    if (!option.hideMenuItems) {
	      option.hideMenuItems = defaultOption.hideMenuItems;
	    }
	    var _this = this;
	    SdkLoader().ready(function() {
	      var newOption = assgin(option, _this.option);
	      _this._setShareOption(newOption);
	      _this._initShareDOM(true);
	      if (ua.isWx) {
	        _this._setWXMenuEvent();
	      }
	    });
	  };

	  /**
	   * 对外接口，用来重设用户分享信息
	   */
	  Share.prototype.resetUserConfig = function(
	    config,
	    notSyncTopRight,
	    callback
	  ) {
	    var _this = this;
	    if (typeof notSyncTopRight === "function") {
	      callback = notSyncTopRight;

	      notSyncTopRight = false;
	    }

	    //merge参数
	    SdkLoader().ready(function(env) {
	      var newConfig = assgin(config, _this.config);

	      _this._setUserConfig(newConfig, function() {
	        // todo
	        if (ua.isWx) {
	          _this._setWXMenuEvent();
	        }

	        // 需要jsbridge 加载完毕
	        if (
	          ua.isVbuyer &&
	          window.KDJSBridge2 !== undefined &&
	          _this.option.vbuyerShare &&
	          !notSyncTopRight
	        ) {
	          _this._showVbuyerShare();
	        }

	        if (
	          ua.isWD &&
	          window.KDJSBridge2 !== undefined &&
	          _this.option.wdShare &&
	          !notSyncTopRight
	        ) {
	          _this._showWDShare();
	        }

	        typeof callback === "function" && callback();
	      });
	    });
	  };

	  /**
	   * 对外接口,直接显示分享面板
	   */
	  Share.prototype.showPanel = function() {
	    var self = this;
	    var config = self.config;
	    var errorCallback = null;

	    SdkLoader().ready(function(env, error) {
	      if (error) {
	        errorCallback && errorCallback();
	        return;
	      }

	      if (self.option.isInApp !== false) {
	        self._showNativeShare();
	      } else {
	        if (self.option.$dom) {
	          self.option.$dom.style.display = "block";
	          document.body.classList.add("ui-share__hidden");
	          document.querySelector(".copy-href") &&
	            (document.querySelector(".copy-href").value = config.url);
	        } else {
	          setTimeout(function() {
	            self.option.$dom.style.display = "block";
	            document.body.classList.add("ui-share__hidden");
	            document.querySelector(".copy-href") &&
	              (document.querySelector(".copy-href").value = config.url);
	          }, 300);
	        }
	      }
	    });

	    return {
	      catch: function(callback) {
	        if (typeof callback === "function") {
	          errorCallback = callback;
	        }
	      }
	    };
	  };

	  /**
	   * 对外接口,捕获分享初始化错误
	   */
	  Share.prototype.catch = function(callback) {
	    if (typeof callback === "function") {
	      this.errorFn = callback;
	    } else {
	      console.log("错误处理必须为函数");
	    }
	    return this;
	  };

	  /**
	   * 根据当前环境，配置参数
	   * @private
	   */
	  Share.prototype._setShareOption = function(option) {
	    var self = this,
	      newOption = {};

	    newOption.isInApp = ua.isApp;

	    if (option && option.vbuyerShare !== undefined) {
	      newOption.vbuyerShare = option.vbuyerShare;
	    } else {
	      newOption.vbuyerShare = defaultOption.vbuyerShare;
	    }

	    if (option && option.wdShare !== undefined) {
	      newOption.wdShare = option.wdShare;
	    } else {
	      newOption.wdShare = defaultOption.wdShare;
	    }

	    if (option && option.scene !== undefined && option.scene.length > 0) {
	      newOption.scene = option.scene;
	    } else {
	      newOption.scene = defaultOption.scene;
	    }

	    if (option && option.panel !== undefined && option.panel.length > 0) {
	      newOption.panel = option.panel;
	    } else {
	      newOption.panel = defaultOption.panel;
	    }

	    newOption.wxShareTipImge =
	      (option && option.wxShareTipImge) || defaultOption.wxShareTipImge;
	    newOption.wxSuccessCb =
	      (option && option.wxSuccessCb) || defaultOption.wxSuccessCb;
	    newOption.appSuccessCb =
	      (option && option.appSuccessCb) || defaultOption.appSuccessCb;
	    newOption.hideMenuItems =
	      (option && option.hideMenuItems) || defaultOption.hideMenuItems;
	    newOption.showMenuItems =
	      (option && option.showMenuItems) || defaultOption.showMenuItems;
	    newOption.momentMode =
	      (option && option.momentMode) || defaultOption.momentMode;

	    newOption.$dom = self.option && self.option.$dom;

	    newOption.prependHtml =
	      option && option.prependHtml !== undefined
	        ? option.prependHtml
	        : defaultOption.prependHtml;

	    self.option = newOption;
	  };

	  /**
	   * 配置用户分享信息
	   * @private
	   */
	  var fixDomainQueue = []; //缓存多域名切换的回调记录
	  Share.prototype._setUserConfig = function(config, callback) {
	    var urlChanged = false;
	    var multiDomain =
	      document.body.getAttribute("data-vcollect-multidomain") !== null;

	    var prevShareUrl = (this.config && this.config.url) || "";
	    var curShareUrl = config.url || "";

	    if (prevShareUrl !== curShareUrl && multiDomain) {
	      urlChanged = true;
	    }

	    var _this = this;
	    this.config = {};
	    var shareConfig = config;
	    shareConfig.pyq = shareConfig.pyq || shareConfig.title;

	    if (Object.getOwnPropertyNames(shareConfig).length > 0) {
	      for (var key in shareConfig) {
	        this["config"][key] = shareConfig[key];
	      }
	    }

	    if (urlChanged) {
	      // 每次请求生成唯一的时间戳
	      var _callbackId = +new Date();

	      fixDomainQueue.push(_callbackId);

	      SdkLoader().block();
	      this._getDomianFixedUrl(function(res) {
	        // 保证最后一次一定执行，且立即清空当前请求消息队列
	        if (
	          fixDomainQueue.length === 0 ||
	          fixDomainQueue.indexOf(_callbackId) < 0
	        ) {
	          return;
	        } else if (_callbackId === fixDomainQueue[fixDomainQueue.length - 1]) {
	          fixDomainQueue = [];
	        }

	        var mpid = "";
	        if (res && res.status && res.status.code === 0) {
	          mpid = res.result && res.result.mpId;
	          // 重置分享 url
	          _this.config.url = res.result && res.result.shareUrl;
	        }
	        SdkLoader()
	          .reset(mpid)
	          .ready(function() {
	            callback.call(_this);
	          });
	      });
	      return;
	    }

	    // if (isRestAndNoUrl || util._isWDHost()) {
	    callback && callback.call(_this);
	    return;
	    // }
	  };

	  /**
	   * 获取多域名最终 url 与 mpid
	   */
	  Share.prototype._getDomianFixedUrl = function(callback) {
	    var shareUrl = this.config.url;

	    var fixUrlThor = "https://thor.weidian.com/skittles/share.getUrlNew/1.0";
	    if (location.host.match(/\.daily\./) !== null) {
	      fixUrlThor =
	        "https://thor.daily.weidian.com/skittles/share.getUrlNew/1.0";
	      shareUrl = shareUrl.replace(/^https/, "http");
	    }
	    if (location.host.match(/\.pre\./) !== null) {
	      fixUrlThor = "https://thor.pre.weidian.com/skittles/share.getUrlNew/1.0";
	      shareUrl = shareUrl.replace(/^https/, "http");
	    }

	    util._post({
	      url: fixUrlThor,
	      data: {
	        param: util._JSONStringifySafty({
	          shareUrl: shareUrl,
	          originUrl: location.href
	        })
	      },
	      timeout: 800,
	      success: function(res) {
	        callback && callback(res);
	      },
	      error: function(err) {
	        callback && callback(err);
	      }
	    });
	  };

	  /**
	   * 初始化分享DOM结构
	   * @private
	   */
	  Share.prototype._initShareDOM = function(isReset) {
	    var option = this.option;
	    if (isReset) {
	      if (ua.isQQ || ua.isWx) {
	        option.$dom.innerHTML = this._renderShareTip();
	      } /* istanbul ignore next */ else if (ua.isQQBrowser) {
	        option.$dom.innerHTML = this._renderSharePanel();
	      } else {
	        option.$dom.innerHTML = this._renderCopyPanel();
	      }
	      this._bindEvent();
	      return;
	    }

	    var shareBox = document.createElement("div");
	    shareBox.id = "ui-share-box";
	    shareBox.style.display = "none";
	    shareBox.dataset.spider = "share";
	    this.option.$dom = shareBox;

	    if (ua.isQQ) {
	      //在QQ中
	      shareBox.innerHTML = this._renderShareTip();
	      this._initQQShare();
	    } else if (ua.isWx) {
	      //在微信中
	      shareBox.innerHTML = this._renderShareTip();
	      this._setWXMenuEvent();
	    } /* istanbul ignore next */ else if (ua.isQQBrowser) {
	      //在QQ浏览器中
	      shareBox.innerHTML = this._renderSharePanel();
	    } else if (option.isInApp) {
	      this._showCornerShare();
	    } else {
	      shareBox.innerHTML = this._renderCopyPanel();
	    }

	    document.body.appendChild(shareBox);
	    this._bindEvent();
	  };

	  Share.prototype._initQQShare = function() {
	    var self = this,
	      config = {
	        title: self.config.title,
	        desc: self.config.content,
	        share_url: _coverUrlWfr(self.config.url, "qfriendh5"),
	        image_url: self.config.img
	      };
	    window.mqq.data.setShareInfo(config);
	  };

	  Share.prototype._setWXMenuEvent = function() {
	    if (!window.wx) return;

	    //分享给朋友
	    window.wx.onMenuShareAppMessage(this._setWeixinConfig("chats"));

	    //分享到朋友圈
	    window.wx.onMenuShareTimeline(this._setWeixinConfig("moments"));

	    //分享到QQ
	    window.wx.onMenuShareQQ(this._setWeixinConfig("qq"));

	    //分享到QQ空间
	    window.wx.onMenuShareQZone(this._setWeixinConfig("qzone"));

	    //隐藏部分菜单按钮
	    if (this.option.hideMenuItems.length > 0) {
	      window.wx.hideMenuItems(this._setMenuItem(this.option.hideMenuItems));
	    }

	    if (this.option.showMenuItems.length > 0) {
	      window.wx.showMenuItems(this._setMenuItem(this.option.showMenuItems));
	    }
	  };

	  Share.prototype._setMenuItem = function(menuItems) {
	    var menuList = [];
	    var shareIndex = menuItems.indexOf("share");
	    if (shareIndex > -1) {
	      [].push.apply(menuList, [
	        "menuItem:share:appMessage",
	        "menuItem:share:timeline",
	        "menuItem:share:qq",
	        "menuItem:share:weiboApp",
	        "menuItem:favorite",
	        "menuItem:share:facebook",
	        "menuItem:share:QZone"
	      ]);
	      menuItems.splice(shareIndex, 1);
	    }

	    var protectIndex = menuItems.indexOf("protect");
	    if (protectIndex > -1) {
	      [].push.apply(menuList, [
	        "menuItem:editTag",
	        "menuItem:delete",
	        "menuItem:copyUrl",
	        "menuItem:originPage",
	        "menuItem:readMode",
	        "menuItem:openWithQQBrowser",
	        "menuItem:openWithSafari",
	        "menuItem:share:email"
	      ]);
	      menuItems.splice(protectIndex, 1);
	    }

	    [].push.apply(menuList, menuItems);
	    if (menuList.length > 0) {
	      return { menuList: menuList };
	    }

	    return {};
	  };

	  /**
	   * 微信分享参数设置
	   * @param way
	   * @returns {{title: string, desc: string, link: string, imgUrl: string, trigger: param.trigger, fail: param.fail}}
	   * @private
	   */
	  Share.prototype._setWeixinConfig = function(channel) {
	    var self = this,
	      channels = {
	        chats: {
	          title: "分享给微信好友",
	          scene: 1
	        },
	        moments: {
	          title: "分享到朋友圈",
	          scene: 2
	        },
	        qq: {
	          title: "分享给qq好友",
	          scene: 3
	        },
	        qzone: {
	          title: "分享到qq空间",
	          scene: 4
	        }
	      },
	      wfr = WFR_MAP[channel],
	      link = _coverUrlWfr(self.config.url, wfr),
	      param = {
	        title: self.config.title,
	        desc: self.config.content,
	        link: link,
	        imgUrl: self.config.img,
	        trigger: function(res) {
	          if (window.spider) {
	            window.spider.trackAction({
	              actionName: "_share",
	              actionArgs: {
	                app: "wechat",
	                channel: channels[channel].title.slice(3),
	                shareUrl: link
	              }
	            });
	          }
	        },
	        success: function(res) {
	          var result = {
	            error: false,
	            result: {
	              message: "success",
	              scene: channels[channel].scene
	            }
	          };
	          self.option.wxSuccessCb && self.option.wxSuccessCb(wfr, result);
	        }
	      };

	    if (channel && channel === "moments") {
	      delete param.desc;
	      if (channel === "moments") param.title = self.config.pyq;
	    }

	    return param;
	  };

	  /**
	   * 微信模板
	   * @returns {string}
	   */
	  Share.prototype._renderShareTip = function() {
	    return (
	      '<a href="javascript:;" class="ui-share__placeholder J_closed"></a>' +
	      '<a href="javascript:;" class="ui-share--weixin J_closed">' +
	      '<img src="' +
	      (this.option.wxShareTipImge
	        ? this.option.wxShareTipImge
	        : "https://si.geilicdn.com/110c5d9454010c64fc4366d75230a729.png") +
	      '"></a>'
	    );
	  };

	  /**
	   * 其他模板
	   * @returns {string}
	   */
	  /* istanbul ignore next */
	  Share.prototype._renderSharePanel = function() {
	    var html = "";
	    var scene = this.option.scene;

	    if (scene.indexOf(1) >= 0) {
	      html +=
	        '<a href="javascript:;" class="ui-share--icon J_channel" scene="0" type="weixin" channel="chats" spm-auto data-spider="dsharechats">' +
	        '<img src="https://si.geilicdn.com/hz_img_032100000158d24945100a02685e_48_48_unadjust.png">' +
	        "<p>微信好友</p>" +
	        "</a>";
	    }

	    if (scene.indexOf(2) >= 0) {
	      html +=
	        '<a href="javascript:;" class="ui-share--icon J_channel" scene="1" type="weixin" channel="moments" spm-auto data-spider="dsharemoments">' +
	        '<img src="https://si.geilicdn.com/hz_img_033300000158d26282d20a02685e_48_48_unadjust.png">' +
	        "<p>朋友圈</p>" +
	        "</a>";
	    }

	    if (scene.indexOf(3) >= 0) {
	      html +=
	        '<a href="javascript:;" class="ui-share--icon J_channel" type="qq" scene="0" channel="qq" spm-auto data-spider="dshareqq">' +
	        '<img src="https://si.geilicdn.com/hz_img_136f00000158d26814dc0a026860_48_48_unadjust.png">' +
	        "<p>QQ好友</p>" +
	        "</a>";
	    }

	    if (scene.indexOf(4) >= 0) {
	      html +=
	        '<a href="javascript:;" class="ui-share--icon J_channel" type="qq" scene="1" channel="qzone" spm-auto data-spider="dshareqzone">' +
	        '<img src="https://si.geilicdn.com/hz_img_030900000158d22b05690a02685e_48_48_unadjust.png">' +
	        "<p>QQ空间</p>" +
	        "</a>";
	    }
	    return (
	      '<a href="javascript:;" class="ui-share__placeholder J_closed"></a>' +
	      '<section class="ui-share">' +
	      '<div class="ui-share--panel">' +
	      this.option.prependHtml +
	      html +
	      '</div><a href="javascript:;" class="ui-share--closed J_closed">取消</a>' +
	      "</section>"
	    );
	  };

	  Share.prototype._renderCopyPanel = function() {
	    return (
	      '<a href="javascript:;" class="ui-share__placeholder J_closed"></a>' +
	      '<section class="ui-share">' +
	      '<div class="ui-share--panel">' +
	      '<div class="ui-share-copy">' +
	      "<p>长按复制下方链接，去粘贴给好友吧</p>" +
	      '<input class="copy-href" type="text">' +
	      "</div>" +
	      '</div><a href="javascript:;" class="ui-share--closed J_closed">取消</a>' +
	      "</section>"
	    );
	  };

	  Share.prototype._showCornerShare = function() {
	    var self = this;

	    if (ua.isVbuyer && self.option.vbuyerShare) {
	      self._registerVbuyerShareCallback();
	      self._showVbuyerShare();
	    } else if (ua.isWD && self.option.wdShare) {
	      self._showWDShare();
	    }
	  };

	  var isRegisterConerShareCallback = false;
	  Share.prototype._registerVbuyerShareCallback = function() {
	    var _this = this;
	    !isRegisterConerShareCallback &&
	      window.KDJSBridge2 &&
	      window.KDJSBridge2.FN_registerHandler(
	        "share",
	        "nativeShareResult",
	        function(res) {
	          var standardBridgeRes = {
	            param: res,
	            bridgeParam: {
	              status: {
	                status_code: 0,
	                status_reason: ""
	              }
	            }
	          };
	          var result = _this._logAfterNativeShare(standardBridgeRes);
	          _this.option.appSuccessCb && _this.option.appSuccessCb(res, result);
	        }
	      );
	    isRegisterConerShareCallback = true;
	  };

	  Share.prototype._showVbuyerShare = function() {
	    var config = this.config;
	    var option = this.option;

	    var panelList = this._setNativePanel();
	    var newShare = {
	      panelList: panelList,
	      userInfo: {
	        from: "h5",
	        wdFriendTitle: config.title,
	        wdFriendSubTitle: config.content,
	        utInfo: {}
	      }
	    };
	    if (config.header) {
	      newShare.headerInfo = config.header;
	    }
	    window.KDJSBridge2 &&
	      window.KDJSBridge2.call(
	        "Share",
	        "showOption",
	        {
	          title: config.title,
	          content: config.content,
	          content_ext: config.pyq,
	          url: config.img,
	          cmd: config.url,
	          scene: option.scene,
	          src: location.href,
	          newShare: newShare,
	          h5ShareContext: {}
	        },
	        function(res) {
	          if (res && res.param && res.param.result != 0) {
	            window.vcollect &&
	              window.vcollect.reportError({
	                abstract: "webview 右上角唤起失败",
	                url: location.href
	              });
	          }
	        }
	      );
	  };

	  Share.prototype._showWDShare = function() {
	    var _this = this;
	    var config = this.config;
	    var option = this.option;
	    window.KDJSBridge2 &&
	      window.KDJSBridge2.call(
	        "WDJSBridge",
	        "share",
	        {
	          title: config.title,
	          content: config.content,
	          content_ext: config.pyq,
	          url: config.img,
	          cmd: config.url,
	          mini_path: config.path,
	          mini_id: config.id,
	          mini_withShareTicket: "1",
	          mini_programType: config.miniType,
	          img_urls: config.img_urls,
	          moments_mode: option.momentMode,
	          scene: option.scene,
	          action_immediately: 0,
	          copy_url: config.copyUrl
	        },
	        function(res) {
	          var result = _this._logAfterNativeShare(res);
	          _this.option.appSuccessCb && _this.option.appSuccessCb(res, result);
	        }
	      );
	  };

	  /**
	   * 绑定事件
	   */
	  Share.prototype._bindEvent = function() {
	    var self = this;
	    var closed = document.querySelectorAll(".J_closed");
	    var channel = document.querySelectorAll(".J_channel");
	    var invoking = false;

	    for (var i = 0; i < closed.length; i++) {
	      closed[i].addEventListener("click", function() {
	        invoking = false;
	        self.option.$dom.style.display = "none";
	        document.body.classList.remove("ui-share__hidden");
	      });
	    }
	    /* istanbul ignore next */
	    for (var k = 0; k < channel.length; k++) {
	      channel[k].addEventListener("click", function() {
	        if (invoking == true) return;
	        var channel = this.getAttribute("channel");
	        self._shareInQQBrowser(channel);
	        invoking = true;

	        setTimeout(function() {
	          invoking = false;
	        }, 5000);
	      });
	    }
	  };

	  /**
	   * 调用QQ浏览器分享服务
	   * @private
	   */
	  /* istanbul ignore next */
	  Share.prototype._shareInQQBrowser = function(channel) {
	    var curConfig = this.config,
	      map = { qq: 4, qzone: 3, chats: 1, moments: 8 },
	      toApp = map[channel],
	      wfr = WFR_MAP[channel];

	    var url = _coverUrlWfr(curConfig.url, wfr);
	    var config = {
	      url: url,
	      title: curConfig.title,
	      description: curConfig.content,
	      img_url: curConfig.img,
	      to_app: toApp //微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
	    };
	    if (toApp == 8) {
	      config.title = curConfig.pyq;
	    }
	    browser.app.share(config);
	  };

	  /**
	   * 调用native分享
	   * @private
	   */
	  Share.prototype._showNativeShare = function(directScene) {
	    var _this = this;
	    var config = this.config;
	    var option = this.option;
	    if (ua.isVbuyer) {
	      var panelList = this._setNativePanel(directScene);
	      var newShare = {
	        panelList: panelList,
	        userInfo: {
	          from: "h5",
	          wdFriendTitle: config.title,
	          wdFriendSubTitle: config.content,
	          utInfo: {}
	        }
	      };
	      if (config.header) {
	        newShare.headerInfo = config.header;
	      }
	      window.KDJSBridge2 &&
	        window.KDJSBridge2.call(
	          "WDJSBridge",
	          "share",
	          {
	            title: config.title,
	            content: config.content,
	            content_ext: config.pyq,
	            url: config.img,
	            cmd: config.url,
	            mini_path: config.path,
	            mini_id: config.id,
	            mini_withShareTicket: "1",
	            mini_programType: config.miniType,
	            img_urls: config.img_urls,
	            moments_mode: option.momentMode,
	            scene: option.scene,
	            copy_url: config.copyUrl,
	            newShare: newShare
	          },
	          function(res) {
	            var result = _this._logAfterNativeShare(res);
	            option.appSuccessCb && option.appSuccessCb(res, result);
	          }
	        );
	    }
	    if (ua.isWD) {
	      function _generateShareParam(type) {
	        var param = {
	          title: type === "weChatMoment" ? config.pyq : config.title,
	          url: config.url,
	          des: config.content,
	          imageUrl: config.img
	        };

	        //分享出去是小程序特有字段
	        if (type === "weChatMiniProgram") {
	          param.id = config.id;
	          param.environment = 0;
	          param.path = config.path;
	          param.shareTicket = "yes";
	        }
	        return param;
	      }

	      function _assginType(type) {
	        var shareParam = _generateShareParam(type);
	        var param = {};
	        for (var key in shareParam) {
	          param[key] = shareParam[key];
	        }

	        param.type = type;
	        return param;
	      }

	      var items = [
	        {
	          scene: 1,
	          title: "微信好友",
	          iconName: "1",
	          shareParams: _assginType("weChat")
	        },
	        {
	          scene: 2,
	          title: "微信朋友圈",
	          iconName: "3",
	          shareParams: _assginType("weChatMoment")
	        },
	        {
	          scene: 3,
	          title: "QQ好友",
	          iconName: "5",
	          shareParams: _assginType("qq")
	        },
	        {
	          scene: 4,
	          title: "QQ空间",
	          iconName: "6",
	          shareParams: _assginType("qzone")
	        },
	        {
	          scene: 5,
	          title: "微博",
	          iconName: "7",
	          shareParams: _assginType("weibo")
	        },
	        {
	          scene: 6,
	          title: "复制链接",
	          iconName: "15",
	          shareParams: _assginType("copy")
	        },
	        {
	          scene: 15,
	          title: "微店群聊",
	          iconName: "9",
	          shareParams: _assginType("imGroup")
	        },
	        {
	          scene: 99,
	          title: "保存图片",
	          iconName: "12",
	          shareParams: _assginType("saveImage")
	        },
	        {
	          scene: 201,
	          title: "微信好友",
	          iconName: "1",
	          shareParams: _assginType("weChatImage")
	        },
	        {
	          scene: 202,
	          title: "微信朋友圈",
	          iconName: "3",
	          shareParams: _assginType("weChatMomentImage")
	        },
	        {
	          scene: 203,
	          title: "微信小程序",
	          iconName: "1",
	          shareParams: _assginType("weChatMiniProgram")
	        }
	      ];

	      var filterItems = [];
	      option.scene.forEach(function(scene) {
	        items.forEach(function(item) {
	          if (item.scene === scene) {
	            filterItems.push(item);
	          }
	        });
	      });

	      // items = items.filter(function(item) {
	      //   return option.scene.indexOf(item.scene) >= 0;
	      // });

	      window.KDJSBridge2 &&
	        window.KDJSBridge2.call(
	          "service",
	          "SharePopupViewService",
	          {
	            shares: [
	              {
	                items: filterItems
	              }
	            ]
	          },
	          function(res) {
	            var result = _this._logAfterNativeShare(res);
	            option.appSuccessCb && option.appSuccessCb(res, result);
	          }
	        );
	    }
	  };

	  Share.prototype._setNativePanel = function(directScene) {
	    var config = this.config;
	    var option = this.option;
	    var panelList = [
	      {
	        panelType: 1,
	        desc: "链接分享",
	        content: {
	          url: config.url,
	          title: config.title,
	          content: config.content,
	          imageUrl: config.img,
	          scene: option.scene.join("_"),
	          path: config.path || "",
	          userName: config.id || "",
	          videoUrl: ""
	        }
	      },
	      {
	        panelType: 2,
	        desc: "海报分享",
	        content: {
	          postList: [
	            {
	              postType: 0,
	              desc: "纯图片海报",
	              content: {
	                img: config.posterUrl
	              }
	            }
	          ],
	          scene: option.scene.join("_")
	        }
	      },
	      {
	        panelType: 3,
	        desc: "文本分享",
	        content: {
	          text: config.text, //内容
	          scene: option.scene.join("_") //分享渠道列表
	        }
	      }
	    ];

	    var actPanelList = panelList.filter(function(panel) {
	      return option.panel.indexOf(panel.panelType) > -1;
	    });

	    var actPanelListTypes = actPanelList.map(function(panel) {
	      return panel.panelType;
	    });

	    if (actPanelListTypes.length === 0) {
	      actPanelList = panelList[0];
	    }

	    actPanelList.forEach(function(panel) {
	      var otherPanelType = actPanelListTypes.filter(function(type) {
	        return type !== panel.panelType;
	      });
	      var extraScene = otherPanelType.map(function(type) {
	        return "10" + type;
	      });

	      var totalScene = option.scene.concat(extraScene).join("_");
	      panel.content.scene = totalScene;

	      if (directScene) {
	        if (panel.panelType === 1 || panel.panelType === 3) {
	          panel.content.directScene = directScene;
	        }
	      }
	    });

	    return actPanelList;
	  };

	  Share.prototype._logAfterNativeShare = function(res) {
	    var config = this.config;
	    if (
	      res &&
	      res.bridgeParam &&
	      res.bridgeParam.status &&
	      res.bridgeParam.status.status_code != 0
	    ) {
	      window.vcollect &&
	        window.vcollect.reportError({
	          abstract: "jsbridge分享面板唤起失败",
	          app: ua.name,
	          url: location.href
	        });
	      return {
	        error: true,
	        result: {
	          message: "jsbridge分享面板唤起失败"
	        }
	      };
	    } else if (
	      res &&
	      res.param &&
	      (res.param.result == 0 || res.param.code == 0)
	    ) {
	      // 店长版需要上报分享成功信息，买家版由 native 负责
	      var channel = "";
	      if (ua.isWD) {
	        window.pathTracker && window.pathTracker.successTrack();
	        var type = res.param.originParams && res.param.originParams.type;
	        channel = {
	          weChat: 1,
	          weChatMoment: 2,
	          qq: 3,
	          qzone: 4,
	          weibo: 5,
	          saveImage: 99,
	          weChatImage: 201,
	          weChatMomentImage: 202,
	          weChatMiniProgram: 203
	        }[type];
	      }

	      if (ua.isVbuyer) {
	        channel = res.param.type;
	      }

	      window.spider &&
	        window.spider.trackAction({
	          actionName: "_share",
	          actionArgs: {
	            app: ua.name,
	            channel: channel || "unknow",
	            shareUrl: config.url
	          }
	        });

	      return {
	        error: false,
	        result: {
	          message: "success",
	          scene: channel
	        }
	      };
	    } else {
	      return {
	        error: false,
	        result: {
	          message: "用户取消分享",
	          scene: -1
	        }
	      };
	    }
	  };

	  /**
	   * 克隆对象或分配对象
	   * @param obj
	   * @returns {object}
	   * @private
	   */
	  function assgin(target) {
	    var sourceArray = [].slice.call(arguments, 1);
	    sourceArray.forEach(function(source) {
	      for (var key in source) {
	        if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
	          target[key] = source[key];
	        }
	      }
	    });
	    return target;
	  }

	  function _coverUrlWfr(url, wfr) {
	    var parsedUrl = util._urlParse(url);
	    var hash = parsedUrl.hash;

	    var inheritWfr = util._queryStringParse(location.search).wfr;
	    if (!inheritWfr) {
	      inheritWfr = "h5direct";
	    } else {
	      Object.keys(WFR_MAP).forEach(function(channel) {
	        var wfr = WFR_MAP[channel];
	        inheritWfr = inheritWfr.replace("_" + wfr, "");
	      });
	    }

	    var queryParam = util._queryStringParse(parsedUrl.search);
	    queryParam.wfr = inheritWfr + "_" + wfr;

	    var querystring = util._queryStringStringify(queryParam);
	    return url.replace(/(\?|#)[\S]*$/, "") + "?" + querystring + hash;
	  }

	  return Share;
	});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function() {
	  var dpr = devicePixelRatio;
	  var viewport = document.querySelector('meta[name="viewport"]');

	  var content =
	    viewport &&
	    viewport.getAttribute("content").match(/initial\-scale=([\d\.]+)/);

	  var scale = (content && content[1]) || dpr;
	  var str =
	    "ui-share-box{display:none}#ui-share-box a{text-decoration:none}.ui-share__placeholder{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10}.ui-share__hidden{overflow:hidden}.ui-share--weixin{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10}.ui-share--weixin>img{width:100%}.ui-share{width:100%;position:fixed;left:0;top:0;background:#ededed;overflow:hidden;z-index:999}.ui-share--panel{background:#fff;font-size:0;text-align:center}.ui-share--icon:nth-of-type(5n){margin-top:0}.ui-share--icon{width:25%;display:inline-block;text-align:center;margin-top:19.2px;margin-bottom:19.2px}.ui-share--icon>img{width:80px}.ui-share--icon>p{font-size:25.6px;color:#222;margin-top:6.4px}" +
	    ".ui-share--closed{background:#fff;font-size:" +
	    20 * scale +
	    "px;text-align:center;padding:" +
	    12 * scale +
	    "px 0;color:#ee3431;display:block;margin-top:12.8px}.ui-share--tips{margin:0;background:#fff;font-size:25.6px;color:#bbb;text-align:center;padding:9.6px 0}" +
	    ".ui-share-copy{padding:" +
	    12 * scale +
	    "px;overflow:hidden;text-align:left}" +
	    ".ui-share-copy>input{font-size:" +
	    16 * scale +
	    "px;padding:" +
	    5 * scale +
	    "px;width:90%;border:1px solid #ccc}" +
	    ".ui-share-copy>p{font-size:" +
	    16 * scale +
	    "px;color:#222;margin:0 0 16px}";
	  var style = document.createElement("style");
	  style.innerHTML = str;
	  document.head.appendChild(style);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * see: https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent
	 * see: https://www.w3.org/TR/html5/webappapis.html#the-errorevent-interface
	 */

	"use strict";

	var util = __webpack_require__(2);
	var undefined = void 0;

	var log = {};
	/* message: 错误关键信息
	* url:     错误文件名，默认当前 url
	* name:    错误大类
	*/
	var necessaryKeys = ["message", "url", "name"];
	var defaultNecessaryValue = {
	  message: "some error happend, but no message",
	  url: location.href,
	  name: "__UNDEF__"
	};
	var supportPerformance =
	  window.performance &&
	  window.performance.getEntries &&
	  typeof window.performance.getEntries === "function" &&
	  window.performance.getEntries() instanceof Array;

	var THOR_HOST_REGEXP = /\/\/thor\.(daily\.|pre\.)?weidian\.com/;

	//提前定义接口函数
	log.error = util._noop;
	log.warn = util._noop;
	log.info = util._noop;
	log.debug = util._noop;
	log.report = util._noop;
	log.setError = util._noop;
	log._erroCode = {
	  ">": null,
	  ">=": null,
	  "<": null,
	  "<=": null,
	  "=": null,
	  "!=": [0]
	};

	var typeUtil = {
	  isObject: function(value) {
	    return (
	      Object.prototype.toString.call(value) !== "[object Array]" &&
	      typeof value === "object"
	    );
	  },
	  isArray: function(value) {
	    return Object.prototype.toString.call(value) === "[object Array]";
	  },
	  isNumber: function(value) {
	    return Object.prototype.toString.call(value) === "[object Number]";
	  },
	  isRegExp: function(value) {
	    return Object.prototype.toString.call(value) === "[object RegExp]";
	  }
	};

	var foreach = function(arr, callback) {
	  for (var i = 0, len = arr.length; i < len; i++) {
	    callback(arr[i], i);
	  }
	};

	function checkStaticPerfect() {
	  var scripts = document.querySelectorAll("script") || [];
	  var links = document.querySelectorAll("link") || [];

	  links = [].filter.call(links, function(link) {
	    return link.rel === "stylesheet" && link.href !== "";
	  });

	  scripts = [].filter.call(scripts, function(script) {
	    return script && script.src !== "";
	  });

	  scripts = [].map.call(scripts, function(script) {
	    return script.src;
	  });

	  links = [].map.call(links, function(link) {
	    return link.href;
	  });

	  var staticAssets = [].concat(scripts, links);
	  var failed = [];
	  staticAssets.forEach(function(name) {
	    if (performance.getEntriesByName(name).length === 0) {
	      failed.push(name);
	    }
	  });

	  return failed;
	}

	//@core install
	log.init = function(core, options) {
	  if (
	    supportPerformance &&
	    typeof performance.getEntriesByName === "function"
	  ) {
	    if (options.auto) {
	      setTimeout(function() {
	        var failed = checkStaticPerfect();
	        failed.forEach(function(name) {
	          logError({
	            name: "__ASSETS_ERROR__",
	            url: name,
	            message: "assets loaded error"
	          });
	        });
	      }, 5000);
	    }
	  }

	  var reportUrl = core.getReportUrl();

	  var logError = function(data) {
	    if (!log.isNotValidConfig) {
	      _log("error", data);
	    }
	  };
	  var logWarn = function(data) {
	    if (!log.isNotValidConfig) {
	      _log("warn", data);
	    }
	  };
	  var logDebug = function(data) {
	    if (!log.isNotValidConfig) {
	      _log("debug", data);
	    }
	  };
	  var logInfo = function(data) {
	    if (!log.isNotValidConfig) {
	      _log("info", data);
	    }
	  };

	  function _log(subtype, data) {
	    data = data || {};

	    if (typeof data.detail === "string") {
	      data.detail = {
	        userReportDetail: data.detail
	      };
	    }

	    util._getNetwork(function(network) {
	      util._extendObj(data.detail, { network: network });
	    });

	    core.report("log", subtype, _normalizeLog(data));
	  }

	  function _normalizeLog(data) {
	    necessaryKeys.forEach(function(key) {
	      if (data[key] === "" || data[key] === undefined) {
	        data[key] = defaultNecessaryValue[key];
	        return;
	      }
	    });

	    var detail = data.detail || {};
	    if (util._isObjectAndNotNull(detail)) {
	      Object.keys(detail).forEach(function(secondKey) {
	        if (detail[secondKey] === "") {
	          detail[secondKey] = null;
	        }
	      });
	    }

	    var originalUrl = data.url || location.href;

	    // url 被转换成 cleanUrl
	    data.url = _cutQuerystringAndHash(originalUrl);

	    // originUrl 为原本 url
	    detail.originalUrl = originalUrl;
	    data.detail = detail;

	    return data;
	  }

	  function _cutQuerystringAndHash(url) {
	    if (/\?\?/.test(url)) {
	      return url.replace(/#\S+,/, ",").replace(/#\S+$/, "");
	    }
	    return url.replace(/[#\?]\S+$/, "");
	  }

	  function _isUploadAPI(url) {
	    return url.indexOf(reportUrl) >= 0;
	  }

	  function _watchXhr() {
	    function _overwriteXhr() {
	      var XhrProto = XMLHttpRequest.prototype;
	      XhrProto._open = XhrProto.open;
	      XhrProto.open = function(method, url) {
	        this._http = this._http || {};
	        this._http.method = method;
	        this._http.url = url;
	        return XhrProto._open.apply(this, [].slice.call(arguments));
	      };
	      XhrProto._send = XhrProto.send;
	      XhrProto.send = function() {
	        var xhr = this;
	        if (!_isUploadAPI(xhr._http.url)) {
	          _listenXhrResponse(xhr);
	        }
	        return XhrProto._send.apply(this, [].slice.call(arguments));
	      };
	    }

	    function _listenXhrResponse(xhr) {
	      var requestUrl = xhr._http.url;

	      var isErrorCode = function(erroCodeMap, statusCode) {
	        // > 的值必须是一个数字
	        if (erroCodeMap[">"] && statusCode > erroCodeMap[">"]) {
	          return true;
	        }

	        // >= 的值必须是一个数字
	        if (erroCodeMap[">="] && statusCode >= erroCodeMap[">="]) {
	          return true;
	        }

	        // < 的值必须是一个数字
	        if (erroCodeMap["<"] && statusCode < erroCodeMap["<"]) {
	          return true;
	        }

	        // <= 的值必须是一个数字
	        if (erroCodeMap["<="] && statusCode <= erroCodeMap["<="]) {
	          return true;
	        }

	        var testEqualArray = function(statusCode) {
	          var isError = false;
	          if (typeUtil.isArray(erroCodeMap["="])) {
	            foreach(erroCodeMap["="], function(item) {
	              if (isError) {
	                return;
	              }
	              if (statusCode === item) {
	                isError = true;
	              }
	            });
	          }
	          return isError;
	        };

	        var testNotEqualArray = function(statusCode) {
	          var isError = false;
	          if (typeUtil.isArray(erroCodeMap["!="])) {
	            foreach(erroCodeMap["!="], function(item) {
	              if (isError) {
	                return;
	              }

	              if (statusCode !== item) {
	                isError = true;
	              }
	            });
	          }

	          return isError;
	        };

	        // = 的值是一个数组
	        if (testEqualArray(statusCode)) {
	          return true;
	        }

	        // = 的值是一个数组
	        if (testNotEqualArray(statusCode)) {
	          return true;
	        }

	        return false;
	      };

	      /* load 事件不一定是 code 200，只要请求返回成功，即执行 load */
	      xhr.addEventListener("load", function() {
	        var res = {};
	        var traceId = "";
	        //只统计thor接口的
	        var requestUrl = xhr._http.url;

	        if (THOR_HOST_REGEXP.test(requestUrl)) {
	          traceId =
	            xhr.getResponseHeader && xhr.getResponseHeader("x-trace-id");
	        }

	        if (xhr.response) {
	          res = util._JSONParseSafty(xhr.response);
	        }

	        if (res) {
	          if (typeof res === "string") {
	            logError({
	              name: "__XHR__",
	              url: requestUrl,
	              message: "status_code_error",
	              detail: {
	                traceId: traceId || "",
	                status: xhr.status,
	                response: res
	              }
	            });
	            return;
	          }

	          var statusCode = res.status && res.status.code;
	          statusCode =
	            statusCode === undefined
	              ? res.status && res.status.status_code
	              : statusCode;
	          if (isErrorCode(log._erroCode, statusCode)) {
	            logError({
	              name: "__XHR__",
	              url: requestUrl,
	              message: "response_code_error",
	              detail: {
	                traceId: traceId || "",
	                status: 200,
	                response: util._JSONStringifySafty(res)
	              }
	            });
	          }
	        }
	      });

	      /* error 事件一般触发在 network error
	      * 1. network error(like cross origin not allow)
	      * 2. methods error or not allow
	      * 3. 302 cause corss origin(Most of the scene),
	      *    the reason is that server invoke uncatch error,
	      *    nginx do this
	      * https://xhr.spec.whatwg.org/#the-open()-method
	      */
	      xhr.addEventListener("error", function() {
	        logError({
	          name: "__XHR__",
	          url: requestUrl,
	          message: "network_error"
	        });
	      });
	      xhr.addEventListener("abort", function() {
	        logWarn({
	          name: "__XHR__",
	          url: requestUrl,
	          message: "abort"
	        });
	      });
	      xhr.addEventListener("timeout", function() {
	        logError({
	          name: "__XHR__",
	          url: requestUrl,
	          message: "timeout"
	        });
	      });
	    }

	    _overwriteXhr();
	  }

	  function _watchPageError() {
	    /* 需要业务方在 script 标签上标记 crossorigin 才能获得详细错误信息
	      *  包括错误文件名等，如果未标记，默认 url 为当前链接
	      */
	    window.addEventListener("error", function(evt) {
	      var error = evt.error;
	      if (!error) {
	        logError({
	          message: "error_in_script",
	          url: location.href,
	          name: "__SCRIPT_ERROR__",
	          detail: {
	            stack:
	              '[vcollect] 浏览器未给出错误详情，请开发者在 <script> 标签上加上 crossorigin="anonymous" 属性以获取错误详情'
	          }
	        });
	      } else {
	        logError({
	          message: error.message,
	          url: evt.filename,
	          name: "__WINDOW_ERROR__",
	          detail: {
	            stack: error.stack,
	            lineno: evt.lineno,
	            colno: evt.colno
	          }
	        });
	      }
	    });

	    /* 需要业务方在 script 标签上标记 crossorigin 才能获捕获 unhandledrejection 事件错误 */
	    window.addEventListener("unhandledrejection", function(evt) {
	      if (evt.reason && typeUtil.isObject(evt.reason)) {
	        logError({
	          message: evt.reason.message,
	          url: "",
	          name: "__UNHANDLEDREJECTION_ERROR__",
	          detail: {
	            stack: evt.reason.stack
	          }
	        });
	      }
	    });
	  }

	  if (options.auto) {
	    _watchXhr();
	    _watchPageError();
	  } else {
	    // _watchPageError();
	  }

	  log.error = logError;
	  log.warn = logWarn;
	  log.info = logInfo;
	  log.debug = logDebug;
	  log.report = function(options) {
	    if (!options || typeof options !== "object") {
	      options = {};
	    }
	    var errorData = {
	      message: options.abstract || "[vcollect] 开发者没有提供错误摘要",
	      url: options.url,
	      name: "__USER_REPORT_ERROR__",
	      detail: options.detail || "[vcollect] 开发者没有提供错误详情"
	    };

	    logError(errorData);
	  };
	  log.isNotValidConfig = false;
	  log.setError = function(options) {
	    // var showErrorMessage = function(msg) {
	    //   console.error(msg);
	    //   log.isNotValidConfig = true;
	    // };
	    // // 检查参数格式是否正确
	    // if (!typeUtil.isObject(options)) {
	    //   showErrorMessage(
	    //     "[vcollect] 设置 errorCode 时，需要传参，参数格式为对象"
	    //   );
	    //   return;
	    // }
	    // if (!typeUtil.isObject(options.errorCode)) {
	    //   showErrorMessage(
	    //     "[vcollect] 设置 errorCode 时，需要传参，参数格式为对象"
	    //   );
	    //   return;
	    // }
	    // for (var key in options.errorCode) {
	    //   var value = options.errorCode[key];
	    //   if (key === ">" || key === ">=" || key === "<" || key === "<=") {
	    //     if (!typeUtil.isNumber(value)) {
	    //       showErrorMessage(
	    //         '[vcollect] 设置 errorCode 时，"' + key + '" 的值必须是数字'
	    //       );
	    //       return;
	    //     }
	    //   } else if (key === "=" || key === "!=") {
	    //     if (!typeUtil.isArray(value)) {
	    //       showErrorMessage(
	    //         '[vcollect] 设置 errorCode 时，"' +
	    //           key +
	    //           '" 的值必须是数字或数组或正则表达式'
	    //       );
	    //       return;
	    //     }
	    //     for (var i = 0, len = value.length; i < len; i++) {
	    //       if (!typeUtil.isNumber(value[i])) {
	    //         showErrorMessage(
	    //           '[vcollect] 设置 errorCode 时，且 "' +
	    //             key +
	    //             '" 的值是数组时，数组项必须是数字'
	    //         );
	    //         return;
	    //       }
	    //     }
	    //   } else {
	    //     showErrorMessage(
	    //       '[vcollect] 设置 errorCode 时，"' +
	    //         key +
	    //         '" 不被支持，支持以下设置 ">"、">=", "<", "<=", "=", "!="'
	    //     );
	    //     return;
	    //   }
	    // }
	    // for (var key in options.errorCode) {
	    //   log._erroCode[key] = options.errorCode[key];
	    // }
	  };
	};

	module.exports = log;


/***/ })
/******/ ]);