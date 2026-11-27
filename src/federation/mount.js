import { mount as mountSvelte, unmount } from 'svelte';
import Goals from '../routes/+page.svelte';

/** @param {HTMLElement} container */
export async function mount(container) {
	const target = document.createElement('div');
	const shadow = target.attachShadow({ mode: 'open' });
	const style = document.createElement('style');
	style.textContent = ':host { display: block; font-family: system-ui, sans-serif; }';
	shadow.append(style);
	container.append(target);
	let app;
	try {
		app = mountSvelte(Goals, { target: shadow });
	} catch (error) {
		target.remove();
		throw error;
	}
	/** @type {Promise<void> | undefined} */
	let disposal;
	return () => {
		if (!disposal) {
			disposal = unmount(app).finally(() => target.remove());
		}
		return disposal;
	};
}
