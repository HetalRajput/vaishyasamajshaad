# Hostinger frontend deployment

This repository deploys only the React + Vite frontend in `vss_front`. The Express
backend must be deployed from its separate repository first so its public HTTPS
address is available.

1. In hPanel, add a web app, import this repository, and set its root directory to
   `vss_front`.
2. Select the Vite/React preset and Node.js 22.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Set `VITE_API_URL=https://api.example.com` and
   `VITE_IMAGE_URL=https://api.example.com/uploads`.
5. Connect the main domain and deploy. Vite variables are embedded at build time,
   so changing them requires a frontend rebuild.

## Before going live

- Verify the backend `/health` endpoint before building the frontend.
- Configure the backend's CORS setting with the exact HTTPS frontend origins.
- Confirm registration, login, profile updates, images, email, and SPA route
  refreshes on temporary domains before switching DNS.
