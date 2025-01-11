if npm run test; then
  rm -rf dist
  npm run build
  cp package.json dist/package.json
  cp README.md dist/README.md
  cd dist
  if [ "$1" == "alpha" ]; then
    npm publish --access public --tag alpha
  elif [ "$1" == "beta" ]; then
    npm publish --access public --tag beta
  else
    npm publish --access public
  fi
  cd ..
  npm i
else
  echo "Some test failed, aborting publish"
fi