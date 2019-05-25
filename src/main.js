import App from './App.svelte';

import './styles/global.css';

const app = new App({
    target: document.getElementById('app'),
});

window.app = app;

export default app;