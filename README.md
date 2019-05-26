# sveltober

[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/sveltober.svg)](https://david-dm.org/scottbedard/sveltober?type=dev)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/scottbedard/sveltober/blob/master/LICENSE)

### Project status

This project is a starting point for applications using [Svelte](https://svelte.dev) and [October CMS](https://octobercms.com). It also comes with support for [Tailwind CSS](https://tailwindcss.com), as this framework pairs beautifully with Svelte.

[Click here for a live demo!](https://sveltober.scottbedard.net/)

> **Notice:** This is still experimental, be careful before taking it to production. In the future, we hope to provide deployment guides for the Laravel ecosystem with Forge and Envoyer.

### Getting started

The first step to creating a Sveltober theme is to clone this repository into October's `/themes` directory.

```bash
git clone git@github.com:scottbedard/sveltober.git
```

Once this is done, you'll need to run a `yarn install` from that directory. After doing this, the following commands will be available.

```bash
# start webpack dev server
yarn dev

# build production assets
yarn build
```

### Server side rendering and SPA routing

This theme uses server side rendering, and because of this requires a Node environment. If you're using [Laravel Homestead](https://laravel.com/docs/homestead), this should already be the case. All routes are currently pointed at our `index.htm` file, which feeds the request into Svelte to be rendered. Our client-side application then hydates the DOM, and things behave as a SPA from then on.

Routing is currently being handled by [`svelte-routing`](https://github.com/EmilTholin/svelte-routing), see their readme for documentation. Out of the box, a few routes have are scaffolded for you to demonstrate the basic ideas.
