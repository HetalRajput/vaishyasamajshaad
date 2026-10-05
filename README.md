# Vaishya Samaj Shaadi

Full-stack application organized as a Git/Hostinger-ready monorepo.

## Applications

- `vss_front` — React 18 frontend built with Vite
- `vss_back` — Express API written in TypeScript with a MySQL database

## Local development

Create local environment files from each `.env.example` file, then run the apps
in separate terminals:

```powershell
cd vss_back
npm install
npm run dev
```

```powershell
cd vss_front
npm install
npm run dev
```

The frontend defaults to `http://localhost:8080` for API calls.

## Production

See [HOSTINGER_DEPLOYMENT.md](HOSTINGER_DEPLOYMENT.md) for the GitHub and Hostinger
configuration, required environment variables, and launch checklist.
