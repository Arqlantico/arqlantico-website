# Arqlántico — Studio Website (v04)

Static one-page site for Arqlántico, an architecture & urban design studio
focused on early-stage design and feasibility across building typologies.
Quadrilingual: English (default) / Español / 中文 / العربية.

## Structure
```
index.html
assets/
  css/style.css
  js/main.js       (nav, reveal animations, hero carousel, process diagram)
  js/i18n.js       (EN/ES/ZH/AR dictionaries + language detection & switcher)
  img/
    hero-carousel/
```

No build step, no dependencies — plain HTML/CSS/JS.

## Language switcher
- Visible top-right on every screen size: EN / ESP / 中文 / عربي.
- On first visit, the language is auto-detected from the browser's
  language settings (`navigator.languages`).
- Manually picking a language overrides detection and is remembered
  (via `localStorage`) for that visitor's next visit.
- All translations were written as professional business copy for each
  language, not machine-translated word-for-word.
- Arabic switches the whole page to right-to-left (RTL) reading direction
  and a matching Arabic typeface (Noto Kufi Arabic). Core layout (nav,
  text alignment, spacing, the eyebrow tick-mark, the studio image caption)
  mirrors correctly. Photographs are never flipped — only UI chrome mirrors.
  A few decorative/asymmetric details (e.g. the animated process-diagram
  line, which always draws left→right) were left as a pragmatic compromise;
  flag it if you'd like those fully mirrored too.

## What changed since v03
- Added Arabic (العربية) as a fourth language, with full RTL support.

## Still pending
- Correct, typology-matched images for each Services card (01–06)

## Publish on GitHub Pages
1. Create a new repository on GitHub (e.g. `arqlantico-website`).
2. Upload the contents of this folder to the repository root.
3. Settings → Pages → Source → Deploy from a branch → `main` / `/(root)` → Save.
4. Live at `https://<your-user>.github.io/<your-repo>/`.

To pause/resume publishing at any time without losing anything: Settings → Pages →
Source → set to "None" to unpublish, switch back to `main` to republish.
