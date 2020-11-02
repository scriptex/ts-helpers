export type VoidFunction = (...args: unknown[]) => void;
export type VoidFunctionList = Record<string, VoidFunction>;

export const debug = (condition: boolean): VoidFunctionList =>
	Object.keys(console).reduce((result: VoidFunctionList, method: string) => {
		result[method] = condition ? () => undefined : (console as any)[method];

		return result;
	}, {});
