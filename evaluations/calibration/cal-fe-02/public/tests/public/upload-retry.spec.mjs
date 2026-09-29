import { test, expect } from "@playwright/test";
import { fileURLToPath } from "node:url";

const retryOnce = fileURLToPath(new URL("../fixtures/retry-once.txt", import.meta.url));

test("a failed upload can be retried", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Add files").setInputFiles(retryOnce);
  const row = page.getByRole("listitem").filter({ hasText: "retry-once.txt" });
  await row.getByRole("button", { name: "Upload" }).click();
  await expect(row).toContainText("Failed");
  await row.getByRole("button", { name: "Retry" }).click();
  await expect(row).toContainText("Uploaded");
});

test("a removed pending file cannot update another entry", async ({ page }) => {
  const pending = [];
  await page.route("**/api/uploads", route => { pending.push(route); });
  await page.goto("/");
  await page.getByLabel("Add files").setInputFiles([
    { name: "remove-me.txt", mimeType: "text/plain", buffer: Buffer.from("remove") },
    { name: "keep-me.txt", mimeType: "text/plain", buffer: Buffer.from("keep") },
  ]);
  await page.getByRole("button", { name: "Upload all" }).click();
  await expect.poll(() => pending.length).toBe(2);
  await page.getByRole("listitem").filter({ hasText: "remove-me.txt" }).getByRole("button", { name: "Remove" }).click();
  const removedRoute = pending.find(route => route.request().postDataJSON().name === "remove-me.txt");
  const keptRoute = pending.find(route => route.request().postDataJSON().name === "keep-me.txt");
  await removedRoute.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "late failure" }) });
  await keptRoute.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ correlationId: keptRoute.request().postDataJSON().correlationId }) });
  const kept = page.getByRole("listitem").filter({ hasText: "keep-me.txt" });
  await expect(kept).toContainText("Uploaded");
  await expect(page.getByText("remove-me.txt")).toHaveCount(0);
});
