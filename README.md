# Cleaning Crowned

Responsive static website for Cleaning Crowned in New Jersey.

## Pages
- `index.html` — homepage, services, benefits, and calls to action.
- `booking.html` — responsive quote request form that posts to the business's Formspree endpoint.
- `about.html` — company information.
- `contact.html` — verified contact methods and location (verify details before launch).
- `thank-you.html` — branded success page; the browser redirects here only after a successful AJAX response from Formspree (JavaScript is required for this custom redirect).
- `style.css` — shared responsive design.
- `site.js` — mobile navigation, service preselection and Formspree success/error handling.

## Launch checklist (important)
1. Confirm that `(201) 759-8569`, `info@crownedcleaningnj.com`, and West New York are current company contact details. The old site contains a different Gmail address; avoid publishing an inbox the company does not monitor.
2. Netlify is used for **hosting only**. The quote form uses the supplied Formspree endpoint (`https://formspree.io/f/xbglyayz`). Its JavaScript submission waits for a successful Formspree response before redirecting to `thank-you.html`; errors display a retry message without losing the entered fields. With JavaScript disabled, standard Formspree confirmation appears. Confirm the form is active in Formspree and its notification email is set to the business's monitored inbox. Submit a real test request on the published site and confirm receipt; repository review alone does not validate delivery. The form is an estimate request, not an appointment booking.
3. Confirm the services advertised and actual service ZIP codes with the business owner. Do not add testimonials, insurance/licensing claims, or discounts unless substantiated.
4. Test mobile layout and navigation at 320, 375, 390, 768, and 1280 px, as well as phone/email links, service preselection, and the Formspree submission on the live site.
5. Replace illustrative externally hosted logo/photography with approved licensed assets and add a privacy notice for contact form submissions.

The previous `booking.js` is legacy code and is no longer loaded by the redesigned pages. Its localStorage approach is **not** a working way to send bookings to the business.

## Development
The site is static HTML, CSS and JavaScript; no build command required. For Netlify publish the repository root directory.
