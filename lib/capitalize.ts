/**
 * Capitalize a string by uppercasing
 * the first letter and lowercasing the rest
 * @param {String} string The string to capitalize
 */
export const capitalize = ([first, ...rest]: string): string =>
	first.toUpperCase() + rest.map((letter: string) => letter.toLowerCase()).join('');
