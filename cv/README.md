# CV sources

One-page A4 CV in Russian and English, written as HTML and printed to PDF
with headless Chrome.

## Structure

- `html/style.css` - shared layout and typography for both versions.
- `html/ru.html` - Russian CV content.
- `html/en.html` - English CV content.

## Build

Run from the repository root (needs Google Chrome and, for the intended look,
the Inter font):

```bash
make cv
```

Output PDFs for GitHub Pages:

- `me/cv/aleksandr-takzhanov-cv-ru.pdf`
- `me/cv/aleksandr-takzhanov-cv-en.pdf`

Use `make cv CHROME=chromium` if Chrome is installed under another name.

## Editing workflow

1. Change layout or typography in `html/style.css`.
2. Change text in `html/ru.html` or `html/en.html`; keep both versions in sync.
3. Open the HTML file in a browser to preview, then rebuild with `make cv`.
4. Check that each PDF is still one page.
