import { mount } from './mount';

const container = document.getElementById('remote-root');
if (!container) throw new Error('Missing remote-root container.');
void mount(container).catch((error: unknown) => {
	console.error('Goals tracker mount failed', error);
	container.textContent = 'Could not start the goals tracker.';
});
