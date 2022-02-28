REM open Typora in content folder
start /B "" "C:\Program Files\Typora\Typora.exe" .\content
REM clear site cache
php cecil.phar clear
REM build and serve site + open browser
php cecil.phar serve --open
