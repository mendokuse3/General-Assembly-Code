const express = require('express');
const app = express();



// Import Mongoose
const mongoose = require('mongoose');

// Import logs schema
const Logs = require('./models/logs');

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Make a connection to Mongoose
mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true });

// Connect to mongoose
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

// Method Override
const methodOverride = require('method-override');

app.use('/css', express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	Logs.find({}, (error, allLogs) => {
		res.render('index', {
			logs: allLogs
		});
	});
});

app.get('/logs/new', (req, res) => {
	res.render('new.jsx');
});

app.post('/logs/', (req, res) => {
	if (req.body.shipIsBroken === 'on') {
		req.body.shipIsBroken = true;
	} else {
		req.body.shipIsBroken = false;
	}

	Logs.create(req.body, (error, createdLog) => {
		res.redirect('/');
	});
});

app.get('/logs/:id', (req, res) => {
	Logs.findById(req.params.id, (err, foundLog) => {
		console.log(foundLog);
		res.render('show.jsx', {
			log: foundLog
		});
	});
});

// Delete Route

app.delete('/logs/:id', (req, res) => {
	Logs.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect('/');
	});
});

// Edit Route
app.get('/logs/:id/edit', (req, res) => {
	Logs.findById(req.params.id, (err, data) => {
		res.render('edit.jsx', {
			log: data
		});
	});
});

// PUT ROUTE
app.put('/logs/:id', (req, res) => {
	if (req.body.shipIsBroken === 'on') {
		req.body.shipIsBroken = true;
	} else {
		req.body.shipIsBroken = false;
	}
	Logs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
		res.redirect('/');
	});
});

app.listen(3000, () => {
	console.log('GO AWF HONEY');
});
