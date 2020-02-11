const express = require('express');
const app = express();
const port = 3000;

let fruits = [
	{
		name: 'apple',
		color: 'red',
		readyToEat: true
	},
	{
		name: 'pear',
		color: 'green',
		readyToEat: false
	},
	{
		name: 'banana',
		color: 'yellow',
		readyToEat: true
	}
];

app.get('/', (req, res) => {
	res.send(`Hello little world`);
});

app.get('/fruits/', (req, res) => {
	res.send(fruits);
});

app.get('/calc/:num1/:num2', (req, res) => {
	console.log(req.params);
	console.log(req.query);

	if (req.query.operation === 'add') {
		let sum = parseInt(req.params.num1) + parseInt(req.params.num2);
		res.send(`The sum is: ${sum}`);
	} else if (req.query.operation === 'subtract') {
		let sum = parseInt(req.params.num1) - parseInt(req.params.num2);
		res.send(`The difference is: ${sum}`);
	} else {
		res.send(`:/ no op sent`);
	}
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
