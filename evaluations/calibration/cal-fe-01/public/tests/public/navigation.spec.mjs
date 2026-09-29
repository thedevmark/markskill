import { test, expect } from "@playwright/test";

test("Receipts navigation remains intact", async ({ page }) => {
  await page.goto("/#saved");
  await page.getByRole("link", { name: "Receipts" }).click();
  await expect(page.getByRole("heading", { name: "Receipts", level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open receipt" })).toBeVisible();
});
