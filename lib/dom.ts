/**
 * Get multiple DOM elements using a CSS selector
 * @example
 * ```typescript
 * $$('button', button => {
 *   button.addEventListener('click', event => {
 *     event.preventDefault();
 *     // ...
 *   });
 * });
 * ```
 */
export const $$ = (selector: string, callback: (item: Element, index: number, items: Element[]) => void): void => {
	const elements = Array.from(document.querySelectorAll(selector));

	if (elements.length === 0) {
		return;
	}

	elements.forEach(callback);
};

/**
 * Get a single DOM element using a CSS selector
 * @example
 * ```typescript
 * $('#button').addEventListener('click', event => {
 *   event.preventDefault();
 *
 *   // ...
 * });
 * ```
 */
export const $ = (selector: string): Element | null => document.querySelector(selector);
