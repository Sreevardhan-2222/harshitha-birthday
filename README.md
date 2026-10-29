# For Harshitha — a birthday keepsake

React + Vite + TypeScript. Four photographs, three chapters, one letter.

```bash
npm install
npm run dev      # local development
npm run build    # production build into dist/
npm run preview  # serve the production build
```

- All text lives in `src/data/stories.ts` — edit it there.
- Photos live in `public/images/` (originals kept in `originals/`, git-ignored).
- Uses hash routing and a relative base, so `dist/` works on GitHub Pages as-is.

**About the keypad:** it is only a visual gate. The code ships in the JavaScript
bundle and anyone can read it. If real privacy is needed, put the site behind
server-side access control instead.
