export default function decorate(block) {
  const [quoteWrapper] = block.children;

  if (!quoteWrapper) return;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = (quoteWrapper.textContent || '').trim();

  quoteWrapper.innerHTML = '';
  quoteWrapper.appendChild(blockquote);
}
