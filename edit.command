# open Typora in content folder
open -a typora ./content
# clear site cache
php cecil.phar clear
# build and serve site + open browser
php cecil.phar serve --open
