# Alexander Takzhanov Resume Site

Static GitHub Pages resume site for Alexander Takzhanov, System Analyst.

## Structure

- `index.html` - redirects to the main profile page.
- `me/index.html` - public resume landing page with RU/EN language switch.
- `me/assets/css/portfolio.css` - visual design.
- `me/assets/js/portfolio.js` - RU/EN copy and language switching.
- `me/cv/alexander-takzhanov-cv-ru.html` - printable Russian CV.
- `me/cv/alexander-takzhanov-cv-en.html` - printable English CV.
- `cv/` - LaTeX CV sources kept for future PDF generation.

## Local Preview

Open `me/index.html` directly in a browser, or run a static server from the
repository root:

```bash
python -m http.server 8787
```

Then open:

```text
http://localhost:8787/me/
```

## GitHub Pages

For a personal GitHub Pages site, publish this repository as:

```text
<github-username>.github.io
```

Then enable Pages in `Settings -> Pages` with:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

The site will be available at:

```text
https://<github-username>.github.io/
```
