# Document uploads

Customers uploading several documents sometimes see the wrong file marked complete, and Retry can act on a different file after they remove one. Please make the upload screen reliable and usable on phones and with a keyboard.

Run:

```text
npm ci --ignore-scripts
npm test
npm run test:browser
```

The browser suite uses the locally installed Chrome channel. The app and tests require no external network access.
