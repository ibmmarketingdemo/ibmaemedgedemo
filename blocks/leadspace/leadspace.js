export default function decorate(block) {
  const [leadspaceWrapper] = block.children;

  if (!leadspaceWrapper) return;

  // Create the <c4d-leadspace> element
  const leadspace = document.createElement('c4d-leadspace');
  leadspace.setAttribute('alt', 'alt text');
  leadspace.setAttribute('default-src', 'www.example.com');

  // Extract the content from the block
  const rows = [...leadspaceWrapper.children];

  // Process the title and copy
  const headingRow = rows[0];
  const copyRow = rows[1];
  if (headingRow) {
    const headingText = headingRow.querySelector('p')?.textContent.trim();
    const heading = document.createElement('c4d-leadspace-heading');
    heading.textContent = headingText || 'LeadSpace title';
    leadspace.append(heading);
  }
  if (copyRow) {
    const copyText = copyRow.querySelector('p')?.textContent.trim();
    if (copyText) {
      leadspace.append(copyText);
    }
  }

  // Process the image row
  /* const imageRow = rows[2];
  if (imageRow) {
    const picture = imageRow.querySelector('picture');
    if (picture) {
      const bgMedia = document.createElement('c4d-background-media');
      bgMedia.setAttribute('slot', 'image');
      bgMedia.setAttribute('opacity', '100');
      bgMedia.setAttribute('alt', 'alt text');
      bgMedia.setAttribute('default-src', picture.querySelector('img')?.src || 'https://picsum.photos/id/1076/1056/480');

      // Add image items
      const sources = picture.querySelectorAll('source');
      sources.forEach((source) => {
        const imageItem = document.createElement('c4d-image-item');
        const media = source.getAttribute('media');
        const srcset = source.getAttribute('srcset');
        if (media) imageItem.setAttribute('media', media);
        if (srcset) imageItem.setAttribute('srcset', srcset);
        bgMedia.append(imageItem);
      });

      leadspace.append(bgMedia);
    }
  } */

  // Process the button rows
  const buttonGroup = document.createElement('c4d-button-group');
  buttonGroup.setAttribute('slot', 'action');
  rows.slice(3).forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 3) {
      const label = cells[0]?.querySelector('p')?.textContent.trim();
      const href = cells[1]?.querySelector('p')?.textContent.trim();
      const buttonGroupItem = document.createElement('c4d-button-group-item');
      buttonGroupItem.setAttribute('href', href || 'www.example.com');
      buttonGroupItem.textContent = label || 'Button';

      // Append an example SVG icon (replace with actual SVG if needed)
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '16');
      rect.setAttribute('height', '16');
      rect.setAttribute('fill', 'currentColor');
      svg.append(rect);

      buttonGroupItem.append(svg);
      buttonGroup.append(buttonGroupItem);
    }
  });

  leadspace.append(buttonGroup);

  // Clear the block and append the <c4d-leadspace>
  leadspaceWrapper.innerHTML = '';
  leadspaceWrapper.append(leadspace);
}

