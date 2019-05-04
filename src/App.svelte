<style>
	h1 {
		color: #f00;
	}
</style>

<h1>Sveltober</h1>

<Router>
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
</Router>

<script>
import { Router, Route } from 'svero';
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
</script>