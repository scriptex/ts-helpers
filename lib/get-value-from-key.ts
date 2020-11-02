import { isDefined } from './is-defined';

export const getValueFromKey = <T>(obj: T, key: string) => {
	if (!isDefined(obj, key)) {
		return undefined;
	}

	const props: string[] = key.split('.');

	return props.reduce((tempObj: T, currKey: string) => {
		return typeof tempObj[currKey] !== 'undefined' ? tempObj[currKey] : undefined;
	}, obj);
};
