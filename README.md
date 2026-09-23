# Crowned Cleaning Services NJ

Responsive static website for Crowned Cleaning Services in New Jersey.

## Pages
- `index.html` — homepage, services, benefits, and calls to action.
- `booking.html` — **quote request**, not instant booking.
- `about.html` — company information.
- `contact.html` — verified contact methods and location (verify details before launch).
- `thank-you.html` — destination after a supported form submission.
- `style.css` — shared responsive design.
- `site.js` — mobile navigation and service preselection.

## Launch checklist (important)
1. Confirm that `(201) 759-8569`, `info@crownedcleaningnj.com`, and West New York are current company contact details. The old site contains a different Gmail address; avoid publishing an inbox the company does not monitor.
2. The quote form uses **Netlify Forms** (`data-netlify="true"`). It only accepts submissions on a supported Netlify deployment with form detection enabled. Redeploy the site, submit a test entry through the deployed form, verify it is present in Netlify Forms, and configure email notifications to the company's monitored inbox. The form does not reserve appointment times; respond to requests manually.
3. If publishing on a provider other than Netlify, connect the form to a supported submission backend **before launch**; plain GitHub Pages does not process Netlify Forms.
4. Confirm the services advertised and actual service ZIP codes with the business owner. Do not add testimonials, insurance/licensing claims, or discounts unless substantiated.
5. Test mobile layout and navigation at 320, 375, 390, 768, and 1280 px, as well as phone/email links and the quote form on the live staging URL.
6. Replace illustrative externally hosted logo/photography with approved licensed assets and add a privacy notice for contact form submissions.

The previous `booking.js` is legacy code and is no longer loaded by the redesigned pages. Its localStorage approach is **not** a working way to send bookings to the business.

## Development
The site is static HTML, CSS and JavaScript; no build command required. For Netlify publish the repository root directory.
