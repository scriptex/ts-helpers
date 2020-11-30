/**
 * Recursively freeze an object effectively disallowing
 * changing/adding/editing of its properties.
 * @param {Object | any} obj The object to deep freeze
 */
export const deepFreeze = <T extends Record<string, any>>(obj: T): T => {
	const propNames: string[] = Object.getOwnPropertyNames(obj);

	for (const name of propNames) {
		const value = obj[name];

		if (value && typeof value === 'object') {
			deepFreeze(value);
		}
	}

	return Object.freeze(obj);
};
