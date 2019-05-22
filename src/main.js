import App from './App.svelte';

const app = new App({
    // hydrate: true,
    target: document.body,
});

window.app = app;

export default app;