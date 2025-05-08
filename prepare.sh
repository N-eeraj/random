# copy all .d.ts files from src to dist
for file in src/**/*.d.ts; do
  cp "$file" "dist/$(dirname "$file" | sed 's|src/||')/"
done
