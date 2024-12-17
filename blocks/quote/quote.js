export default function decorate(block) {
  const [quoteWrapper] = block.children;

  if (!quoteWrapper) return;

  const blockquote = document.createElement('c4d-quote');
  blockquote.setAttribute('inverse', '');
  blockquote.setAttribute('mark-type', 'double-curved');
  blockquote.textContent = (quoteWrapper.textContent || '').trim();
  // Create and append the script tag
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://1.www.s81c.com/common/carbon-for-ibm-dotcom/version/v2.16.1/quote.min.js';

  // Append the script tag after the c4d-quote element
  quoteWrapper.appendChild(script);
  quoteWrapper.innerHTML = '';
  quoteWrapper.appendChild(blockquote);
}
