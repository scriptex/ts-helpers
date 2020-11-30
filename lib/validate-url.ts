/**
 * Check if the provided string is a valid URL
 * @param {String} url Any string
 */
export const validateURL = (url: string): boolean => {
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
};
