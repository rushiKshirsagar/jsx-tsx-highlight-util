import { highlightTextNode } from "./utils/highlight-text-node";
import { removeHighlightFromElement } from "./utils/remove-highlight-from-element";

/**
 * Function to highlight text based on user input in a search bar
 * @param {Object} options - Options object to configure highlighting
 * @param {string} options.searchText - The text entered in the search bar
 * @param {string} options.element - The class name or element where text should be highlighted
 * @param {boolean} options.highlightAsSingleString - If true, highlight as a single string; if false, highlight each word separately
 * @param {Object} options.highlightStyle - Custom style object to apply to highlighted text
 */
function highlightText({
  searchText,
  element,
  highlightAsSingleString = true,
  highlightStyle = null,
}) {
  if (!searchText) {
    removeHighlight(element); // Clear highlights if search text is empty
    return;
  }

  const elements = document.getElementsByClassName(element);

  Array.from(elements).forEach((el) => {
    removeHighlightFromElement(el); // Clear old highlights
    highlightTextNode(el, searchText, highlightAsSingleString, highlightStyle); // Apply new highlights
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
