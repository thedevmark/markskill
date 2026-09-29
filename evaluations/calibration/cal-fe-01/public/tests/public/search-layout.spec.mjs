import { test, expect } from "@playwright/test";

test("long saved-search names keep their Run action inside a phone viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#saved");
  const card = page.locator('[data-search-id="unbroken"]');
  const button = card.getByRole("button", { name: /^Run / });
  await expect(button).toBeVisible();
  const [cardBox, buttonBox] = await Promise.all([card.boundingBox(), button.boundingBox()]);
  expect(cardBox).not.toBeNull();
  expect(buttonBox).not.toBeNull();
  expect(buttonBox.x + buttonBox.width).toBeLessThanOrEqual(390);
  expect(buttonBox.x + buttonBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 0.5);
});
