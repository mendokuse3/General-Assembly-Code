// Iron Man

const ironMan = {
	regularName: 'Anthony Edward "Tony" Stark',
	abilities: [ 'genius-level intellect', 'proficient scientist and engineer', 'powered armor suit' ],
	marvelMovieAppearances: {
		ironMan: true,
		theHulk: true,
		ironManTwo: true,
		thor: false,
		captainAmerica: false,
		theAvengers: true,
		ironManThree: true,
		thorTwo: false,
		captainAmericaTwo: false,
		guardiansOfTheGalaxy: false,
		avengersTwo: true,
		antMan: false,
		captainAmericaThree: true,
		doctorStrange: false,
		guardiansOfTheGalaxyTwo: false,
		spiderManHomecoming: false,
		thorThree: false,
		blackPanther: false,
		avengersThree: true
	},
	jarvisAreYouThere: () => {
		console.log('At your service, sir');
	}
};

// console.log(ironMan.abilities[2]);
// for (item of ironMan.abilities) {
// 	console.log(item);
// }
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.jarvisAreYouThere();

// Assembling other Avengers

const createCaptain = () => {
	return {
		aliases: {
			superHeroName: 'Captain America'
		},
		abilities: [ 'Be great', 'Do good', 'peak human strength' ],
		sayPhrase: () => {
			console.log('i can do this all day');
		}
	};
};

// console.log(createCaptain().aliases.superHeroName);
// console.log(createCaptain().abilities[2]);
// console.log(createCaptain().sayPhrase());

const blackWidow = {
	aliases: {
		realName: 'Natalia Alianovna Romanova'
	},
	otherNotableAliases: [ '', 'Natalie Rushman' ]
};

// console.log(blackWidow.aliases.realName);
// console.log(blackWidow.aliases.otherNotableAliases[1]);

// Avengers Nested
const theAvengers = [
	{ name: 'Tony Stark', superheroName: 'Iron Man' },
	{ name: 'Steve Rogers', superheroName: 'Captain America' },
	{ name: 'Bruce Banner', superheroName: 'The Hulk' },
	{ name: 'Thor' },
	{ name: 'Natasha Romanoff', superheroName: 'Black Widow' },
	{ name: 'Clint Barton', superheroName: 'Hawkeye' }
];

// for (item of theAvengers) {
// 	console.log(item.name);
// }

// MCU Movies

const mcuMovies = [
	[ 'ant-man', 'ant-man and the wasp' ],
	[ 'the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game' ],
	[ 'black panther' ],
	[ 'captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war' ],
	[ 'doctor strange' ],
	[ 'guardians of the galaxy', 'guardians of the galaxy vol.2' ],
	[ 'the hulk' ],
	[ 'iron man', 'iron man 2', 'iron man 3' ],
	[ 'spiderman: homecoming' ],
	[ 'thor', 'thor: the dark world', 'thor: ragnarok' ]
];

// for (item of mcuMovies) {
// 	for (i of item) {
// 		console.log(i);
// 	}
// }

//Other Objects - Intstruments
const instruments = {
	banjo: [ '1920 gibson', 'deering', 'washburn' ],
	guitar: {
		acoustic: [ 'martin', 'taylor', 'santa cruz', 'gibson' ],
		electric: [ 'fender Strat', 'telecaster', 'PRS', 'languedoc' ],
		nylon: [ 'baldwin', 'cordoba' ]
	},
	mandolin: [ 'eastman', 'weber', 'collings' ]
};

// console.log(instruments.guitar.electric[1]);
// console.log(instruments.guitar.acoustic[2]);
// console.log(instruments.banjo[2]);
// console.log(instruments.mandolin[1]);

// for (guitar of instruments.guitar.electric) {
// 	console.log(guitar);
// }

// instruments.vocals = [ 'Mariah Carey', 'Beyonce' ];
// console.log(instruments);

// Garmonbozia
const garmonbozia = {
	meltedFace: true,
	wobblyArms: true,
	mysteryMeats: [
		'Schlimmbinooks',
		'blangs',
		{ place: 'Akrotiri', treasures: [ 'Minoan temples', 'volcanoes' ] },
		{
			type: 'Yuck-tops',
			deliverables: [
				'Nevermind',
				{ zone: 'safety-zone' },
				{ zone: false, true: true },
				() => {
					return () => {
						return () => {
							return () => {
								return () => {
									return {
										website: 'Gossipcop.com',
										what: {
											offering: 'creamed corn',
											location: 'dark'
										}
									};
								};
							};
						};
					};
				}
			]
		}
	]
};

// console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering);
