for file in dist/**/*.js; do
  terser "$file" --compress --mangle --output "${file%.js}.js"
done
