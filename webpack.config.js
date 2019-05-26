const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

// helper function to resolve paths from this directory
const resolve = (...dirs) => path.resolve(__dirname, ...dirs);

const devPort = 3000;
const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';
const prod = mode === 'production';
const themeDir = __dirname.split(path.sep).pop();

const assetsPath = resolve('./assets');

const publicPath = prod
    ? `/themes/${themeDir}/assets`
    : `http://localhost:${devPort}`;    

//
// client
//
const client = {
    devServer: {
        disableHostCheck: true,
        host: 'localhost', 
        port: 3000,
    }, 
    entry: {
        bundle: ['./src/main.js']
    },
    resolve: {
        extensions: ['.mjs', '.js', '.svelte']
    },
    output: {
        filename: '[id].[contenthash].js',
        path: assetsPath,
        publicPath,
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
                    // MiniCssExtractPlugin doesn't support HMR.
                    // For developing, use 'style-loader' instead.
                    {
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
            }
        ]
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: resolve('./pages/index.htm'),
            template: resolve('./src/index.htm'),
        }),
        new HtmlWebpackHarddiskPlugin(),
        new PurgecssPlugin({
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            paths: glob.sync(`./src/**/*`, { nodir: true })
        }),
    ],
    devtool: prod ? false: 'source-map'
};

//
// server
//
const server = {
    entry: {
        bundle: ['./src/App.svelte']
    },
    resolve: {
        extensions: ['.mjs', '.js', '.svelte']
    },
    output: {
        filename: 'App.js',
        libraryExport: 'default',
        libraryTarget: 'commonjs',
        path: assetsPath,
        publicPath,
    },
    target: 'node',
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
        ]
    },
    mode,
};

module.exports = [client, server];
