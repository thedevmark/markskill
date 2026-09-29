import { test, expect } from "@playwright/test";

test("keyboard users can reach queue actions", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Add files").setInputFiles({ name: "keys.txt", mimeType: "text/plain", buffer: Buffer.from("keys") });
  const upload = page.getByRole("listitem").filter({ hasText: "keys.txt" }).getByRole("button", { name: "Upload" });
  await upload.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("listitem").filter({ hasText: "keys.txt" })).toContainText("Uploaded");
});
