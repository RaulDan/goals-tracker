import { mount as mountSvelte, unmount as unmountSvelte } from 'svelte';
import GoalsPage from './routes/+page.svelte';

type Props = { domElement: HTMLElement };
let instance: ReturnType<typeof mountSvelte> | undefined;

export async function bootstrap(): Promise<void> {}

export async function mount({ domElement }: Props): Promise<void> {
	const response = await fetch(new URL(/* @vite-ignore */ './single-spa.css', import.meta.url));
	if (!response.ok) throw new Error(`Could not load goals styles: ${response.status}`);
	const css = await response.text();
	const host = document.createElement('div');
	const shadow = host.attachShadow({ mode: 'open' });
	const style = document.createElement('style');
	style.textContent = `:host { display: block; font-family: Inter, sans-serif; color: #111827; background: #eef2ff; } ${css}`;
	shadow.append(style);
	domElement.replaceChildren(host);
	try {
		instance = mountSvelte(GoalsPage, { target: shadow });
	} catch (error) {
		host.remove();
		throw error;
	}
}

export async function unmount({ domElement }: Props): Promise<void> {
	try {
		if (instance) await unmountSvelte(instance);
	} finally {
		instance = undefined;
		domElement.replaceChildren();
	}
}
