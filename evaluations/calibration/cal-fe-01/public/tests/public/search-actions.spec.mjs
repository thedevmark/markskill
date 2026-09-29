import { test, expect } from "@playwright/test";

test("identically named searches dispatch their own IDs once", async ({ page }) => {
  const requests = [];
  page.on("request", request => {
    if (request.method() === "POST") requests.push(new URL(request.url()).pathname);
  });
  await page.goto("/#saved");
  await page.locator('[data-search-id="duplicate-two"]').getByRole("button").click();
  await expect(page.getByRole("status")).toHaveText("Started duplicate-two");
  expect(requests).toEqual(["/api/searches/duplicate-two/runs"]);
});

test("the missing-name fallback remains usable from the keyboard", async ({ page }) => {
  await page.goto("/#saved");
  const button = page.locator('[data-search-id="untitled"]').getByRole("button", { name: "Run Untitled search" });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toHaveText("Started untitled");
});
