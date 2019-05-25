import App from './App.svelte';

const app = new App({
    hydrate: true,
    target: document.getElementById('app'),
});

window.app = app;

export default app;