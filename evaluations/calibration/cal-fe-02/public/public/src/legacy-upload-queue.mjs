import { uploadFile } from "./upload-api.mjs";
import { renderCompact } from "./views/compact-queue.mjs";
import { renderDesktop } from "./views/desktop-queue.mjs";

export function createLegacyQueue(container, announcement) {
  const entries = [];
  const media = matchMedia("(max-width: 34rem)");

  function render() {
    const renderer = media.matches ? renderCompact : renderDesktop;
    container.replaceChildren(renderer(entries, { upload: uploadAt, remove: removeAt }));
  }

  function add(files) {
    for (const file of files) entries.push({ file, status: "waiting", error: "" });
    render();
  }

  function removeAt(index) {
    const [removed] = entries.splice(index, 1);
    announcement.textContent = removed ? `Removed ${removed.file.name}` : "";
    render();
    const next = container.querySelector("button") || document.querySelector("#file-input");
    next?.focus();
  }

  async function uploadAt(index) {
    const entry = entries[index];
    if (!entry || entry.status === "uploading") return;
    entry.status = "uploading";
    entry.error = "";
    render();
    const correlationId = `${Date.now()}-${index}`;
    try {
      await uploadFile(entry.file, correlationId);
      entries[index].status = "uploaded";
      announcement.textContent = `Uploaded ${entries[index].file.name}`;
    } catch (error) {
      entries[index].status = "failed";
      entries[index].error = error.message;
      announcement.textContent = `Upload failed for ${entries[index].file.name}`;
    }
    render();
  }

  function uploadAll() {
    entries.forEach((entry, index) => {
      if (entry.status === "waiting" || entry.status === "failed") uploadAt(index);
    });
  }

  media.addEventListener("change", render);
  render();
  return { add, uploadAll };
}
