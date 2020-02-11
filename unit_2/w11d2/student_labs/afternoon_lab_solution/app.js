/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js.js');
const Vampire = require('./models/vampire.js.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
	console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// https://mongoosejs.com/docs/2.7.x/docs/query.html

// Vampire.insertMany(seedData, (err, vampires) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('added provided vampire data', vampires);
// 	mongoose.connection.close();
// });

// let myVampire = {
// 	name: 'Maxy',
// 	dob: new Date(937, 0, 24, 13, 0),
// 	hair_color: 'brown',
// 	eye_color: 'blue',
// 	loves: [ 'Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches' ],
// 	location: 'Transylvania, Romania',
// 	gender: 'f',
// 	victims: 1238
// };

// Vampire.create(myVampire, (error, vampire) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(vampire + ' was created!');
// 	}
// 	mongoose.connection.close();
// });

// Gender is female
// Vampire.find({ gender: 'f' }, 'gender', (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// Greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// Greater than 150 victims
Vampire.find({ victims: { $lt: 150 } }, (err, vamp) => {
	if (err) console.log(err);
	else {
		for (let item of vamp) {
			console.log(item.victims);
		}
	}
	mongoose.connection.close();
});

// have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		for (let item of vamp) {
// 			console.log(item.victims);
// 		}
// 	}
// 	mongoose.connection.close();
// });

// have greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		for (let item of vamp) {
// 			console.log(item.victims);
// 		}
// 	}
// 	mongoose.connection.close();
// });

// Exists
// key of title
// Vampire.find({ title: { $exists: true } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// no key of victims
// Vampire.find({ victims: { $exists: false } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// title and no key
// Vampire.find({ victims: { $exists: false }, title: { $exists: true } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

//have victims AND the victims they have are greater than 1000
// Vampire.find({ victims: { $exists: true, $gt: 1000 } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// Select with the Or operator

// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find(
// 	{
// 		$or: [ { location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' } ]
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// love brooding or being tragic
// Vampire.find({ $or: [ { loves: 'brooding' }, { loves: 'being tragic' } ] }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// have more than 1000 victims or love marshmallows
// Vampire.find({ $or: [ { victims: { $gt: 1000 } }, { loves: 'marshmellows' } ] }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// have red hair or green eyes
// Vampire.find({ $or: [ { hair_color: 'red' }, { eye_color: 'green' } ] }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
// Vampire.find({ $or: [ { loves: 'frilly shirtsleeces' }, { loves: 'frilly collars' } ] }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });
// love brooding
// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

//Negative Selection

// love ribbons but do not have brown eyes
// Vampire.find({ loves: 'ribbons', eye_color: { $ne: 'brown' } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// are not from rome
// Vampire.find({ location: { $ne: 'rome' } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
// 	{
// 		loves: {
// 			$nin: [ 'fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding' ]
// 		}
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// have not killed more than 200 people
// Vampire.find({ victims: { $lt: 200 } }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else console.log(vamp);

// 	mongoose.connection.close();
// });

// Replace
// Make sure claudia exists
// Vampire.create({ name: 'Claudia' }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });
// Vampire.find({ name: 'Claudia' }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

Vampire.findOneAndUpdate(
	{ name: 'Claudia' }, // search criteria of what to update
	{ $set: { name: 'Eve', portrayed_by: 'Tilda' } }, // how to update it
	{
		//options
		returnNewDocument: true,
		new: true,
		strict: false
	}, // tells findOneAndUpdate to return modified article, not the original
	(err, article) => {
		console.log(article);
	}
);

// Vampire.find({ name: 'Eve' }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// replace first male with GUy Man , whi has key is actually
// Vampire.findOneAndUpdate(
// 	{ gender: 'm' },
// 	{
// 		$set: {
// 			name: 'Guy Man',
// 			is_actually: 'were-lizard'
// 		}
// 	},
// 	{
// 		returnNewDocument: true,
// 		new: true,
// 		strict: false
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// Vampire.find(
// 	{
// 		name: 'Guy Man'
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// Updater
// Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate({ name: 'Guy Man' }, { gender: 'f' }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate({ name: 'Eve' }, { gender: 'm' }, (err, vamp) => {
// 	if (err) console.log(err);
// 	else {
// 		console.log(vamp);
// 	}
// 	mongoose.connection.close();
// });

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate(
// 	{ name: 'Guy Man' },
// 	{ $set: { hates: [ 'clothes', 'jobs' ] } },
// 	{ strict: false },
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );
// Vampire.find(
// 	{
// 		name: 'Guy Man'
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );
// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate(
// 	{ name: 'Guy Man' },
// 	{ $push: { hates: { $each: [ 'alarm clockes', 'jackalops' ] } } },
// 	{
// 		strict: false,
// 		returnNewDocument: true,
// 		new: true
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );
// Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate(
// 	{
// 		name: 'Eve'
// 	},
// 	{ $set: { name: 'Moniker' } },
// 	{
// 		strict: false,
// 		new: true
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.update(
// 	{
// 		gender: 'f'
// 	},
// 	{ $set: { gender: 'fems' } },
// 	{
// 		strict: false,
// 		new: true
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// Vampire.find(
// 	{
// 		gender: 'fems'
// 	},
// 	(err, vamp) => {
// 		if (err) console.log(err);
// 		else {
// 			console.log(vamp);
// 		}
// 		mongoose.connection.close();
// 	}
// );

// Remove

// Vampire.findOneAndRemove({ hair_color: 'Matt' }, (err, vamp) => {
// 	console.log(vamp); // log article that was removed
// 	mongoose.connection.close();
// });
// Vampire.remove({ eye_color: 'green' }, (err, response) => {
// 	console.log(response); //just tells you the action was successful
// 	mongoose.connection.close();
// });
