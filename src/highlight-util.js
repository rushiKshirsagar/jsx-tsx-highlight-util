export const highlightText = (className, textToHighlight, options = {}) => {
  const {
    caseSensitive = false,
    separateWords = false,
    customStyle = {},
  } = options;

  const element = document.querySelector(`.${className}`);
  if (!element || !textToHighlight) {
    return;
  }

  // Reset the element's content to its original text without any <mark> tags
  const originalText =
    element.getAttribute("data-original-text") || element.textContent;
  element.setAttribute("data-original-text", originalText); // Store the original text

  // Create a function to escape special regex characters
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Handle separate word search
  const highlights = separateWords
    ? textToHighlight.split(" ").filter(Boolean)
    : [textToHighlight];

  let updatedText = originalText; // Start with the original text

  highlights.forEach((highlight) => {
    const escapedHighlight = escapeRegex(highlight);
    const regexFlags = caseSensitive ? "g" : "gi";

    // If the highlight word is less than or equal to 3 characters, ensure it's matched as a whole word
    const regex =
      highlight.length > 1
        ? new RegExp(`(${escapedHighlight})`, regexFlags)
        : new RegExp(`\\b(${escapedHighlight})\\b`, regexFlags);

    // Replace matched words with <mark> tags
    updatedText = updatedText.replace(regex, "<mark>$1</mark>");
  });

  // Update the element's content with the highlighted text
  element.innerHTML = updatedText;

  // Apply custom styles to each <mark> element
  const markElements = element.querySelectorAll("mark");
  markElements.forEach((mark) => {
    Object.assign(mark.style, customStyle); // Apply styles to each <mark>
  });
};
