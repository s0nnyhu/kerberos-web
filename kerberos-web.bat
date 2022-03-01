@echo off

@REM CHECK IF APP DIR EXIST
if NOT EXIST "C:\Kerberos\kerberos-web" (
  echo "App directory might not exist"
  exit /b 2
)

@REM CHECK IF NODE IS INSTALLED
where node >nul 2>nul
if %errorlevel%==1 (
    @echo "Node might be not installed or not found in path (npm)"
    exit
)

@REM RUN KERBEROS
cd "C:\Kerberos\kerberos-web"
CALL npm run start
pause
