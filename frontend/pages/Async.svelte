<svelte:head>
    <title>Async content</title>
</svelte:head>

<h2 class="font-bold">Async content</h2>

{#await req}
    <div>Loading...</div>
{:then}
    <div>Hello from some async content!</div>
{/await}

<script>
let req = new Promise(resolve => setTimeout(resolve, 1000));
</script>