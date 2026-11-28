@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0screen-watch.ps1" %*
pause
