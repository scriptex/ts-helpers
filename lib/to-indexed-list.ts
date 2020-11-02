import { getValueFromKey } from './get-value-from-key';

export const toIndexedList = <T>(source: T[], indexProp: string): Record<string, T> => {
	return source.reduce((result: Record<string, T>, elem: T) => {
		const prop: any = getValueFromKey(elem, indexProp);

		if (prop) {
			result[prop] = elem;
		}

		return result;
	}, {});
};
