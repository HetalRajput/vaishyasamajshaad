# Vaishya Samaj Shaadi Frontend

React 18 frontend built with Vite. The backend is maintained and deployed from a
separate Git repository.

## Local development

Create `vss_front/.env` from `vss_front/.env.example`, then start the frontend:

```powershell
cd vss_front
npm install
npm run dev
```

The frontend defaults to `http://localhost:8080` for API calls. Set
`VITE_API_URL` to the separately deployed backend address.

## Production

See [HOSTINGER_DEPLOYMENT.md](HOSTINGER_DEPLOYMENT.md) for the frontend GitHub and
Hostinger configuration.
