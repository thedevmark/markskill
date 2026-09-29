export function savedSearchCard(search, onRun) {
  const item = document.createElement("li");
  item.className = "card saved-search-card";
  item.dataset.searchId = search.id;

  const copy = document.createElement("div");
  copy.className = "saved-search-copy";
  const name = document.createElement("h2");
  name.className = "saved-search-name";
  name.textContent = search.name;
  const query = document.createElement("p");
  query.className = "saved-search-meta";
  query.textContent = search.query;
  copy.append(name, query);

  const button = document.createElement("button");
  button.className = "run-search";
  button.type = "button";
  button.textContent = "Run";
  button.setAttribute("aria-label", `Run ${search.name}`);
  button.addEventListener("click", () => onRun(search.id, button));

  item.append(copy, button);
  return item;
}
