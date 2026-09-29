import test from "node:test";
import assert from "node:assert/strict";

import { normalizeSearch } from "../../public/src/data-contract.mjs";

test("normalizes a missing name without changing identity", () => {
  assert.deepEqual(normalizeSearch({ id: "a", name: "", query: "x" }), {
    id: "a",
    name: "Untitled search",
    query: "x",
  });
});

test("rejects records without stable string identity", () => {
  assert.throws(() => normalizeSearch({ name: "Missing id" }), /id is required/);
});
