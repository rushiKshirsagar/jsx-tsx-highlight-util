export const highlightText = (className, textToHighlight, options = {}) => {
  const { caseSensitive = false, separateWords = false } = options;

  const element = document.querySelector(`.${className}`);
  if (!element || !textToHighlight) {
    return;
  }

  const text = element.innerHTML;

  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlights = separateWords
    ? textToHighlight.split(" ").filter(Boolean)
    : [textToHighlight];

  let updatedText = text;

  highlights.forEach((highlight) => {
    const escapedHighlight = escapeRegex(highlight);
    const regexFlags = caseSensitive ? "g" : "gi";
    const regex = new RegExp(`(${escapedHighlight})`, regexFlags);
    updatedText = updatedText.replace(regex, "<mark>$1</mark>");
  });

  element.innerHTML = updatedText;
};
