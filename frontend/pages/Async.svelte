<svelte:head>
    <title>Async content</title>
</svelte:head>

<h2 class="font-bold">Async content</h2>

{#if loading}
    <div>Loading...</div>
{:else}
    <div>{message}</div>
{/if}

<script>
import axios from 'axios';
import initialState from '../app/initial_state';

let loading = false;
let message = initialState().message;

// fetch the message if it's not in our initial state
if (!message) {
    loading = true;

    axios.get('/async', { headers: { sveltober: true }}).then((response) => {
        loading = false;
        message = response.data.message;
    });
}
</script>