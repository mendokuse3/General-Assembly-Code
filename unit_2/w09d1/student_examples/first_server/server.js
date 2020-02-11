const express = require('express');
const app = express();

const header = require('./header');

app.get('/', (req, res) => {
	res.send('Hello World :) dfhj');
});

app.get('/somedata', (request, response) => {
	response.send(header.wrapper());
});

app.listen(3000, () => {
	console.log('Is anybody out there?');
});
// console.log(express);
