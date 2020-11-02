export const debug = (condition: boolean): Record<string, (...args: unknown[]) => void> =>
	Object.keys(console).reduce((result: Record<string, (...args: unknown[]) => void>, method: string) => {
		result[method] = condition ? () => undefined : console[method];

		return result;
	}, {});
