const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurants.js');

router.get('/', (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.render('restaurants/Index', { restaurants });
  });
});

router.get('/new', (req, res) => {
  res.render('restaurants/New');
});

router.get('/:id', (req, res) => {
  Restaurant.findOne({ _id: req.params.id }).then(restaurant => {
    res.render('restaurants/Show', restaurant);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  Restaurant.create(req.body).then(() => {
    res.redirect('/');
  });
});

router.get('/edit/:id', (req, res) => {
  Restaurant.findOne({ _id: req.params.id }).then(restaurant => {
    res.render('restaurants/Edit', restaurant);
  });
});

router.put('/:id', (req, res) => {
  Restaurant.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  ).then(restaurant => {
    res.redirect(`/restaurants/${restaurant.id}`);
  });
});

router.delete('/:id', (req, res) => {
  Restaurant.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/restaurants');
  });
});

module.exports = router;
