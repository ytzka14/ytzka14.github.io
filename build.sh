#! /bin/bash
rm ~/ytzka14.github.io/assets/*
cp ~/ytzka14.github.io/index-ref.html ~/ytzka14.github.io/index.html
npm run build
echo 'build done'
cp -rf ~/ytzka14.github.io/dist/* ~/ytzka14.github.io/
echo 'cd done'
sed -i .bak -e 's:/assets:./assets:g' ~/ytzka14.github.io/index.html
echo 'sed done'