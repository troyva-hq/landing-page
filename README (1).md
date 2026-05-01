# Troyva Landing Page — Source Files

## File map

- `index.html` — page shell, font preconnects, links `styles.css` and the script files
- `styles.css` — all design tokens (CSS variables) + global styles, atmospheric plates, liquid glass, button styles, type primitives, animations
- `tweaks-panel.jsx` — reusable Tweaks panel (TweaksPanel + form controls)
- `lib.jsx` — shared hooks: `useDhakaTime`, `useCounter`, reveal helpers (`BlurWords`, `WipeLine`, `TypeMorph`)
- `Hero.jsx` — Block 1 hero with sequenced reveal + live ticker
- `ValueProp.jsx` — Block 2 single-line value proposition
- `Pillars.jsx` — Block 3 (Verified ID, TroyShield, Real Campus)
- `Credibility.jsx` — Block 4 live waitlist count
- `Conversion.jsx` — Block 5 email capture + roadmap
- `Footer.jsx` — Block 6 editorial footer
- `App.jsx` — composition + tweak defaults + token application

## Brand tokens (in styles.css `:root`)

```
--base #060608   --surface #18061A   --card #251320
--raised #321A2C --border #4B2138    --ruby #A81830
--gold #C9A84C   --warm-tan #C9A87A  --petal #F7E8E2
```

## Build/run

This is a no-build prototype. Open `index.html` in a static server.
React 18.3.1 + Babel Standalone are loaded from CDN; Babel transpiles each
`<script type="text/babel">` file in the browser at load time.

## For production:
1. Convert JSX files to a real build pipeline (Vite + React) — drop Babel CDN.
2. Move CSS variables to a design-tokens module if you want runtime theming
   beyond the in-page Tweaks panel.
3. Replace the Tweaks panel with feature flags or remove entirely.

## Tweaks panel

Defaults live in `App.jsx` between `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/`.
The panel writes back to that block via `postMessage` when running inside the
prototype host. In production, hard-code the values you want and delete the
panel + protocol code.

## Important conventions

- Each component file ends with `Object.assign(window, { ... })` because
  `<script type="text/babel">` files don't share scope. In a real build,
  replace these with `export` / `import`.
- Style objects must NOT be named `styles` (collides across components in
  this no-build setup). Components use inline styles or uniquely-named objects.
