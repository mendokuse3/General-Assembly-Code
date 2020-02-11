// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js.js');

// =======================================
//              ROUTES
// =======================================

app.use(express.urlencoded({ extended: false }));

// index route
app.get('/bakedgoods', (req, res) => {
	// res.send(bakedGoods);
	res.render('index.ejs', {
		bakedGoods: bakedGoods
	});
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
	// res.send(bakedGoods[req.params.id]);
	res.render('show.ejs', {
		good: bakedGoods[req.params.id]
	});
});

app.get('/addnew', (req, res) => {
	res.render('new.ejs');
});

// post
app.post('/new', (req, res) => {
	// res.send(req.body);
	bakedGoods.push(req.body);
	res.redirect('/bakedgoods');
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
	console.log(`Biscoff Bakery app listening on port: ${port}`);
});
