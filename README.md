# Personal site — EN / FA

A single-page, bilingual (English + Persian, RTL) personal site for a career
and activities. Built with Next.js 16, React 19, Tailwind CSS 4 and TypeScript.

```
/en  →  English, left-to-right
/fa  →  Persian, right-to-left
/    →  redirects to /en

/en/cv, /fa/cv  →  print-ready CV (Print / Save as PDF)
```

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Edit your content

All text lives in two files, one per language:

```
src/content/en.ts   ← English
src/content/fa.ts   ← Persian
```

`src/content/types.ts` describes the shape. Keep the keys identical in both
files; only the values change. Anything in `[square brackets]` is a placeholder
to replace.

### Things to update first

1. **Name, role, tagline** — `hero` in both files.
2. **Email** — `contact.email` in both files. It powers the hero button and the
   contact section.
3. **Links** — `contact.links` (GitHub, LinkedIn, X…).
4. **CV** — the "Download CV" button opens `/[lang]/cv`, a print-ready page built
   from the same content (Print / Save as PDF in the browser). If you would
   rather ship a PDF file, drop it in `public/cv.pdf` and set
   `hero.ctaSecondaryHref` to `/cv.pdf` in both content files.
5. **Meta title/description** — `meta` in both files (browser tab + search).

### Persian specifics

- Dates are per-language. Write them in the Persian calendar on the Persian
  side (`۱۴۰۱ تا اکنون`), Gregorian on the English side (`2022 — Present`).
- Because the page sets `dir="rtl"` and `lang="fa"`, layout, spacing and
  typography mirror automatically. Prefer logical CSS utilities
  (`ps-*`, `pe-*`, `ms-*`, `me-*`, `text-start`, `text-end`) if you extend the
  design.
- Keep the ZWNJ character (نیم‌فاصله) in Persian words like `فعالیت‌ها` — it is
  already used throughout `fa.ts`.

## Structure

```
src/
  app/[lang]/layout.tsx    html lang/dir, fonts, metadata, static params
  app/[lang]/page.tsx      page composition
  app/[lang]/cv/page.tsx   print-ready CV view
  app/globals.css          design tokens, typography, RTL + print rules
  components/              one component per section
  content/                 en.ts, fa.ts, types.ts
  i18n/                    locales, direction, dictionary lookup
```

Sections are anchor links (`#about`, `#experience`, …). To add or remove a
section, edit `nav` in both content files and render the component in
`src/app/[lang]/page.tsx`.

## Deploy

The site is fully static. Easiest options:

- **Vercel** — import the repo, no configuration needed.
- **Netlify / Cloudflare Pages** — build with `npm run build`, publish `.next`
  using the platform's Next.js adapter.
- **Static hosting (S3, GitHub Pages)** — set `output: "export"` in
  `next.config.ts` and publish `out/`. Note that `output: "export"` ignores the
  `/` → `/en` redirect in `next.config.ts`, so add the same redirect at the host
  level (or copy `out/en/index.html` to `out/index.html`).

## Notes

- Typography: Geist (Latin) + Vazirmatn (Persian), loaded with `next/font`.
- Print styles are included, so ⌘/Ctrl+P produces a readable CV-ish version.
- No dark mode yet; the palette is warm paper + ink + a deep jade accent.
