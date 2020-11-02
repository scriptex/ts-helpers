import { getValueFromKey } from './get-value-from-key';

export const toIndexedList = <T>(source: T[], indexProp = 'id'): Record<string, T> => {
	return source.reduce((acc: Record<string, T>, elem: T) => {
		const prop = getValueFromKey(elem, indexProp);

		if (prop) {
			acc[prop] = elem;
		}

		return acc;
	}, {});
};
