import { mount as mountSvelte, unmount } from 'svelte';
import GoalsApp from '../lib/GoalsApp.svelte';

export async function mount(container: HTMLElement): Promise<() => Promise<void>> {
	const host = document.createElement('goals-tracker-remote');
	const shadow = host.attachShadow({ mode: 'open' });
	const styles = document.createElement('style');
	styles.textContent = ':host { display: block; background: #eef2ff; color: #111827; }';
	shadow.append(styles);
	container.append(host);
	let application: ReturnType<typeof mountSvelte>;
	try {
		application = mountSvelte(GoalsApp, { target: shadow });
	} catch (error) {
		host.remove();
		throw error;
	}
	let disposed = false;
	return async () => {
		if (disposed) return;
		disposed = true;
		await unmount(application);
		host.remove();
	};
}
