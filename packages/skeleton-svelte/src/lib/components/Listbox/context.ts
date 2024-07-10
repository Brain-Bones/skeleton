import { createContext } from '$lib/internal/create-context.js';
import type { ListboxContext } from './types.js';

export const [setListboxContext, getListboxContext, key] = createContext<ListboxContext>({
	toggle: () => {},
	has: () => false,
	value: ''
});
