/**
 * Function to remove existing highlights from a specific element
 * @param {HTMLElement} element - The element to remove highlights from
 */
function removeHighlightFromElement(element) {
  const highlightSpans = element.querySelectorAll("span.highlight");
  highlightSpans.forEach((span) => {
    const parent = span.parentNode;
    parent.replaceChild(document.createTextNode(span.textContent), span);
  });

  element.normalize(); // Normalize text nodes after removal
}

export { removeHighlightFromElement };
