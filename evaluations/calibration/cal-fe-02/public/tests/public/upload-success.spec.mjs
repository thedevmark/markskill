import { test, expect } from "@playwright/test";
import { fileURLToPath } from "node:url";

const alpha = fileURLToPath(new URL("../fixtures/alpha.txt", import.meta.url));

test("one file uploads with its name and size", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Add files").setInputFiles(alpha);
  const row = page.getByRole("listitem").filter({ hasText: "alpha.txt" });
  await expect(row).toContainText("15 bytes");
  await row.getByRole("button", { name: "Upload" }).click();
  await expect(row).toContainText("Uploaded");
});

test("two ordinary files can be queued and uploaded", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Add files").setInputFiles([
    { name: "one.txt", mimeType: "text/plain", buffer: Buffer.from("one") },
    { name: "two.txt", mimeType: "text/plain", buffer: Buffer.from("two") },
  ]);
  await page.getByRole("button", { name: "Upload all" }).click();
  await expect(page.getByRole("listitem").filter({ hasText: "one.txt" })).toContainText("Uploaded");
  await expect(page.getByRole("listitem").filter({ hasText: "two.txt" })).toContainText("Uploaded");
});
