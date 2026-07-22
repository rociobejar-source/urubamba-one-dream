// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Skip Nitro entirely: we deploy a pure static SPA to GitHub Pages, so there is
  // no server/worker to build. Without this, Nitro's default (Cloudflare) preset
  // writes the server to .output/ while the SPA prerender step looks for it in
  // dist/server/server.js, breaking the build.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Static prerender (SSG): render the real HTML of every route into static
    // .html files at build time. The site has no server data deps, so this gives
    // full content + meta on first paint (good SEO) and is servable by GitHub Pages.
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
