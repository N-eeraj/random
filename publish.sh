if npm run test; then
  rm -rf dist
  npm run build
  cp package.json dist/package.json
  cp README.md dist/README.md
  cd dist
  npm publish --access public
else
  echo "Some test failed, aborting publish"
fi