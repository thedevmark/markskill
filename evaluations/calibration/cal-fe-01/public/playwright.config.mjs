import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/public",
  testMatch: "*.spec.mjs",
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    channel: "chrome",
  },
  webServer: {
    command: "node tools/serve.mjs",
    port: 4173,
    reuseExistingServer: false,
  },
});
