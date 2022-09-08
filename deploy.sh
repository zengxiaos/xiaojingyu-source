rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'init' &&
git remote add origin git@github.com:zengxiaos/xiaojingyu-ui.git &&
git branch -M main &&
git push -u origin main -f &&
cd ..