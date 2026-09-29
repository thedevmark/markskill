# Product contracts

- Users may add multiple files, including while others are uploading.
- Every selected file is distinct; duplicate filenames are valid.
- Each entry shows filename, byte size, and an honest waiting, uploading, uploaded, or failed status.
- A response only updates the entry associated with that request.
- Remove deletes that entry. A later response must not restore it or change another entry.
- Retry retries the same failed entry and preserves its bytes.
- One entry cannot have simultaneous duplicate submissions.
- Errors remain understandable and recoverable; success follows server acknowledgment.
- Viewport changes preserve queue state and pending operations.
- Add, upload, retry, and remove work with keyboard and pointer.
- Focus remains useful when an entry disappears; status changes are announced.
- The workflow works from 320 through 1440 CSS pixels.
- Reload persistence is not required.
- Preserve the existing API semantics and visual tokens.

The transport sends the file's name, size, bytes, and a client-generated correlation ID. The service returns that correlation ID on success. Identity must not depend on list position or filename.
