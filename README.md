# Running Towards You — V7 (readable edition)

Static HTML, CSS and vanilla JavaScript. No build step, npm install, or framework.

## What's changed

- Documentary poster replaced with the supplied Running Towards You / Refuge image, hosted locally at `assets/documentary-poster.webp`.
- Mobile player now uses a 16:9 poster, smaller circular play button, and no overlay text rectangles. Video still loads only after a click.
- Participating clubs section added immediately below the film, with **10 Instagram links** (SiFe intentionally omitted).
- Gallery item **16** replaced with the supplied portrait `assets/rtyou11-4508.webp`.
- `styles.css` reformatted for human readability and documented; `script.js` expanded into commented, editable sections.
- Git metadata excluded so this package can be copied into an existing repository safely.

## Important gallery note

The request did not identify which of the gallery's 20 photos was duplicated. Item **16** was selected as the replacement slot. If the duplicate is elsewhere, move the new image source and its caption to the correct gallery item in `index.html`.

## How to update your existing VS Code project

1. Open your existing local Git repository and run `git status`.
2. If clean, run `git pull --ff-only origin main` to obtain your latest GitHub edits.
3. Unzip this package separately. Copy its site files (`index.html`, `styles.css`, `script.js`, `legal.html`, assets, etc.) into your existing repository. **Do not replace the `.git` folder.**
4. Preview locally (VS Code Live Server or `python3 -m http.server 8000`).
5. Review the changes with `git diff` and `git status`.
6. Commit and push after testing: `git add . && git commit -m "Refine documentary, community and gallery" && git push origin main`.

## Editing guide

- **Running clubs:** Find `running-community` in `index.html`.
- **Poster image:** Find `documentary-poster.webp` in `index.html`.
- **Video URL:** Find `youtube-nocookie.com` in `script.js`.
- **Gallery:** Find `gallery-grid` in `index.html`.
- **Colours:** Edit CSS variables at the start of `styles.css`.
- **Mobile player:** Edit the `DOCUMENTARY PLAYER` section near the end of `styles.css`.

## Production checks

Test phone and desktop layout, keyboard navigation, gallery lightbox, YouTube playback, SoundCloud playback, and all Instagram links. The legal page may require additional publisher details under applicable law. The email button is basic obfuscation, not robust anti-scraping protection. Security headers/CSP should be tested against all media embeds before deploying.
