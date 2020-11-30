/**
 * Safely convert a string to JSON
 * @param {String} data Any string
 */
export const toJSON = <T>(data: string): T | void => {
	try {
		return JSON.parse(data);
	} catch (err) {
		return;
	}
};
