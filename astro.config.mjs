// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GHPAGES=1 npm run build → build for GitHub Pages at /blanc-site/
export default defineConfig({
  site: "https://swim-lang.github.io",
  base: process.env.GHPAGES ? "/blanc-site" : "/",
});
