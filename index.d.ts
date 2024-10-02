declare module "jsx-tsx-highlight-util" {
  /**
   * Highlights text within elements with the specified class name.
   * @param {string} searchText - The text to search for and highlight
   * @param {string} className - The class name where text should be highlighted
   * @param {boolean} highlightAsSingleString - If true, highlight as a single string; if false, highlight each word separately
   * @param {Object} highlightStyle - Optional style object to apply to the highlighted text
   */
  export function highlightText(
    searchText: string,
    className: string,
    highlightAsSingleString?: boolean,
    highlightStyle?: Record<string, string | number>
  ): void;

  /**
   * Removes all highlights from elements with the specified class name.
   * @param {string} className - The class name where text should be un-highlighted
   */
  export function removeHighlight(className: string): void;
}
