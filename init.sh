#!/bin/sh
test -d ./dist || mkdir dist
test -f ./dist/index.html || cp ./index.html ./dist/index.html
npm i
npm run build
osascript -e "tell application \"Terminal\" to do script \"cd $PWD; tsc -p ./tsconfig.json --watch\""