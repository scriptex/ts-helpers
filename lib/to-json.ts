export const toJSON = <T>(dataAsString: string): T | void => {
	try {
		return JSON.parse(dataAsString);
	} catch (err) {
		return;
	}
};
