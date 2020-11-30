/**
 * Check if a key in an object is defined
 * @param {Object} obj The object to search in
 * @param {String} key The key to search form
 */
export const isDefined = <T extends Record<string, any>>(obj: T, key: string): boolean => {
	const props: string[] = key.split('.');

	if (!obj) {
		return false;
	}

	let item: T = obj;

	for (const prop of props) {
		item = item[prop];

		if (typeof item === 'undefined') {
			return false;
		}
	}

	return true;
};
