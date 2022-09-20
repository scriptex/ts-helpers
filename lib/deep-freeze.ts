/**
 * Recursively freeze an object effectively disallowing
 * changing/adding/editing of its properties.
 * @param {Record<string, unknown>} obj The object to deep freeze
 */
export const deepFreeze = <T extends Record<string, unknown>>(obj: T): T => {
	const propNames: string[] = Object.getOwnPropertyNames(obj);

	for (const name of propNames) {
		const value = obj[name] as T;

		if (value && typeof value === 'object') {
			deepFreeze(value);
		}
	}

	return Object.freeze(obj);
};
