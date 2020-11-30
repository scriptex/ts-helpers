/**
 * Group an array of objects by a property in the objects
 * @param {Array} list Array of objects
 * @param {Function} getKey Function which accepts an object and returns a property from it
 */
export const groupBy = <T, P>(list: T[], getKey: (item: T) => P): Array<Record<string, T[]>> => {
	const map = new Map();

	list.forEach((item: T) => {
		const property: P = getKey(item);
		const collection: T[] = map.get(property);

		if (!collection) {
			map.set(property, [item]);
		} else {
			collection.push(item);
		}
	});

	return Array.from(map).map((entry: [string, T[]]) => ({
		[entry[0]]: entry[1]
	}));
};
