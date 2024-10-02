// HighlightSearch.js

/**
 * Function to recursively highlight text in text nodes without modifying element structure
 * @param {Node} element - The DOM element to highlight text within
 * @param {string} searchText - The text to search for and highlight
 * @param {boolean} highlightAsSingleString - If true, highlight as a single string; if false, highlight each word separately
 * @param {Object} highlightStyle - Custom style object to apply to highlighted text
 */
function highlightTextNode(
  element,
  searchText,
  highlightAsSingleString,
  highlightStyle
) {
  const regexPattern = highlightAsSingleString
    ? new RegExp(searchText, "gi")
    : new RegExp(
        searchText
          .split(/\s+/)
          .map((word) => `(${word})`)
          .join("|"),
        "gi"
      );

  element.childNodes.forEach((node) => {
    if (node.nodeType === 3) {
      // Text node
      const originalText = node.nodeValue;
      const highlightedText = originalText.replace(regexPattern, (match) => {
        const span = document.createElement("span");
        span.textContent = match;

        // Apply custom styles, if provided
        if (highlightStyle) {
          Object.assign(span.style, highlightStyle);
        } else {
          span.className = "highlight"; // Fallback to default highlight class if no custom styles
        }
        return span.outerHTML;
      });
      const newElement = document.createElement("span");
      newElement.innerHTML = highlightedText;
      node.replaceWith(newElement);
    } else if (node.nodeType === 1) {
      // Element node
      highlightTextNode(
        node,
        searchText,
        highlightAsSingleString,
        highlightStyle
      ); // Recursively search within child elements
    }
  });
}

/**
 * Function to highlight text based on user input in a search bar
 * @param {string} searchText - The text entered in the search bar
 * @param {string} className - The class name where text should be highlighted
 * @param {boolean} highlightAsSingleString - If true, highlight as a single string; if false, highlight each word separately
 * @param {Object} highlightStyle - Custom style object to apply to highlighted text
 */
function highlightText(
  searchText,
  className,
  highlightAsSingleString = true,
  highlightStyle = null
) {
  if (!searchText) {
    removeHighlight(className); // Clear highlights if search text is empty
    return;
  }

  const elements = document.getElementsByClassName(className);

  Array.from(elements).forEach((element) => {
    removeHighlightFromElement(element); // Remove any previous highlights before applying new ones
    highlightTextNode(
      element,
      searchText,
      highlightAsSingleString,
      highlightStyle
    );
  });
}

/**
 * Function to remove existing highlights from a specific element
 * @param {HTMLElement} element - The element to remove highlights from
 */
function removeHighlightFromElement(element) {
  const highlightSpans = element.querySelectorAll(".highlight");
  highlightSpans.forEach((span) => {
    const parent = span.parentNode;
    parent.replaceChild(document.createTextNode(span.innerText), span);
    parent.normalize(); // Combine adjacent text nodes
  });
}

/**
 * Function to remove all highlights from elements with a specific className
 * @param {string} className - The class name where text should be un-highlighted
 */
function removeHighlight(className) {
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach(removeHighlightFromElement);
}

export { highlightText, removeHighlight };
