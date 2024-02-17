import { defineConfig } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "chromium",
      use: {
        contextOptions: {
          ignoreHTTPSErrors: true,
        },
        launchOptions: {
          ignoreDefaultArgs: ["--headless"],
          args: ["--headless=new"],
        },
      },
    },
  ],
  webServer: {
    command: "npm start",
    ignoreHTTPSErrors: true,
    url: "https://localhost:7072",
  },
});
