import { getValueFromKey } from './get-value-from-key';

/**
 * Convert an array to object using a specified key
 * @param {Object} source Source array which contains objects
 * @param {string} key Key of the objects in the source array
 */
export const toIndexedList = <T extends Record<string, unknown>>(source: T[], key: string): Record<string, T> => {
	return source.reduce((result: Record<string, T>, elem: T) => {
		const prop: any = getValueFromKey(elem, key);

		if (prop) {
			result[prop] = elem;
		}

		return result;
	}, {});
};
