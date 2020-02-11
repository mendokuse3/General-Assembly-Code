const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/fruits', (request, response) => {
	response.render('index.ejs', {
		fruits: fruits
	});
});

app.get('/fruits/:indexOfFruitsArray', (request, response) => {
	response.render('show.ejs', {
		fruit: fruits[request.params.indexOfFruitsArray]
	});
});

//create
app.post('/fruits', (req, res) => {
	console.log(req);
	if (req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	fruits.push(req.body);
	console.log(fruits);
	res.redirect('/fruits');
});

app.post('/products', (req, res) => {
	console.log('Create route accessed');
	console.log(req.body);
	res.send('This route works!');
});

app.listen(3000, () => {
	console.log('I am listening on port 3000');
});
