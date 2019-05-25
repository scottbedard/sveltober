<script>
    import { Router, Route } from "svelte-routing";
    import About from "./routes/About.svelte";
    import Blog from "./routes/Blog.svelte";
    import Home from "./routes/Home.svelte";
    import NavLink from "./components/NavLink.svelte";
</script>

<div class="max-w-xl mx-auto p-8">
    <!-- header -->
    <h1 class="font-thin mb-4 text-center text-6xl">Sveltober</h1>

    <!-- router -->
    <Router>
        <!-- nav -->
        <nav class="mb-8 text-center">
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

        <!-- active route -->
        <div>
            <Route path="about" component="{About}" />
            <Route path="blog" component="{Blog}" />
            <Route path="/" component="{Home}" />
        </div>
    </Router>
</div>