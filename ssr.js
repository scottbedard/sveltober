const [ url ] = process.argv.slice(2);

const { html } = require('./assets/App.js').render({ url });

process.stdout.write(JSON.stringify({ html }));