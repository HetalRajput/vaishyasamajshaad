# Hostinger deployment

This repository contains two deployable applications:

- `vss_front`: React + Vite frontend
- `vss_back`: Express + TypeScript backend

Use two Hostinger websites/apps, normally the main domain for the frontend and an
`api` subdomain for the backend. Both apps can use the same GitHub repository by
selecting a different root directory during setup.

## Backend

1. In hPanel, select **Websites -> Add Website -> Node.js Web App**.
2. Import the GitHub repository and set the root directory to `vss_back`.
3. Select Node.js 22.
4. Use `npm run build` as the build command and `npm start` as the start command.
5. Add every variable from `vss_back/.env.example` in Hostinger's Environment
   Variables screen. Do not upload or commit `.env`.
6. Connect an API domain such as `api.example.com` and verify `/health` returns
   `{ "status": "ok" }`.

The backend currently writes uploads to local disk. Hostinger deployments are
versioned and can replace application files, so production uploads should be moved
to persistent object storage before accepting new user uploads.

## Frontend

1. Add another web app, import the same repository, and set its root directory to
   `vss_front`.
2. Select the Vite/React preset and Node.js 22.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Set `VITE_API_URL=https://api.example.com` and
   `VITE_IMAGE_URL=https://api.example.com/uploads`.
5. Connect the main domain and redeploy. Vite variables are embedded at build time,
   so changing them requires a frontend rebuild.

## Before going live

- Rotate the Gmail app password that was previously hard-coded in backend source.
- Import the MySQL database/schema and use its production credentials in hPanel.
- Set `CORS_ORIGINS` to the exact HTTPS frontend origins.
- Confirm registration, login, profile updates, image uploads, email, and SPA route
  refreshes on the temporary domains before switching DNS.
- Move uploaded user images to persistent storage.
