export function receiptCard(receipt) {
  const item = document.createElement("li");
  item.className = "card receipt-card";
  const label = document.createElement("span");
  label.textContent = receipt.label;
  const link = document.createElement("a");
  link.href = receipt.href;
  link.textContent = "Open receipt";
  item.append(label, link);
  return item;
}
