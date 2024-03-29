/**
 * Get the selected language of your browser
 */
export const getBrowserLanguage = (): string | null => {
	const nav: Navigator = window.navigator;
	const keys: string[] = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];

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
		for (const key of keys) {
			language = (nav as unknown as Record<string, string>)[key];

			if (language && language.length) {
				return language;
			}
		}
	}

	return language;
};
