<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div>
    <Router url="{url}">
        <header class="p-4">
            <a
                href="https://github.com/scottbedard/sveltober"
                title="View repository on GitHub">
                <div class="font-bold text-2xl">sveltober</div>
                <p class="text-gray-800">cybernetically enhanced october themes</p>
            </a>
            <div class="mt-4 flex">
                <a
                    class="mr-4"
                    href="https://david-dm.org/scottbedard/sveltober?type=dev"
                    target="_blank"
                    title="View dependency status">
                    <img alt="View dependency status" src="https://img.shields.io/david/dev/scottbedard/sveltober.svg" />
                </a>
                <a
                    class="mr-4"
                    href="https://github.com/scottbedard/sveltober"
                    target="_blank"
                    title="View MIT License on GitHub">
                    <img alt="View MIT License on GitHub" src="https://img.shields.io/badge/license-MIT-blue.svg" />
                </a>
            </div>
        </header>

        <nav class="p-4">
            <div class="font-bold text-gray-800">Navigation</div>
            <div class="flex">
                <NavLink to="/">
                    <div class="pr-2">Home</div>
                </NavLink>
                <NavLink to="about">
                    <div class="pr-2">About</div>
                </NavLink>
                <NavLink to="blog">
                    <div>Blog</div>
                </NavLink>
            </div>
        </nav>

        <div class="p-4">
            <Route path="about" component="{About}" />
            <Route path="blog" component="{Blog}" />
            <Route path="/" component="{Home}" />
        </div>
    </Router>
</div>

<script>
// components
import { Router, Route } from 'svelte-routing';
import NavLink from './components/NavLink.svelte';

// pages
import About from './pages/About.svelte';
import Blog from './pages/Blog.svelte';
import Home from './pages/Home.svelte';

// props
// url is exposed for server side rendering
export let url = '';
</script>