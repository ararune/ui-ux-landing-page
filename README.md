## my-project

A simple, responsive marketing / landing site built with React, TypeScript, Vite and Tailwind CSS.

What you'll find in this repo:

- A Vite + React + TypeScript app (fast dev server and builds)
- Tailwind CSS for styling
- Reusable UI components in `src/components` (Header, Hero, AboutUs, Gallery, Contact, Footer, ImageModal, SocialIcons)
- Static assets in `src/assets`

This project is intended as a small starter for a portfolio or product landing page and includes an image gallery with a modal, contact section, and social links.

### Prerequisites

- Node.js
- npm (or you can use pnpm / yarn if you prefer — update commands accordingly)

### Quick start

Open a terminal at the project root and run:

```powershell
npm install
npm run dev
```

- The dev server runs on http://localhost:5173 by default (Vite). Open that URL in your browser.

### Project structure (important files)

- `index.html` — app entry
- `src/main.tsx` — React entry
- `src/App.tsx` — top-level app component
- `src/components/` — UI components (Header, Hero, AboutUs, Gallery, Contact, Footer, ImageModal, SocialIcons)
- `src/assets/` — static images and media
- `vite.config.ts` — Vite configuration
- `tsconfig.*.json` — TypeScript configuration

### Notes and tips

- Tailwind is already configured; edit `tailwind.config.js` and `src/index.css` to customize styles.
- The contact section is a static UI by default. Wire it to a backend or form service if you need submissions.
- If you add new TypeScript config changes that affect type-checking, the `build` script runs `tsc -b` before `vite build`.

### Contributing

Small changes are welcome: open a PR, keep changes focused, and run `npm run lint` before committing.

### License

See the repository license or add one if needed.

