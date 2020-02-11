const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const methodOverride = require('method-override');

// app.use((request, response, next)=>{
//     console.log('a request has been received');
//     next();
// })

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.engine('html', require('ejs').renderFile);

// Index Route
app.get('/fruits', (request, response) => {
	response.render('index.ejs', {
		fruits: fruits
	});
});

// app.post('/products', (req, res)=>{
//     console.log('create route accessed!');
//     console.log('Req.body is: ', req.body);
//     res.send(req.body);
// });

// Create Route
app.post('/fruits', (request, response) => {
	if (request.body.readyToEat === 'on') {
		request.body.readyToEat = true;
	} else {
		request.body.readyToEat = false;
	}
	fruits.push(request.body);
	response.redirect('/fruits');
});

// New Route
app.get('/fruits/new', (request, response) => {
	response.render('new.ejs');
});

// Show Route
app.get('/fruits/:indexOfFruitsArray', (request, response) => {
	response.render('show.ejs', {
		fruit: fruits[request.params.indexOfFruitsArray]
	});
});

// Delete Route
app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
	fruits.splice(req.params.indexOfFruitsArray, 1); //remove the item from the array
	res.redirect('/fruits'); //redirect back to index route
});

// Edit Route
app.get('/fruits/:indexOfFruitsArray/edit', function(req, res) {
	res.render(
		'edit.ejs', //render views/edit.ejs
		{
			//pass in an object that contains
			fruit: fruits[req.params.indexOfFruitsArray], //the fruit object
			index: req.params.indexOfFruitsArray //... and its index in the array
		}
	);
});

// Put Route
app.put('/fruits/:indexOfFruitsArray', (req, res) => {
	//:indexOfFruitsArray is the index of our fruits array that we want to change
	if (req.body.readyToEat === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false;
	}
	fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
});

app.listen(3001, () => {
	console.log('I am listening on port 3001');
});
