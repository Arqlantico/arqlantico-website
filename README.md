# Arqlántico — Studio Website (v02 in progress)

Static one-page site for Arqlántico, an architecture & urban design studio
focused on early-stage design and feasibility across building typologies.

## Structure
```
index.html
assets/
  css/style.css
  js/main.js
  img/                  (optimised photos)
    hero-carousel/      (images cycling in the homepage hero)
```

No build step, no dependencies — plain HTML/CSS/JS.

## What changed since v01
- Hero now slowly crossfades through 6 high-resolution images (was a single static photo).
- Studio-section image: removed the black background (it was an unapplied alpha
  mask from the source file) and recomposited it onto the site's paper background color.

## Still pending for v02 (see running notes)
- Correct, typology-matched images for each Services card (01–06)
- Final contact email
- Calendly booking link replacing the phone button

## Publish on GitHub Pages
1. Create a new repository on GitHub (e.g. `arqlantico-website`).
2. Upload the contents of this folder to the repository root.
3. Settings → Pages → Source → Deploy from a branch → `main` / `/(root)` → Save.
4. Live at `https://<your-user>.github.io/<your-repo>/`.
