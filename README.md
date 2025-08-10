# Consultancy Services Website — Final Package

This package contains a polished multi-page website for *Consultancy Services — Dr. Pradip Srivastava*.
It includes dark/light mode, animated icons, accessibility improvements, a privacy page, and a contact form placeholder.

## What's included
- `index.html`, `thematic-areas.html`, `research.html`, `training-policy.html`, `charges.html`, `contact.html`, `privacy.html`
- `style.css` (minified)
- `main.js` (minified)
- `CNAME` (placeholder: www.yourdomain.com)
- `README.md` (this file)

## Activate the contact form (Formspree)
1. Go to https://formspree.io/ and sign up for a free account.
2. Create a new form and set the destination email to **banarassrd.consultany@gmail.com**.
3. Formspree will provide a form endpoint like `https://formspree.io/f/your-form-id`.
4. Open `contact.html` and replace the form `action` attribute value with your provided Formspree URL.
   Example: `<form action="https://formspree.io/f/xyz123" method="POST">`
5. The first time someone submits the form, Formspree will send a verification/confirmation email to the target address. Approve it to start receiving messages.

> Note: For GDPR/privacy sensitive deployments, consider enabling Formspree's data encryption or using a server-side endpoint you control.

## GitHub Pages — Quick Deploy Guide
1. Create a GitHub repository (public) named e.g. `consultancy-website`.
2. Upload all files from this ZIP (you can drag-and-drop on GitHub web UI).
3. In the repo, go to **Settings → Pages** (or **Settings → Code and automation → Pages** in some UIs).
4. Under **Build and deployment** choose **Deploy from a branch**, select `main` (or `master`) branch and `/ (root)` folder. Save.
5. GitHub Pages will provide a site URL: `https://<your-username>.github.io/<repo-name>/`.
6. To use a custom domain:
   - Add a file named `CNAME` at the repo root (already included with `www.yourdomain.com` placeholder).
   - In your domain registrar, create a DNS `A` record pointing to GitHub Pages IPs and a `CNAME` pointing `www` to `your-username.github.io`.
   - GitHub Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Netlify (alternative)
1. Sign up at https://app.netlify.com/ and choose **New site from Git**.
2. Connect your GitHub repo and follow the deploy steps — Netlify handles HTTPS automatically.
3. For custom domains, use Netlify's domain panel and add your domain; then update registrar DNS as directed.

## Accessibility & Privacy Notes
- Skip link is provided for keyboard users.
- Focus outlines are enabled for keyboard navigation.
- Color contrasts use high-contrast accents for readability in dark mode.
- No analytics are enabled by default — add them deliberately and update the privacy page.

## Need help?
If you'd like, I can also:
- Walk you through every GitHub upload step with exact clicks and screenshots.
- Set up the Formspree form for you (I cannot confirm/send emails on your behalf from this environment; you'll need to confirm Formspree's verification email).
- Configure a custom domain once you purchase it and update DNS records.