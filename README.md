# Middle TN Auto Repair website

The website for Middle TN Auto Repair LLC: father-and-son mobile mechanics serving Spring Hill, Thompson's Station, Columbia and Franklin, TN.

It's a plain static site (HTML and CSS, no build step), so it can be hosted on GitHub Pages or any static host.

## Files
- `index.html` – the page
- `styles.css` – all styling. Brand colors come from the logo: blue `#2E6DA1`, steel gray `#7B7C7C`.
- `assets/logo.*` – the logo with a transparent background
- `assets/photos/` – job photos (checked for plates, house numbers, street signs and other people's faces)
- `assets/fonts/` – Barlow and Barlow Condensed, self-hosted (SIL Open Font License, see `OFL.txt`)
- `404.html`, `robots.txt`, `sitemap.xml`

## Content rules
- No prices anywhere on the site (Ed's rule: every car is different).
- No customer names, addresses, plates, VINs or message text.
- Contact is by text: 931-674-1516. By appointment only.

## Going live (later)
1. Settings → Pages → deploy from the `main` branch, root folder.
2. Add a `CNAME` file containing `middletnautorepair.com`.
3. Point the domain's DNS at GitHub Pages, then turn on "Enforce HTTPS".
