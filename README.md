# next-invalid-url-issue

Next.js ERR_INVALID_URL reproduction.

## How to

1. Run `npm ci` to install dependencies.
2. Run `npm run build` to build the project.
3. Run `npm start` to start the server.
4. Run `npm run request` in separate terminal to send killing request.
5. Observe `UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_URL]: Invalid URL: *`.
   This should kill the server on node 16.
