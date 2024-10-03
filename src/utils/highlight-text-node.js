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

      // Only apply highlight if there is a match
      if (regexPattern.test(originalText)) {
        const highlightedText = originalText.replace(regexPattern, (match) => {
          const span = document.createElement("span");
          span.textContent = match;
          span.className = "highlight";
          // Default style
          span.style = "background:yellow; color:black";

          // Apply custom styles, if provided
          if (highlightStyle) {
            span.style = "";
            Object.assign(span.style, highlightStyle);
          }
          return span.outerHTML;
        });

        const newElement = document.createElement("span");
        newElement.innerHTML = highlightedText;

        node.replaceWith(...newElement.childNodes); // Replace with new nodes, not wrapped span
      }
    } else if (node.nodeType === 1 && node.tagName !== "SPAN") {
      // Skip any nodes that are already <span>
      highlightTextNode(
        node,
        searchText,
        highlightAsSingleString,
        highlightStyle
      ); // Recursively search within child elements
    }
  });
}

export { highlightTextNode };
