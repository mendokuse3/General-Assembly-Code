const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables.js');

router.get('/', (req, res) => {
	Vegetable.find({}, (error, allFruits) => {
		res.render('Index', {
			page: 'vegetables',
			fruits: allFruits
		});
	});
});

router.get('/seed', (req, res) => {
	Vegetable.create(
		[
			{
				name: 'tomatoes',
				color: 'red',
				readyToEat: true
			},
			{
				name: 'carrot',
				color: 'orange',
				readyToEat: false
			}
		],
		(err, data) => {
			res.redirect('/vegetables');
		}
	);
});

router.get('/new', (req, res) => {
	res.render('New');
});

router.post('/', (req, res) => {
	if (req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	Vegetable.create(req.body, (error, createdFruit) => {
		res.redirect('/vegetables');
	});
});

router.get('/:id', (req, res) => {
	Vegetable.findById(req.params.id, (err, foundFruit) => {
		res.render('Show', {
			fruit: foundFruit
		});
	});
});

router.delete('/:id', (req, res) => {
	Vegetable.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect('/vegetables');
	});
});

router.get('/:id/edit', (req, res) => {
	Vegetable.findById(req.params.id, (err, foundFruit) => {
		res.render('Edit', {
			page: 'vegetables',
			fruit: foundFruit
		});
	});
});

router.put('/:id', (req, res) => {
	if (req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
		res.redirect('/vegetables');
	});
});

module.exports = router;
