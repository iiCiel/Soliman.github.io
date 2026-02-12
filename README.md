# Soliman Alktaifan — Cybersecurity Portfolio

Personal portfolio website deployed to GitHub Pages via GitHub Actions.

**Live site:** [cybersoliman.com](https://cybersoliman.com)

## Tech Stack

- Vanilla HTML, CSS, JavaScript (no frameworks, no build step)
- GitHub Actions for deployment
- Google Fonts (Inter, JetBrains Mono)

## File Structure

```
.
├── .github/workflows/pages.yml   # GitHub Actions deployment workflow
├── assets/
│   ├── css/style.css              # All styles
│   ├── js/main.js                 # Navigation, scroll animations, etc.
│   ├── icons/favicon.svg          # SVG favicon
│   └── images/og-image.svg        # OpenGraph preview image
├── index.html                     # Main page (single-page scroll)
├── Soliman_Alktaifan_Resume.pdf   # Resume (replace with your actual PDF)
├── CNAME                          # Custom domain config
└── README.md
```

## Run Locally

**Option 1 — Open directly:**

```bash
open index.html
# or on Linux:
xdg-open index.html
```

**Option 2 — Local dev server (recommended for accurate path resolution):**

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## GitHub Pages Deployment

This repo uses **GitHub Actions** (not the legacy branch-based build) to deploy to GitHub Pages.

### How it works

The workflow at `.github/workflows/pages.yml` runs on every push to `main`. It:

1. Checks out the repository
2. Configures GitHub Pages
3. Uploads the entire repo root as a Pages artifact
4. Deploys the artifact to the `github-pages` environment

### Enable Pages in repo settings

1. Go to **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Push to `main` and the workflow will deploy automatically

### Custom Domain

This repo includes a `CNAME` file set to `cybersoliman.com`.

**To set up your custom domain:**

1. Go to **Settings → Pages → Custom domain**
2. Enter your domain (e.g., `cybersoliman.com`)
3. Add DNS records with your domain registrar:
   - For apex domain: Add `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For `www` subdomain: Add a `CNAME` record pointing to `<username>.github.io`
4. Check **Enforce HTTPS** in Pages settings (GitHub provides free TLS certificates)

GitHub supports HTTPS for all Pages sites, including custom domains. After DNS propagation (may take up to 24 hours), your site will be accessible over HTTPS.

### Without a custom domain

If you don't want a custom domain, delete the `CNAME` file. Your site will be available at `https://<username>.github.io/<repo-name>`.

## Resume

Replace `Soliman_Alktaifan_Resume.pdf` with your actual resume PDF. The "Download Resume" button in the hero section links to this file.

## Customization

- **Colors:** Edit CSS custom properties in `:root` at the top of `assets/css/style.css`
- **Content:** Edit `index.html` directly — all sections are clearly labeled with HTML comments
- **Projects:** Add new project cards by duplicating a `.project-card` block in the Projects section
- **Screenshots:** Replace `.screenshot-placeholder` divs with `<img>` tags pointing to your actual screenshots in `assets/images/`
