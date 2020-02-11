const express = require('express');
const app = express();

app.get('/Homer', (req, res) => {
	res.send('Homer Route!');
});

app.get('/Marge', (req, res) => {
	res.send('Marge Route!');
});

app.get('/Bart', (req, res) => {
	res.send('Bart Route!');
});

app.get('/Lisa', (req, res) => {
	res.send('Lisa Route!');
});

app.get('/Maggie', (req, res) => {
	res.send('Maggie Route!');
});

app.get('/Snowball-II', (req, res) => {
	res.send('Snowball-II');
});

app.get('/santas-little-helper', (req, res) => {
	res.send('santas-little-helper route');
});

app.listen(3000, () => {
	console.log('Hello world!');
});
