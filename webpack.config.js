const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

function resolve(...dirs) {
    return path.resolve(__dirname, ...dirs);
}

module.exports = {
    entry: {
        bundle: ['./src/main.js']
    },
    resolve: {
        extensions: ['.mjs', '.js', '.svelte']
    },
    output: {
        filename: '[id].[contenthash].js',
        path: resolve('./assets'),
        publicPath: '/themes/sveltober/assets',
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    /**
                     * MiniCssExtractPlugin doesn't support HMR.
                     * For developing, use 'style-loader' instead.
                     * */
                    prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: resolve('./pages/index.htm'),
            template: resolve('./src/index.htm'),
        }),
    ],
    devtool: prod ? false: 'source-map'
};