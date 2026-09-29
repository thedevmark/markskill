import { statusLabel } from "../components/status-message.mjs";

export function renderDesktop(entries, handlers) {
  return render(entries, handlers, "desktop");
}

function render(entries, handlers, mode) {
  const list = document.createElement("ul");
  list.className = `queue-list ${mode}`;
  entries.forEach((entry, index) => {
    const row = document.createElement("li");
    row.className = "queue-row";
    row.dataset.index = index;
    const copy = document.createElement("div");
    copy.className = "file-copy";
    const name = document.createElement("div"); name.className = "file-name"; name.textContent = entry.file.name;
    const size = document.createElement("div"); size.className = "file-size"; size.textContent = `${entry.file.size} bytes`;
    const status = document.createElement("div"); status.className = "file-status"; status.dataset.status = entry.status; status.textContent = statusLabel(entry);
    copy.append(name, size);
    const actions = document.createElement("div"); actions.className = "actions";
    if (entry.status === "waiting") actions.append(button("Upload", () => handlers.upload(index)));
    if (entry.status === "failed") actions.append(button("Retry", () => handlers.upload(index)));
    actions.append(button("Remove", () => handlers.remove(index)));
    row.append(copy, status, actions);
    list.append(row);
  });
  return list;
}

function button(label, action) {
  const element = document.createElement("button");
  element.type = "button";
  element.textContent = label;
  element.addEventListener("click", action);
  return element;
}
