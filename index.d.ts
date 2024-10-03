declare module "jsx-tsx-highlight-util" {
  /**
   * Highlights text within elements with the specified class name.
   * @param {Object} options - The options object to configure highlighting.
   * @param {string} options.searchText - The text to search for and highlight.
   * @param {string} options.element - The class name or element where text should be highlighted.
   * @param {boolean} [options.highlightAsSingleString=true] - If true, highlight as a single string; if false, highlight each word separately.
   * @param {Record<string, string | number>} [options.highlightStyle] - Optional style object to apply to the highlighted text.
   */
  export function highlightText(options: {
    searchText: string;
    element: string;
    highlightAsSingleString?: boolean;
    highlightStyle?: Record<string, string | number>;
  }): void;

  /**
   * Removes all highlights from elements with the specified class name.
   * @param {string} className - The class name where text should be un-highlighted.
   */
  export function removeHighlight(className: string): void;
}
