// Prefix a root-relative asset path with the configured base
// (GitHub Pages serves the site at /blanc-site/, dev serves at /)
export const withBase = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;
