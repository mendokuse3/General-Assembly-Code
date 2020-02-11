// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express();
const todosController = require('./controllers/todos.js');

// Environment Variables (getting ready for Heroku)

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud';
app.use(express.json());
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => console.log('MongoDB connection established:', mongoURI));

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use('/todos', todosController);

app.listen(PORT, () => {
	console.log("Let's get things done on port", PORT);
});
