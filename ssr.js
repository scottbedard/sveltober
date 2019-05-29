const [url, data] = process.argv.slice(2);

const { head, html } = require('./assets/App.js').render({ data, url });

process.stdout.write(JSON.stringify({ head, html }));