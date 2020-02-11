const mongoose = require('mongoose');

const vegSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
});

const Vegetable = mongoose.model('vegetables', vegSchema);

module.exports = Vegetable;
