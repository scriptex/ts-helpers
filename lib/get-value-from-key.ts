import { isDefined } from './is-defined';

export const getValueFromKey = <T>(obj: T, key: string): void | unknown[] => {
	if (!isDefined(obj, key)) {
		return undefined;
	}

	const props: string[] = key.split('.');

	return props.reduce(
		(result: any, prop: string) => (typeof result[prop] !== 'undefined' ? result[prop] : undefined),
		obj
	);
};
