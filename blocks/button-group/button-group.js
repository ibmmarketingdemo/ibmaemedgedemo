export default function decorate(block) {
  const [quoteWrapper] = block.children;

  if (!quoteWrapper) return;

  const buttongroup = document.createElement('c4d-button-group');

  // Traverse the block's children
  [...block.children].forEach((row) => {
    const [label, href, ctaType] = [...row.children].map((cell) => cell.textContent.trim());

    // Create a <c4d-button-group-item>
    const buttonGroupItem = document.createElement('c4d-button-group-item');
    buttonGroupItem.setAttribute('href', href);
    buttonGroupItem.setAttribute('cta-type', ctaType);
    buttonGroupItem.textContent = label;

    // Append the item to the button group
    buttongroup.append(buttonGroupItem);
  });
  

  // Create and append the script tag
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://1.www.s81c.com/common/carbon-for-ibm-dotcom/version/v2.16.2/button-group.min.js';

  // Append the script tag after the c4d-quote element
  quoteWrapper.appendChild(script);
  quoteWrapper.innerHTML = '';
  quoteWrapper.appendChild(buttongroup);
}
