function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError(`toCamelCase: Expected a string, but received ${typeof input}`);
    }

    // Trim whitespace and replace multiple delimiters with a single space
    const normalized = input
        .trim()
        .replace(/[\s\-_]+/g, ' ');

    if (normalized === '') return '';

    // Split into words, lowercase all, capitalize all except first
    const words = normalized.split(' ').map(word => word.toLowerCase());

    // First word stays lowercase, subsequent words capitalize first letter
    const camelCased = words
        .map((word, idx) =>
            idx === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');

    return camelCased;
}

// Example usage:
// console.log(toCamelCase('hello world')); // 'helloWorld'
// console.log(toCamelCase('FOO-BAR')); // 'fooBar'
// console.log(toCamelCase('AlreadyCamel')); // 'alreadyCamel'
// console.log(toCamelCase('--foo-bar')); // 'fooBar'
// console.log(toCamelCase('')); // ''
// toCamelCase(123); // throws TypeError