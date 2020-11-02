export const toJSON = <T>(data: string): T | void => {
	try {
		return JSON.parse(data);
	} catch (err) {
		return;
	}
};
