// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 30040;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud';

app.use(express.json());

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => console.log('MongoDB connection established:', mongoURI));

// Error / Disconnection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Routes
// app.use('/animals', animalsController);

app.listen(PORT, () => {
	console.log("Let's get things done on port", PORT);
});
