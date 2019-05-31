import { getContext } from 'svelte';
import { get } from 'svelte/store';

let app;

export default () => {
    if (!app) {
        app = get(getContext('app')) || { initialState: {} };
    }

    return app.initialState;
}