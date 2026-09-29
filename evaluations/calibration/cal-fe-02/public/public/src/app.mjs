import { createLegacyQueue } from "./legacy-upload-queue.mjs";

const input = document.querySelector("#file-input");
const uploadAll = document.querySelector("#upload-all");
const queue = createLegacyQueue(document.querySelector("#queue"), document.querySelector("#announcement"));

input.addEventListener("change", () => {
  queue.add(input.files);
  input.value = "";
});
uploadAll.addEventListener("click", queue.uploadAll);
