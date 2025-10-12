/**
 * Converts a string from camelCase, PascalCase, snake_case, or space-separated formats to kebab-case.
 * Throws TypeError if input is not a string.
 * Removes extra delimiters or spaces.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Normalize: trim and replace multiple spaces/underscores/hyphens with single space
    let normalized = str.trim()
        .replace(/[_\-]+/g, ' ')
        .replace(/\s+/g, ' ');

    // Insert space before capital letters (for camelCase/PascalCase)
    normalized = normalized.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Lowercase, split by space, filter empty, join with hyphen
    return normalized
        .toLowerCase()
        .split(' ')
        .filter(Boolean)
        .join('-');
}

// Example usage:
// console.log(toKebabCase('camelCaseString')); // "camel-case-string"
// console.log(toKebabCase('PascalCaseString')); // "pascal-case-string"
// console.log(toKebabCase('snake_case_string')); // "snake-case-string"
// console.log(toKebabCase('space separated string')); // "space-separated-string"
// console.log(toKebabCase('  multiple   delimiters__and--spaces  ')); // "multiple-delimiters-and-spaces"