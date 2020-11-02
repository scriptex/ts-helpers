export const deepFreeze = <T>(obj: T): T => {
	const propNames: string[] = Object.getOwnPropertyNames(obj);

	for (const name of propNames) {
		const value = obj[name];

		if (value && typeof value === 'object') {
			deepFreeze(value);
		}
	}

	return Object.freeze(obj);
};
