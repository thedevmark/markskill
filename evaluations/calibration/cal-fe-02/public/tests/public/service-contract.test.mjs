import test from "node:test";
import assert from "node:assert/strict";

import { encodeFileRequest } from "../../public/src/upload-api.mjs";

test("encodes file bytes and stable correlation", async () => {
  const file = { name: "alpha.txt", size: 5, arrayBuffer: async () => new TextEncoder().encode("alpha").buffer };
  assert.deepEqual(await encodeFileRequest(file, "entry-1"), {
    correlationId: "entry-1",
    name: "alpha.txt",
    size: 5,
    bytes: "YWxwaGE=",
  });
});
