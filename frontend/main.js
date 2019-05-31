import './styles/global.css';
import App from './App.svelte';

const data = document.head.querySelector('[name=sveltober]');

// mount our application to the dom
const app = new App({
    hydrate: true,
    props: {
        initialState: JSON.parse(data.content || '{}'),
    },
    target: document.getElementById('app'),
});

window.app = app;

export default app;