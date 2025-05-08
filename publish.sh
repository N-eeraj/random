if npm run test; then
  rm -rf dist
  npm run build
  cp package.json dist/package.json
  cp README.md dist/README.md
  cd dist
  if [ "$1" == "dry" ]; then
    echo "Dry Run..."
    npm publish --access public --dry-run || { echo "Publish failed"; exit 1; }
  elif [ "$1" == "alpha" ]; then
    echo "Publishing alpha..."
    npm publish --access public --tag alpha || { echo "Publish failed"; exit 1; }
  elif [ "$1" == "beta" ]; then
    echo "Publishing beta..."
    npm publish --access public --tag beta || { echo "Publish failed"; exit 1; }
  else
    echo "Publishing main version..."
    npm publish --access public || { echo "Publish failed"; exit 1; }
  fi
else
  echo "Some test failed, aborting publish"
fi