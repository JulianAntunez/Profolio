@echo off
title Systems Analyst Portfolio Dev Server
echo ===================================================
echo   INICIANDO SERVIDOR DE DESARROLLO (VITE + REACT)
echo ===================================================
echo.
echo [1/2] Verificando dependencias de Node...
call npm install
echo.
echo [2/2] Lanzando servidor de desarrollo...
echo.
call npm run dev
pause
