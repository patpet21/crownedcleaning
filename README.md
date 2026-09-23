# Cleaning Crowned

Responsive static website for Cleaning Crowned in New Jersey.

## Pages
- `index.html` — homepage, services, benefits, and calls to action.
- `booking.html` — contact options for requesting a quote; external Formspace link to be added later.
- `about.html` — company information.
- `contact.html` — verified contact methods and location (verify details before launch).
- `thank-you.html` — unused legacy page; no form submission is configured.
- `style.css` — shared responsive design.
- `site.js` — mobile navigation and service preselection.

## Launch checklist (important)
1. Confirm that `(201) 759-8569`, `info@crownedcleaningnj.com`, and West New York are current company contact details. The old site contains a different Gmail address; avoid publishing an inbox the company does not monitor.
2. Netlify is used for **hosting only**. The quote page does not submit a form; replace the temporary contact options with the Formspace link once supplied by the site owner.
3. Confirm the services advertised and actual service ZIP codes with the business owner. Do not add testimonials, insurance/licensing claims, or discounts unless substantiated.
4. Test mobile layout and navigation at 320, 375, 390, 768, and 1280 px, as well as phone/email links on the live staging URL.
5. Replace illustrative externally hosted logo/photography with approved licensed assets and add a privacy notice for contact form submissions.

The previous `booking.js` is legacy code and is no longer loaded by the redesigned pages. Its localStorage approach is **not** a working way to send bookings to the business.

## Development
The site is static HTML, CSS and JavaScript; no build command required. For Netlify publish the repository root directory.
