Enjoy the Free code + Assets 😍

- Support us on YouTube Channel: https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Vaishya Samaj Shaadi frontend

### Local development

1. Install Node.js 20 or newer.
2. Run `npm ci`.
3. Copy `.env.example` to `.env.local` and configure the API values.
4. Run `npm run dev`.

### Production verification

Run `npm run check`. This performs the lint check and creates an optimized build in `dist/`.

Before deploying, provide `VITE_API_URL`, `VITE_IMAGE_URL`, and `VITE_PUBLIC_API_KEY` through the hosting provider's build environment. Values prefixed with `VITE_` are public and must not contain server secrets.

The deployment host must serve `index.html` for unknown paths so React Router URLs such as `/profile/...` work when opened directly. Deploy the generated `dist/` directory; do not deploy source files, `.env` files, or `node_modules/`.
