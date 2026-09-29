import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/public",
  testMatch: "*.spec.mjs",
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:4174",
    browserName: "chromium",
    channel: "chrome",
  },
  webServer: {
    command: "node tools/serve.mjs",
    port: 4174,
    reuseExistingServer: false,
  },
});
