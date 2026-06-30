# 前置实验一键复现
# 复现论文结论：493.5 invocations / 7 async turns / <4.2% semantic relevance

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "=== Preliminary Measurement Reproduction ===" -ForegroundColor Cyan
Write-Host "Benchmark root: ../real_benchmarks"
Write-Host "Trace dir:      $PSScriptRoot"
Write-Host ""

node analyze-preliminary-measurement.js `
  --benchmark-root "../real_benchmarks" `
  --json-out "preliminary-measurement-results.json" `
  @args

if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ""
Write-Host "Results written to preliminary-measurement-results.json" -ForegroundColor Green
Write-Host "Protocol doc: 第六章-测量协议与前置实验说明.md"
