const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: String
});

const Animals = mongoose.model('Animals', animalSchema);

module.exports = Animals;