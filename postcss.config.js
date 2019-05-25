const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
        'tailwindcss': './tailwind.config.js',
        'cssnano': {},
    },
};
