export const statusLabel = entry => entry.status === "failed" ? `Failed: ${entry.error}` : entry.status[0].toUpperCase() + entry.status.slice(1);
