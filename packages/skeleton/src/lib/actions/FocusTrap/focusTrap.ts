// Action: Focus Trap

import { hasFocusStrict, registerToStrictlyStack, removeFromStrictlyStack } from './shared.js';

// DEPRECATED: replace the 'enabled: boolean' argument with '{enabled: boolean, strict?: boolean}' in v2.
export function focusTrap(node: HTMLElement, enabled: boolean) {
	let firstFocusableChild: HTMLElement;
	let lastFocusableChild: HTMLElement;

	const focusableElementSelector = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

	type FirstAndLastFocusableChildren = { first?: HTMLElement; last?: HTMLElement };

	function getFirstAndLastFocusableChild(element: HTMLElement): FirstAndLastFocusableChildren {
		const focusableChilds: HTMLElement[] = Array.from(element.querySelectorAll(focusableElementSelector));
		const first = focusableChilds.at(0);
		const last = focusableChilds.at(-1);
		return { first, last };
	}

	function isFocusStrict(element: HTMLElement): boolean {
		const strictFocus = element.dataset.focusStrict;
		return strictFocus === '' || strictFocus === 'true';
	}

	function keydownHandler(event: KeyboardEvent) {
		if (event.key !== 'Tab' || !enabled) return;
		if (event.shiftKey && document.activeElement === firstFocusableChild) {
			event.preventDefault();
			lastFocusableChild.focus();
		} else if (!event.shiftKey && document.activeElement === lastFocusableChild) {
			event.preventDefault();
			firstFocusableChild.focus();
		} else if (isFocusStrict(node) && !node.contains(document.activeElement)) {
			event.preventDefault();
			firstFocusableChild.focus();
		}
	}
	function determineFocusableChildren(fromObserver: boolean) {
		if (!enabled) return;
		const { first, last } = getFirstAndLastFocusableChild(node);
		if (!first || !last) return;
		firstFocusableChild = first;
		lastFocusableChild = last;
		if (!fromObserver) firstFocusableChild.focus();
	}
	determineFocusableChildren(false);

	const onObservationChange = (mutationRecords: MutationRecord[], observer: MutationObserver) => {
		if (mutationRecords.length) determineFocusableChildren(true);
		return observer;
	};
	const observer = new MutationObserver(onObservationChange);
	observer.observe(node, { childList: true, subtree: true });

	// Register element
	if (hasFocusStrict(node)) registerToStrictlyStack(node);

	// Event Listener
	document.addEventListener('keydown', keydownHandler);
	// Lifecycle
	return {
		update(newArgs: boolean) {
			enabled = newArgs;
			if (newArgs) determineFocusableChildren(false);
		},
		destroy() {
			if (hasFocusStrict(node)) removeFromStrictlyStack(node);
			document.removeEventListener('keydown', keydownHandler);
			observer.disconnect();
		}
	};
}
