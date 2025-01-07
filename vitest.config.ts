import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      reporter: [
        "text",
        "json",
        "html",
      ],
      include: [
        "src/**/*.ts",
        "src/**/*.tsx",
      ],
      exclude: [
        "**/*.d.ts",
        "**/*.test.ts",
        "src/dev.ts",
      ],
    },
  },
})
