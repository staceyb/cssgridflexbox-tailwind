import { defineWorkspace } from "vitest/config";

/// reference types="vitest"
export default defineWorkspace([
  {
    extends: "vite.config.js",
    test: {
      include: ["**/*.node.test.{js,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
      //setupFiles: ["./src/__tests__/setupTests.js"],
    },
  },
  {
    extends: "vite.config.js",
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js,jsx}"],
      name: "browser",
      browser: {
        provider: "playwright",
        enabled: true,
        name: "chromium", // you can use chromium or webkit here too
      },
    },
  },
]);
