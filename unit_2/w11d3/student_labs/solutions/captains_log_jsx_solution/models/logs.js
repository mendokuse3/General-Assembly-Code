// import mongoose
const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema(
	{
		title: { type: String },
		entry: { type: String },
		shipIsBroken: { type: Boolean, required: true }
	},
	{ timestamps: true }
);

const Logs = mongoose.model('Logs', LogsSchema);

module.exports = Logs;
