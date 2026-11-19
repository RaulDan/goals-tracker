import { mount, unmount } from 'svelte';
import GoalsTracker from './routes/+page.svelte';
// todo: Ask about pro/cons of webComponents for all apps, ask if I can improve
//todo: Ask about styling, event communication and data binding to all apps
class GoalsTrackerWebComponent extends HTMLElement {

    connectedCallback() {
        if (this.svelteApp) return;

        this.svelteApp = mount(GoalsTracker, {
            target: this
        });
    }

    disconnectedCallback() {
        if (this.svelteApp) {
            void unmount(this.svelteApp);
            this.svelteApp = null;
        }
    }
}

if (!customElements.get('web-component-goals-tracker')) {
    customElements.define(
        'web-component-goals-tracker',
        GoalsTrackerWebComponent
    );
}