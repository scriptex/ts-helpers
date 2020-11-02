export const isDefined = <T>(obj: T, key: string): boolean => {
	const props: string[] = key.split('.');

	if (!obj) {
		return false;
	}

	let item: T = obj;

	for (const prop of props) {
		item = item[prop];

		if (typeof item === 'undefined') {
			return false;
		}
	}

	return true;
};
