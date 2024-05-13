#! /bin/bash
npm run build
cp -rf ~/ytzka14.github.io/dist/* ~/ytzka14.github.io/
sed -i .bak -e 's:/assets:./assets:g' ~/ytzka14.github.io/index.html