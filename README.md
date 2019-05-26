# sveltober

[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/sveltober.svg)](https://david-dm.org/scottbedard/sveltober?type=dev)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/scottbedard/sveltober/blob/master/LICENSE)

### Project status

The goal of this project is to be an opinionated starting point for single page applications written with [October CMS](https://octobercms.com) and [Svelte](https://svelte.dev). Currently, your theme will be able to utilize Svelte and [Tailwind CSS](https://tailwindcss.com). Production builds will remove any unused styles, and your site footprint will be extremely small. In the future, we hope to provide testing utilities, server side rendering, and much more. [Click here for a live demo](https://sveltober.scottbedard.net).

> **Notice:** This is still in very early stages of development, expect things to change before a stable release is tagged.

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

### Routing

Routing is currently being handled using [`svelte-routing`](https://github.com/EmilTholin/svelte-routing), see their readme for documentation. Out of the box, a few routes have are scaffolded for you to demonstrate the basic ideas.
