const [ url ] = process.argv.slice(2);

const { head, html } = require('./assets/App.js').render({ url });

process.stdout.write(JSON.stringify({ head, html }));