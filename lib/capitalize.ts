export const capitalize = ([first, ...rest]: string): string =>
	first.toUpperCase() + rest.map((letter: string) => letter.toLowerCase()).join('');
