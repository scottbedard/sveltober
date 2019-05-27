<p align="center">
  <img alt="Sveltober" height="64px" src="https://user-images.githubusercontent.com/7980426/58436866-47c67800-807c-11e9-804c-6a4536261353.png" />
</p>

<p align="center">
  <a href="https://david-dm.org/scottbedard/sveltober?type=dev">
    <img src="https://img.shields.io/david/dev/scottbedard/sveltober.svg" />
  </a>
  <a href="https://github.com/scottbedard/sveltober/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

### Project status

This project is a starting point for applications using [Svelte](https://svelte.dev) and [October CMS](https://octobercms.com). It also comes with support for [Tailwind CSS](https://tailwindcss.com), as this framework pairs beautifully with Svelte.

[Click here for a live demo!](https://sveltober.scottbedard.net/)

> **Notice:** This is still experimental, be careful before taking it to production. In the future, we hope to provide deployment guides for the Laravel ecosystem with Forge and Envoyer.

### Getting started

The first step to creating a Sveltober theme is to clone this repository into October's `/themes` directory.

```bash
git clone git@github.com:scottbedard/sveltober.git
```

Once this is done, run a `yarn install` from your new theme directory. After doing this, the following commands will be available.

```bash
# start webpack dev server
yarn dev

# build production assets
yarn build
```

### Server side rendering and routing

This theme uses server side rendering, and as such requires a Node environment. With [Laravel Homestead](https://laravel.com/docs/homestead), and many other environments, it should already installed for you. All routes are pointed at the compiled `index.htm`, which feeds the request into our Svelte application. Our client-side application then hydates the DOM, and things behave as a SPA from then on.

If you'd like to opt-out of server side rendering, this can be achieved with the following steps.

1. Remove the `server` config from `webpack.config.js`.
2. In the `client` webpack config, set `hydratable` to `false`, and in `/src/main.js` set `hydrate` to `false`.
3. Delete `ssr.js`, and the `onStart` and interpolation content from `src/index.htm`.

Routing is currently being handled by [`svelte-routing`](https://github.com/EmilTholin/svelte-routing), see their readme for documentation. Out of the box, a few routes have are scaffolded for you to demonstrate the basic ideas. If you're using SSR, be aware that [the order of your routes matter](https://github.com/EmilTholin/svelte-routing#ssr-caveat).
