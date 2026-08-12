import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/,
// so the build needs to know that subpath ahead of time.
// - Locally (`npm run dev`) this defaults to "/" and everything works as normal.
// - The GitHub Actions workflow (.github/workflows/deploy.yml) sets it
//   automatically to "/<repo-name>/" during the Pages build.
// - Using a custom domain, or deploying to the root of <user>.github.io itself?
//   Set base to '/' instead.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
});
