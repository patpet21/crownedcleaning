document.addEventListener('DOMContentLoaded',()=>{const btn=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(btn&&nav){btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{btn.setAttribute('aria-expanded','false');nav.classList.remove('open')}))}const selected=new URLSearchParams(location.search).get('service');const select=document.querySelector('#service-type');if(select&&selected&&[...select.options].some(o=>o.value===selected)){select.value=selected}});

// Keep the visitor on our site and redirect only after Formspree confirms success.
// If JavaScript is disabled, the form retains its native Formspree POST behavior.
const quoteForm = document.getElementById('cleaning-quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const status = quoteForm.querySelector('.form-status');
    if (!submitButton || !status || submitButton.disabled) return;
    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending your request…';
    status.hidden = true;
    status.textContent = '';
    try {
      const response = await fetch(quoteForm.action, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Formspree did not confirm the submission');
      }
      window.location.assign('thank-you.html');
    } catch (error) {
      status.textContent = 'We could not confirm your request. Please try again or call (201) 759-8569.';
      status.hidden = false;
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
}
