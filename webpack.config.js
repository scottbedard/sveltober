const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// helper function to resolve paths from this directory
const resolve = (...dirs) => path.resolve(__dirname, ...dirs);

const devPort = 3000;
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const themeDir = __dirname.split(path.sep).pop();

module.exports = {
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
        path: resolve('./assets'),
        publicPath: prod
            ? `/themes/${themeDir}/assets`
            : `http://localhost:${devPort}`,
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true,
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
                        options: {
                            
                        },
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
    ],
    devtool: prod ? false: 'source-map'
};
