// Action: Focus Trap
// DEPRECATED: replace the 'enabled: boolean' argument with '{enabled: boolean, strict?: boolean}' in v2.
export function focusTrap(node: HTMLElement, enabled: boolean) {
	let firstFocusableChild: HTMLElement;
	let lastFocusableChild: HTMLElement;

	// Selector that matches any focusable (and thus tabbable) elements
	const focusableElementSelector = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

	// Get first and last focusable child from element
	function getFirstAndLastFocusableChild(element: HTMLElement): { first: HTMLElement | undefined; last: HTMLElement | undefined } {
		const focusableChilds: HTMLElement[] = Array.from(element.querySelectorAll(focusableElementSelector));
		const first = focusableChilds.at(0);
		const last = focusableChilds.at(-1);
		return { first, last };
	}

	// Return wether a element has the data-focus-strict attribute
	function isFocusStrict(element: HTMLElement): boolean {
		const strictFocus = element.dataset.focusStrict;
		if (strictFocus === '' || strictFocus?.toLocaleLowerCase() === 'true') return true;
		return false;
	}

	function keydownHandler(event: KeyboardEvent) {
		// Note: All code after this statement is with 'Tab is pressed' context in mind
		if (event.key !== 'Tab' || !enabled) return;
		// If the user holds shift and the currently active element is the firstFocusableChild: focus the last child
		if (event.shiftKey && document.activeElement === firstFocusableChild) {
			event.preventDefault();
			lastFocusableChild.focus();
		}
		// If the currently active element is the lastFocusableChild: focus the first child
		else if (!event.shiftKey && document.activeElement === lastFocusableChild) {
			event.preventDefault();
			firstFocusableChild.focus();
		}
		// If strictFocus is enabled and the activeElement is currently outside our node: focus the first child
		else if (isFocusStrict(node) && !node.contains(document.activeElement)) {
			event.preventDefault();
			firstFocusableChild.focus();
		}
	}
	function determineFocusableChilds(fromObserver: boolean) {
		if (!enabled) return;
		// Get first and last focusable child from the node
		const { first, last } = getFirstAndLastFocusableChild(node);
		// If there is not first (and thus last node, we return early)
		if (!first || !last) return;
		// Set the new found first and last focusable childs to the variables
		firstFocusableChild = first;
		lastFocusableChild = last;
		// Auto-focus first focusable element only when not called from observer
		if (!fromObserver) firstFocusableChild.focus();
	}
	determineFocusableChilds(false);

	// When children of node are changed (added or removed)
	const onObservationChange = (mutationRecords: MutationRecord[], observer: MutationObserver) => {
		if (mutationRecords.length) determineFocusableChilds(true);
		return observer;
	};
	const observer = new MutationObserver(onObservationChange);
	observer.observe(node, { childList: true, subtree: true });

	// Event Listener
	document.addEventListener('keydown', keydownHandler);
	// Lifecycle
	return {
		update(newArgs: boolean) {
			enabled = newArgs;
			if (newArgs) determineFocusableChilds(false);
		},
		destroy() {
			document.removeEventListener('keydown', keydownHandler);
			observer.disconnect();
		}
	};
}
