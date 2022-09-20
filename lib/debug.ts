export type VoidFunction = (...args: unknown[]) => void;
export type VoidFunctionList = Record<string, VoidFunction>;

/**
 * A proxy method which uses all console methods but
 * accepts a condition argument which disables it when the condition
 * is truthy. This is useful when you want to enable
 * console statements in development or testing environments but
 * want them disabled in production.
 * @param {Boolean} condition Boolean condition used to enable/disable console methods
 */
export const debug = (condition: boolean): VoidFunctionList =>
	Object.keys(console).reduce((result: VoidFunctionList, method: string) => {
		result[method] = condition ? () => undefined : (console as unknown as Record<string, VoidFunction>)[method];

		return result;
	}, {});
