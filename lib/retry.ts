/**
 * Recursively retry a function call
 * @param {Function} fn The function to retry
 * @param {Boolean} condition Condition based on which the function will be retried. If true, the function will not be retried.
 * @param {Error | string} error Error or error message to throw
 * @param {Number} retryCount Number of times to retry
 */
export const retry = <T>(
	fn: (...args: unknown[]) => T,
	condition: boolean,
	error: Error | string,
	retryCount: number = 2
): T => {
	if (condition) {
		return fn();
	}

	if (retryCount <= 1) {
		throw error;
	}

	return retry(fn, condition, error, retryCount - 1);
};
