export const getBrowserLanguage = (): string | null => {
	const nav: Navigator = window.navigator;
	const browserLanguagePropertyKeys: string[] = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];

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
