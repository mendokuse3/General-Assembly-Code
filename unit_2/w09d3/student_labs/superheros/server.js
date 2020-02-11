const express = require('express');
const app = express();
const port = 8000;

const superHeros = [
	{
		name: 'Superman',
		powers: [ 'flight', 'invulnerability', 'x-ray vision' ]
	}
];

const villians = [
	{
		name: 'Lex Luthor',
		powers: [ 'super brain' ]
	},
	{
		name: 'Ares',
		powers: [ 'shape shifting', 'teleporting' ]
	},
	{
		name: 'Killmonger',
		powers: [ "ability to fit in Black Panther's suit", 'internet agreement that he looks badass' ]
	}
];

app.get('/superheros', (req, res) => {
	res.send({ superHeros: superHeros, villians: villians });
});

app.get('/superheros/:superhero', (req, res) => {
	res.send(`<h1>${superHeros[req.params.superhero].name}</h1>`);
});

app.get('/villian/:villian', (req, res) => {
	res.send(`<h1>${villians[req.params.villian].name}</h1>`);
});

app.listen(port, () => {
	console.log('listening on port:', port);
});
