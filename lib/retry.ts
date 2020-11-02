export const retry = <T>(
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
