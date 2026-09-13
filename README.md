# Danie Titus — Developer Portfolio

A minimal, responsive personal portfolio built with plain HTML, CSS, and
JavaScript — no frameworks, no build step.

## Structure

```
portfolio/
│
├── index.html          → all page content
├── css/
│   └── style.css       → all styling
├── js/
│   └── script.js       → mobile nav toggle + scroll-based nav highlighting
├── assets/
│   └── logo/           → empty by design (see "Images" below)
└── README.md
```

## Running it

1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.

No npm install, no terminal commands needed.

## What you should edit

Search `index.html` for `EDIT ME` comments — they mark every place that
needs your real information:

- **About** — rewrite the two paragraphs in your own words.
- **Education** — add your college/university name and your schooling details.
- **Skills** — keep this list honest and update it as you actually learn things.
- **Projects** — replace the placeholder once you've built and finished
  something real. A commented-out template block is included for when
  you're ready to add one.
- **Contact** — swap in your real email, GitHub, and LinkedIn links.

## Images

This site intentionally uses **no photographs or illustrations** — the
`assets/logo/` folder is left empty. The only "mark" is the `DT` text badge
in the navbar, built with CSS, not an image file. If you'd like to add a
small logo image later, drop it in `assets/logo/` and reference it from
`.nav-brand-mark` in `index.html`.

## Design notes

- Colors, fonts, and spacing are all defined as CSS variables at the top of
  `style.css` (`:root`) — change them there to re-theme the whole site.
- Layout is a single centered column (max-width ~720px), which keeps line
  lengths readable and avoids a dashboard/card-grid look.
- The blinking cursor in the hero is the only animation on the page —
  everything else is static and calm.
