export function capitalizeFirstLetter(text?: string): string {
  if (!text) return "N/A";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Capitalize the first letter of each word in a string.
 * If the text is undefined, return "N/A".
 */
export function capitalizeFirstLetterOfEachWord(text?: string): string {
  if (!text) return "N/A";
  return text
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}
