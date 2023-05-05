import { get, writable, type Writable } from 'svelte/store';
import type { Placement } from '@floating-ui/dom';
import type { PopupSettings } from './types';

// Use a store to pass the Floating UI import references
export const storePopup: Writable<any> = writable(undefined);

export function popup(triggerNode: HTMLElement, args: PopupSettings) {
	// Floating UI Modules
	const { computePosition, autoUpdate, offset, shift, flip, arrow, size, autoPlacement, hide, inline } = get(storePopup);
	// Local State
	let popupState = {
		open: false,
		autoUpdateCleanup: () => {}
	};
	const focusableAllowedList = ':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';
	let focusablePoupupElements: HTMLElement[];
	const documentationLink = 'https://www.skeleton.dev/utilities/popups';
	// Elements
	let elemPopup: HTMLElement;
	let elemArrow: HTMLElement;

  let memoPlacement: Placement | undefined = args.placement;

	function setDomElements(): void {
		elemPopup = document.querySelector(`[data-popup="${args.target}"]`) ?? new HTMLElement();
		elemArrow = elemPopup?.querySelector(`.arrow`) ?? new HTMLElement();

    if(memoPlacement) elemPopup?.classList.add(memoPlacement);
  }

  setDomElements(); // init

	// Render Floating UI Popup
	function render(): void {
		// Error handling for required Floating UI modules
		if (!elemPopup) throw new Error(`The data-popup="${args.target}" element was not found. ${documentationLink}`);
		if (!computePosition) throw new Error(`Floating UI 'computePosition' not found for data-popup="${args.target}". ${documentationLink}`);
		if (!offset) throw new Error(`Floating UI 'offset' not found for data-popup="${args.target}". ${documentationLink}`);
		if (!shift) throw new Error(`Floating UI 'shift' not found for data-popup="${args.target}". ${documentationLink}`);
		if (!flip) throw new Error(`Floating UI 'flip' not found for data-popup="${args.target}". ${documentationLink}`);
		if (!arrow) throw new Error(`Floating UI 'arrow' not found for data-popup="${args.target}". ${documentationLink}`);

		// Bundle optional middlware
		const optionalMiddlware = [];
		// https://floating-ui.com/docs/size
		if (size) optionalMiddlware.push(size(args.middleware?.size));
		// https://floating-ui.com/docs/autoPlacement
		if (autoPlacement) optionalMiddlware.push(autoPlacement(args.middleware?.autoPlacement));
		// https://floating-ui.com/docs/hide
		if (hide) optionalMiddlware.push(hide(args.middleware?.hide));
		// https://floating-ui.com/docs/inline
		if (inline) optionalMiddlware.push(inline(args.middleware?.inline));

		// Floating UI Compute Position
		// https://floating-ui.com/docs/computePosition
		computePosition(triggerNode, elemPopup, {
			placement: args.placement ?? 'bottom',
			// Middleware - NOTE: the order matters:
			// https://floating-ui.com/docs/middleware#ordering
			middleware: [
				// https://floating-ui.com/docs/offset
				offset(args.middleware?.offset ?? 8),
				// https://floating-ui.com/docs/shift
				shift(args.middleware?.shift ?? { padding: 8 }),
				// https://floating-ui.com/docs/flip
				flip(args.middleware?.flip),
				// https://floating-ui.com/docs/arrow
				arrow(args.middleware?.arrow ?? { element: elemArrow || null }),
				// Implement optional middlware
				...optionalMiddlware
			]
		}).then(({ x, y, placement, middlewareData }: any) => {
      if(middlewareData.hide && (middlewareData.hide.referenceHidden || middlewareData.hide.escaped)) {
        elemPopup.classList.add('!hidden')
      } else {
        elemPopup.classList.remove('!hidden')
      }

      Object.assign(elemPopup.style, {
				left: `${x}px`,
				top: `${y}px`
			});

      // Add placement as a classname for custom styling
      if(memoPlacement && placement !== memoPlacement) {
        elemPopup.classList.replace(memoPlacement, placement);
      } else {
        elemPopup.classList.add(placement);
      }

      memoPlacement = placement;

      // Handle Arrow Placement:
			// https://floating-ui.com/docs/arrow
			if (elemArrow) {
				const { x: arrowX, y: arrowY } = middlewareData.arrow;
				// @ts-ignore
				const staticSide = {
					top: 'bottom',
					right: 'left',
					bottom: 'top',
					left: 'right'
				}[placement.split('-')[0]];
				Object.assign(elemArrow.style, {
					left: arrowX != null ? `${arrowX}px` : '',
					top: arrowY != null ? `${arrowY}px` : '',
					right: '',
					bottom: '',
					[staticSide]: '-4px'
				});
			}
		});
	}

  // Set transition duration
  const cssTransitionDuration = parseFloat(window.getComputedStyle(elemPopup).transitionDuration.replace('s', '')) * 1000;

	// State Handlers
	function open(): void {
		if (!elemPopup || elemPopup?.classList.contains('block')) return;
    elemPopup.classList.remove('!hidden');

		// Update render settings
		render();

    // Update the DOM
    elemPopup.classList.remove('!opacity-0');
    elemPopup.classList.add('!block');
    elemPopup.classList.add('!opacity-100');

    setTimeout(() => {
      // Set open state to on
		  popupState.open = true;
      // Return the current state
  		if (args.state) args.state({ state: popupState.open });
      // Trigger Floating UI autoUpdate (open only)
      // https://floating-ui.com/docs/autoUpdate
      popupState.autoUpdateCleanup = autoUpdate(triggerNode, elemPopup, render);
      // Focus the first focusable element within the popup
      focusablePoupupElements = Array.from(elemPopup?.querySelectorAll(focusableAllowedList));
    }, cssTransitionDuration);
	}
	function close(callback?: any): void {
		if (!elemPopup || elemPopup?.classList.contains('opacity-0')) return;

    elemPopup.classList.remove('!opacity-100');
    elemPopup.classList.add('!opacity-0');

		setTimeout(() => {
			// Set open state to off
			popupState.open = false;
			// Return the current state
			if (args.state) args.state({ state: popupState.open });
			// Update the DOM
      elemPopup.classList.remove('!block');
      elemPopup.classList.add('!hidden');
			// Cleanup Floating UI autoUpdate (close only)
			if (popupState.autoUpdateCleanup) popupState.autoUpdateCleanup();
			// Trigger callback
			if (callback) callback();
		}, cssTransitionDuration);
	}

	// Event Handlers
	function toggle(): void {
		popupState.open === false ? open() : close();
	}
	function onWindowClick(event: any): void {
		// Return if the popup is not yet open
		if (popupState.open === false) return;
		// Return if click is the trigger element
		if (triggerNode.contains(event.target)) return;
		// If click it outside the popup
		if (elemPopup && elemPopup.contains(event.target) === false) {
			close();
			return;
		}
		// Handle Close Query State
		const closeQueryString: string = args.closeQuery === undefined ? 'a[href], button' : args.closeQuery;
		const closableMenuElements = elemPopup?.querySelectorAll(closeQueryString);
		closableMenuElements?.forEach((elem) => {
			if (elem.contains(event.target)) close();
		});
	}

	// Keyboard Interactions for A11y
	const onWindowKeyDown = (event: KeyboardEvent): void => {
		if (popupState.open === false) return;
		// Handle keys
		const key: string = event.key;
		// On Esc key
		if (key === 'Escape') {
			event.preventDefault();
			triggerNode.focus();
			close();
			return;
		}
		// On Tab or ArrowDown key
		const triggerMenuFocused: boolean = popupState.open && document.activeElement === triggerNode;
		if (triggerMenuFocused && (key === 'ArrowDown' || key === 'Tab')) {
			event.preventDefault();
			if (focusableAllowedList.length > 0) focusablePoupupElements[0].focus();
		}
	};

	// Event Listeners
	switch (args.event) {
		case 'click':
			triggerNode.addEventListener('click', toggle, true);
			window.addEventListener('click', onWindowClick, true);
			break;
		case 'hover':
			triggerNode.addEventListener('mouseover', open, true);
			triggerNode.addEventListener('mouseleave', close, true);
			break;
		case 'focus-blur':
			triggerNode.addEventListener('focus', toggle, true);
			triggerNode.addEventListener('blur', close, true);
			break;
		case 'focus-click':
			triggerNode.addEventListener('focus', open, true);
			window.addEventListener('click', onWindowClick, true);
			break;
		default:
			throw new Error(`Event value of '${args.event}' is not supported. ${documentationLink}`);
	}
	window.addEventListener('keydown', onWindowKeyDown, true);

	// Render popup on initilization
	render();

	// Lifecycle
	return {
		update(newArgs: PopupSettings) {
			close(() => {
				args = newArgs;
				render();
				setDomElements();
			});
		},
		destroy() {
			// Trigger Events
			triggerNode.removeEventListener('click', toggle, true);
			triggerNode.removeEventListener('mouseover', open, true);
			triggerNode.removeEventListener('mouseleave', close, true);
			triggerNode.removeEventListener('focus', toggle, true);
			triggerNode.removeEventListener('focus', open, true);
			triggerNode.removeEventListener('blur', close, true);
			// Window Events
			window.removeEventListener('click', onWindowClick, true);
			window.removeEventListener('keydown', onWindowKeyDown, true);
		}
	};
}
