<div>
    <Router url="{url}">
        <header class="p-4">
            <div class="text-lg">sveltober</div>
            <p class="mb-2 text-xs">cybernetically enhanced october themes</p>
            <div class="flex"><a
                    class="mr-2"
                    href="https://github.com/scottbedard/sveltober"
                    target="_blank"
                    title="View MIT License on GitHub">
                    <img alt="View MIT License on GitHub" src="https://img.shields.io/badge/license-MIT-blue.svg" />
                </a>
                
                <a
                    class="text-xs hover:text-red-500"
                    href="https://github.com/scottbedard/sveltober"
                    target="_blank"
                    title="View repository on GitHub">
                    View Repository
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