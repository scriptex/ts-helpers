export const retryFetch = async (url: string, options: RequestInit = {}, retryCount: number = 2): Promise<Response> => {
	try {
		return await fetch(url, options);
	} catch (error: unknown) {
		if (retryCount <= 1) {
			throw error;
		}

		return await retryFetch(url, options, retryCount - 1);
	}
};
