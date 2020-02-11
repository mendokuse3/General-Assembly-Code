const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.send(`
        <html>
            <head>
                <title> My first server</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>OH HELLO WORLD!</h1>
                <h2>Bonjour Le Monde!</h2>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
