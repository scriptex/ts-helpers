import { isDefined } from './is-defined';

/**
 * Get the value of an object key.
 * Supports deep nesting of object keys.
 * Uses `.` as separator
 * @param {Object} obj The object to search in
 * @param {String} key The key to search for
 */
export const getValueFromKey = <T extends Record<string, unknown>>(obj: T, key: string): void | unknown[] => {
	if (!isDefined(obj, key)) {
		return undefined;
	}

	const props: string[] = key.split('.');

	return props.reduce(
		(result: any, prop: string) => (typeof result[prop] !== 'undefined' ? result[prop] : undefined),
		obj
	);
};
