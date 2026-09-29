import { runSearch } from "./api.mjs";
import { savedSearchCard } from "./components/saved-search-card.mjs";
import { receiptCard } from "./components/receipt-card.mjs";
import { normalizeSearch } from "./data-contract.mjs";

const app = document.querySelector("#app");
const status = document.querySelector("#status");

async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

async function renderSaved() {
  const records = (await loadJSON("/data/searches.json")).map(normalizeSearch);
  const heading = document.createElement("h1");
  heading.textContent = "Saved searches";
  const list = document.createElement("ul");
  list.className = "card-list";
  for (const search of records) {
    list.append(savedSearchCard(search, async (id, button) => {
      button.disabled = true;
      try {
        const result = await runSearch(id);
        status.textContent = `Started ${result.id}`;
      } catch (error) {
        status.textContent = error.message;
      } finally {
        button.disabled = false;
      }
    }));
  }
  app.replaceChildren(heading, list);
}

async function renderReceipts() {
  const receipts = await loadJSON("/data/receipts.json");
  const heading = document.createElement("h1");
  heading.textContent = "Receipts";
  const list = document.createElement("ul");
  list.className = "card-list";
  for (const receipt of receipts) list.append(receiptCard(receipt));
  app.replaceChildren(heading, list);
}

async function route() {
  status.textContent = "";
  if (location.hash === "#receipts") await renderReceipts();
  else await renderSaved();
}

window.addEventListener("hashchange", route);
route().catch((error) => { status.textContent = error.message; });
