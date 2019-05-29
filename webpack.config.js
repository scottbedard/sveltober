const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const merge = require('webpack-merge');
const path = require('path');

// environment variables
const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';
const prod = mode === 'production';

// helper to resolve paths from this directory
const resolve = (...dirs) => path.resolve(__dirname, ...dirs);

// the port for webpack dev server
const port = 3000;

// the name of the current directory
// this can be hard coded to match the directory name
const themeDir = __dirname.split(path.sep).pop();

// path to our output directory for static assets
const assetsPath = resolve('./assets');

//
// base
//
const base = {
    mode,
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ],
            },
        ],
    },
    output: {
        path: assetsPath,
        publicPath: prod
            ? `/plugins/bedard/sveltober/assets/`
            : `http://localhost:${port}/`,
    },
    resolve: {
        extensions: ['.mjs', '.js', '.svelte'],
    },
};

//
// client
//
const client = merge(base, {
    devtool: dev ? 'source-map' : false,
    devServer: {
        disableHostCheck: true,
        host: 'localhost', 
        port: 3000,
    },
    entry: {
        bundle: ['./frontend/main.js']
    },
    output: {
        filename: '[id].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: dev,
                        hydratable: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        // minicss doesn't work with hmr, use style-loader instead
                        loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: resolve('./views/index.htm'),
            template: resolve('./frontend/index.htm'),
        }),
        new HtmlWebpackHarddiskPlugin(),
        new PurgecssPlugin({
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            paths: glob.sync(`./frontend/**/*`, { nodir: true })
        }),
    ],
});

//
// server
//
const server = merge(base, {
    entry: {
        bundle: ['./frontend/App.svelte']
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        generate: 'ssr',
                        css: false,
                    },
                },
            },
        ],
    },
    output: {
        filename: 'App.js',
        libraryExport: 'default',
        libraryTarget: 'commonjs',
    },
    target: 'node',
});

module.exports = [client, server];
