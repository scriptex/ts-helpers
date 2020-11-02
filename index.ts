declare const process: any;

export const getBrowserLanguage = (): string | null => {
	const nav: Navigator = window.navigator;
	const browserLanguagePropertyKeys: string[] = [
		'language',
		'browserLanguage',
		'systemLanguage',
		'userLanguage',
	];

	let language: string | null = null;

	if (Array.isArray(nav.languages)) {
		for (const languages of nav.languages) {
			language = languages;

			if (language && language.length) {
				break;
			}
		}
	}

	if (!language) {
		for (const langProps of browserLanguagePropertyKeys) {
			language = nav[langProps];

			if (language && language.length) {
				return language;
			}
		}
	}

	return language;
};

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

export const getValueFromKey = <T>(obj: T, key: string) => {
	if (!isDefined(obj, key)) {
		return undefined;
	}

	const props: string[] = key.split('.');

	return props.reduce((tempObj: T, currKey: string) => {
		return typeof tempObj[currKey] !== 'undefined'
			? tempObj[currKey]
			: undefined;
	}, obj);
};

export const toIndexedList = <T>(
	source: T[],
	indexProp = 'id'
): Record<string, T> => {
	return source.reduce((acc: Record<string, T>, elem: T) => {
		const prop = getValueFromKey(elem, indexProp);

		if (prop) {
			acc[prop] = elem;
		}

		return acc;
	}, {});
};

export const debug: Record<string, (...args: unknown[]) => void> = ((
	condition: boolean
) =>
	Object.keys(console).reduce(
		(
			result: Record<string, (...args: unknown[]) => void>,
			method: string
		) => {
			result[method] = condition ? () => undefined : console[method];

			return result;
		},
		{}
		// TODO: Implement your own condition
	))(process.env.BRANCH === 'master');

export const toJSON = <T>(dataAsString: string): T | void => {
	try {
		return JSON.parse(dataAsString);
	} catch (err) {
		return;
	}
};

export const capitalize = ([first, ...rest]: string): string =>
	first.toUpperCase() +
	rest.map((letter: string) => letter.toLowerCase()).join('');

export const validateURL = (url: string): boolean => {
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
};

/**
 * Group an array of objects by a property in the objects
 * @param list Array of objects
 * @param getKey Function which accepts an object and returns a property from it
 */
export const groupBy = <T, P>(
	list: T[],
	getKey: (item: T) => P
): Array<Record<string, T[]>> => {
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
		[entry[0]]: entry[1],
	}));
};

const deepFreeze = <T>(obj: T): T => {
	const propNames: string[] = Object.getOwnPropertyNames(obj);

	for (const name of propNames) {
		const value = obj[name];

		if (value && typeof value === 'object') {
			deepFreeze(value);
		}
	}

	return Object.freeze(obj);
};

const retryFetch = async (
	url: string,
	options: RequestInit = {},
	retryCount: number = 2
): Promise<Response> => {
	try {
		return await fetch(url, options);
	} catch (error: unknown) {
		if (retryCount <= 1) {
			throw error;
		}

		return await retryFetch(url, options, retryCount - 1);
	}
};

const retry = <T>(
	func: (...args: unknown[]) => T,
	condition: boolean,
	error: Error | string,
	retryCount: number = 2
): T => {
	if (condition) {
		return func();
	}

	if (retryCount <= 1) {
		throw error;
	}

	return retry(func, condition, error, retryCount - 1);
};
