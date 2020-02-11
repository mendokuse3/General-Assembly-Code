const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
	{
		title: String,
		body: String,
		author: String,
		likes: { type: Number, default: 0 },
		deleted: { type: Boolean, default: false }
	},
	{ timestampes: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
