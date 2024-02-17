const { expect, test } = require("@playwright/test");

test("http", async ({ page }) => await page.goto("http://localhost:7071"));

test("https", async ({ page }) => await page.goto("https://localhost:7072"));

test.afterEach(async ({ page }) => {
  await page.context().addCookies([
    { name: "first", url: page.url(), value: "first" },
    { name: "second", url: page.url(), value: "second" },
  ]);
  await page.reload();

  const text = await page.textContent("*");
  expect(text).toBeTruthy();
  expect(text).toContain(";");
  expect(text).not.toContain(",");
});
