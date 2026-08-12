// GitHub Pages project sites are served from /<repo-name>/, not the domain
// root, so a hardcoded path like "/logos/foo.svg" resolves incorrectly.
// Vite exposes the configured `base` (see vite.config.js) at build time via
// import.meta.env.BASE_URL — this helper prepends it to any asset path.
export function asset(path) {
  const base = import.meta.env.BASE_URL; // e.g. "/" locally, "/repo-name/" on Pages
  return `${base}${path.replace(/^\//, '')}`;
}
