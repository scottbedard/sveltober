<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div>
    <Router url="{url}">
        <header class="p-4">
            <a
                href="https://github.com/scottbedard/sveltober"
                title="View repository on GitHub">
                <img alt="Sveltober" class="max-w-xs" src="{logo}" />
                <p class="mt-4">Cybernetically enhanced october themes</p>
            </a>
        </header>

        <nav class="p-4">
            <div class="font-bold text-gray-800">Navigation</div>
            <div class="flex">
                <NavLink to="/">
                    <div class="mr-4">Home</div>
                </NavLink>
                <NavLink to="about">
                    <div class="mr-4">About</div>
                </NavLink>
                <NavLink to="blog">
                    <div class="mr-4">Blog</div>
                </NavLink>
                <NavLink to="async">
                    <div>Async</div>
                </NavLink>
            </div>
        </nav>

        <div class="p-4">
            <Route path="about" component="{About}" />
            <Route path="async" component="{Async}" />
            <Route path="blog" component="{Blog}" />
            <Route path="/" component="{Home}" />
        </div>
    </Router>
</div>

<script>
import logo from './assets/sveltober.png';

// components
import { Router, Route } from 'svelte-routing';
import NavLink from './components/NavLink.svelte';
import About from './pages/About.svelte';
import Async from './pages/Async.svelte';
import Blog from './pages/Blog.svelte';
import Home from './pages/Home.svelte';

// props
// url is exposed for server side rendering
export let url = '';
</script>