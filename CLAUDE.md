# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to dist/
npm run preview   # Preview built site locally
```

No linter or test suite is configured.

## Architecture

Astro static site deployed to GitHub Pages at `abhinavverma.cv`. Tailwind CSS for styling. No framework components (React/Vue) — all `.astro` files.

### Data sources

Resume content comes from three places:

1. **TypeScript data files** (`src/data/`): `experience.ts` (work history as `Role[]`), `coffee.ts` (gear list), `coffee-beans.json` (bean catalog). Edit these to update resume content.

2. **Astro content collections** (`src/content/books/`): Markdown files with Zod-validated frontmatter for book reviews. Schema defined in `src/content/config.ts`.

3. **Goodreads RSS** (`src/lib/goodreads.ts`): Fetches live reading data at build time using `fast-xml-parser`. User ID `146623685`. Used as primary source for books; local content collection is the fallback.

### Pages and routing

- `/` — Main resume page (`pages/index.astro`), composes all section components
- `/books` — Full book list with client-side year/shelf filtering; fetches Goodreads RSS
- `/books/[slug]` — Individual book review from local content collection only
- `/coffee` — Coffee gear and beans showcase

### Component layout

All section components live in `src/components/`. The base HTML shell is `src/layouts/Layout.astro` (loads fonts via Google Fonts CDN, Font Awesome 6.5.0 via CDN). Education and social links are hardcoded directly in their components.

### Styling conventions

- Custom CSS classes `.resume-section` and `.section-heading` are defined in `src/styles/global.css`
- Font families: `font-serif` = Saira Extra Condensed (headings), `font-sans` = Inter (body)
- Section anchors offset by 4rem to account for the fixed nav

### Deployment

Push to `main` triggers `.github/workflows/deploy.yml` — runs `npm ci && npm run build`, then deploys `dist/` to GitHub Pages.
