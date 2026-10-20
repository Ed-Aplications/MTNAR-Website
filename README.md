# Middle TN Auto Repair website

The website for Middle TN Auto Repair LLC: father-and-son mobile mechanics serving Spring Hill, Thompson's Station, Columbia and Franklin, TN.

It's a plain static site (HTML and CSS, no build step), so it can be hosted on GitHub Pages or any static host.

## Files
- `index.html` – the home page
- `brake-repair/`, `starter-alternator-battery/`, `spark-plugs-check-engine/`, `cooling-suspension/` – service pages
- `review/` – short link that forwards to the Google review form (send customers `middletnautorepair.com/review`)
- `mtnar.vcf` – contact card behind the "Save our number" links
- `assets/site.js` – source tags on text links and the estimate text builder (nothing is stored or sent)
- `styles.css` – all styling. Brand colors come from the logo: blue `#2E6DA1`, steel gray `#7B7C7C`.
- `assets/logo.*` – the logo with a transparent background
- `assets/photos/` – job photos (checked for plates, house numbers, street signs and other people's faces)
- `assets/fonts/` – Barlow and Barlow Condensed, self-hosted (SIL Open Font License, see `OFL.txt`)
- `404.html`, `robots.txt`, `sitemap.xml`

## Content rules
- No prices anywhere on the site (Ed's rule: every car is different).
- No customer names, addresses, plates, VINs or message text.
- Contact is by text: 931-674-1516. By appointment only. All work is weather permitting.
- We work on hybrids and diesels but don't promote them on the site.

## Tracking where texts come from
Every text link ends with "(from website)". Add `?from=` to a link you share and the tag names the source:
- `?from=google` (Google Business Profile website link) → "(from website: Google)"
- `?from=fb` (Facebook Page website link) → "(from website: Facebook)"
- `?from=group` (links posted in Facebook groups) → "(from website: Facebook group)"
- `?from=card` (business cards, magnets, QR codes) → "(from website: business card)"
The tag lasts for that visit, across pages.

## Going live (later)
1. Settings → Pages → deploy from the `main` branch, root folder.
2. Add a `CNAME` file containing `middletnautorepair.com`.
3. Point the domain's DNS at GitHub Pages, then turn on "Enforce HTTPS".
