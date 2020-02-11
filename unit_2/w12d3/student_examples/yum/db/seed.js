const Restaurant = require('../models/Restaurants');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

Restaurant.deleteMany({})
  .then(() => {
    return Restaurant.collection.insertMany(data);
  })
  .then(() => {
    process.exit();
  });
