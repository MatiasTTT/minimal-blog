# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deploying to GitHub Pages (Actions)

This repo is configured to deploy automatically with GitHub Actions using:

- `.github/workflows/deploy.yml`
- Vite base path in `vite.config.js` set to `/minimal-blog/`

### One-time GitHub setup

1. Open your repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Source: GitHub Actions`.

### Deploy flow

1. Push to the `main` branch.
2. GitHub Actions builds the app and deploys `dist` to Pages.
3. Site URL will be: `https://MatiasTTT.github.io/minimal-blog/`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
