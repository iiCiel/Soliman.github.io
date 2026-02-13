# Soliman Alktaifan - Cybersecurity Portfolio

A production-ready static portfolio website built with vanilla HTML/CSS/JS and deployed via **GitHub Pages + GitHub Actions**.

## File tree

```text
.
|- .github/
|  |- workflows/
|     |- pages.yml
|- assets/
|  |- css/
|  |  |- styles.css
|  |- icons/
|  |  |- favicon.svg
|  |  |- shield.svg
|  |  |- terminal.svg
|  |- images/
|  |  |- og-placeholder.svg
|  |- js/
|     |- main.js
|- CNAME
|- Soliman_Alktaifan_Resume.pdf
|- index.html
|- README.md
```

## Run locally

Because this is a static site, either approach works:

- Open `index.html` directly in your browser.
- Or serve it with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages (Actions)

This repository uses `.github/workflows/pages.yml` with official GitHub Pages actions:

- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

## Enable Pages in repository settings

1. Push this repository to GitHub.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to the `main` branch to trigger deployment.

## How deployment works

On push to `main`, the workflow:

- Checks out the repository.
- Configures GitHub Pages.
- Uploads static files as the Pages artifact.
- Deploys the artifact to the `github-pages` environment.

No build step is required because the site is pure static files.

## Custom domain + HTTPS

This repository includes a `CNAME` file for custom domain configuration.

To use your own domain:

1. Update `CNAME` with your domain.
2. Configure DNS records according to GitHub Pages docs.
3. In `Settings -> Pages`, enable `Enforce HTTPS`.

GitHub Pages supports HTTPS for custom domains once DNS and certificate provisioning are complete.

## Maintenance notes

- Edit content in `index.html`.
- Edit design in `assets/css/styles.css`.
- Edit behavior in `assets/js/main.js`.
- Replace `Soliman_Alktaifan_Resume.pdf` with your latest resume.
- Replace placeholder Open Graph image and featured-work placeholders with real assets over time.
