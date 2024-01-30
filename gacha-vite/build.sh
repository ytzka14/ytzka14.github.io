#! /bin/bash
npm run build
cp -rf ~/ytzka14.github.io/gacha-vite/dist/* ~/ytzka14.github.io/gacha/
sed -i .bak -e 's:/assets:./assets:g' ~/ytzka14.github.io/gacha/index.html