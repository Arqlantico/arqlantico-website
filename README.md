# Arqlántico — Studio Website (v03)

Static one-page site for Arqlántico, an architecture & urban design studio
focused on early-stage design and feasibility across building typologies.
Trilingual: English (default) / Español / 中文.

## Structure
```
index.html
assets/
  css/style.css
  js/main.js       (nav, reveal animations, hero carousel, process diagram)
  js/i18n.js       (EN/ES/ZH dictionaries + language detection & switcher)
  img/
    hero-carousel/
```

No build step, no dependencies — plain HTML/CSS/JS.

## Language switcher
- Visible top-right on every screen size: EN / ESP / 中文.
- On first visit, the language is auto-detected from the browser's
  language settings (`navigator.languages`) — a Spanish-language browser
  gets Spanish, a Chinese-language browser gets Chinese, anything else
  defaults to English.
- Manually picking a language overrides detection and is remembered
  (via `localStorage`) for that visitor's next visit.
- All translations (Spanish – Spain, and Mandarin Chinese) were written
  as professional business copy, not machine-translated word-for-word.

## What changed since v02
- Studio-section image: back to a side-column layout, sized between the
  original (too small) and the later full-width version (too big).
- Hero footer coordinate updated to N 36°55′.
- Added the EN / ES / ZH language switcher described above.

## Still pending
- Correct, typology-matched images for each Services card (01–06)

## Publish on GitHub Pages
1. Create a new repository on GitHub (e.g. `arqlantico-website`).
2. Upload the contents of this folder to the repository root.
3. Settings → Pages → Source → Deploy from a branch → `main` / `/(root)` → Save.
4. Live at `https://<your-user>.github.io/<your-repo>/`.

To pause/resume publishing at any time without losing anything: Settings → Pages →
Source → set to "None" to unpublish, switch back to `main` to republish.
