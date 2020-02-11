const express = require('express');
const router = express.Router();
const Logs = require('../models/logs');

router.get('/logs', (req, res) => {
	Logs.find({}, (error, allLogs) => {
		res.render('index.ejs', {
			logs: allLogs
		});
	});
});

router.get('/logs/new', (req, res) => {
	res.render('new.ejs');
});

router.post('/logs/', (req, res) => {
	if (req.body.shipIsBroken === 'on') {
		req.body.shipIsBroken = true;
	} else {
		req.body.shipIsBroken = false;
	}

	Logs.create(req.body, (error, createdLog) => {
		res.redirect('/');
	});
});

router.get('/logs/:id', (req, res) => {
	Logs.findById(req.params.id, (err, foundLog) => {
		console.log(foundLog);
		res.render('show.ejs', {
			log: foundLog
		});
	});
});

// Delete Route

router.delete('/logs/:id', (req, res) => {
	Logs.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect('/');
	});
});

// Edit Route
router.get('/logs/:id/edit', (req, res) => {
	Logs.findById(req.params.id, (err, data) => {
		res.render('edit.ejs', {
			log: data
		});
	});
});

// PUT ROUTE
router.put('/logs/:id', (req, res) => {
	if (req.body.shipIsBroken === 'on') {
		req.body.shipIsBroken = true;
	} else {
		req.body.shipIsBroken = false;
	}
	Logs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
		res.redirect('/');
	});
});

module.exports = router;
