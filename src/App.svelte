<script>
    import { Router, Route } from 'svelte-routing';
    import About from './routes/About.svelte';
    import Blog from './routes/Blog.svelte';
    import Home from './routes/Home.svelte';
    import NavLink from './components/NavLink.svelte';
    let foo = 'bar';


    export let url = '';
</script>

<div class="max-w-2xl mx-auto p-8">
    <!-- header -->
    <header class="text-center">
        <h1 class="font-thin text-5xl">Sveltober</h1>
        <p class="font-thin mb-4 text-gray-700">Cybernetically enhanced October themes.</p>
    </header>

    <!-- router -->
    <Router url="{url}">
        <nav class="border-b border-t border-gray-400 mb-4 py-4 text-center">
            <NavLink to="/">
                <span class="px-4">Home</span>
            </NavLink>
            <NavLink to="about">
                <span class="px-4">About</span>
            </NavLink>
            <NavLink to="blog">
                <span class="px-4">Blog</span>
            </NavLink>
        </nav>
        <div>
            <Route path="about" component="{About}" />
            <Route path="blog" component="{Blog}" />
            <Route path="/" component="{Home}" />
        </div>
    </Router>
</div>