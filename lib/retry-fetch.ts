/**
 * Recursively retry a fetch request
 * @param {String} url The URL to fetch from
 * @param {RequestInit} options Options for the fetch request
 * @param {Number} retryCount Number of times to retry
 */

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
