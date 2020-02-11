console.log('OOp');

const host = {
	name: 'madeline',
	occupation: "creator of Roget's Thesaurus",
	saySpecs: `My name is ${this.name}. My occupation is ${this.occupation}`
};

// console.log(host);

class BasicHost {
	constructor(name, occupation) {
		this.name = name;
		this.occupation = occupation;
	}

	saySpecs() {
		console.log(`My name is ${this.name}. My occupation is ${this.occupation}`);
	}
}

const host1 = new BasicHost('Roget', 'creator of the Roget');
const host2 = new BasicHost('Dorothy', 'stable keeper');
console.log(host1, host2);
host1.saySpecs();
host2.saySpecs();

const names = [
	'Laila',
	'Jack',
	'Harley',
	'Hertha',
	'Darren',
	'Jolene',
	'Loura',
	'Lona',
	'Davida',
	'Reena',
	'Leland',
	'Ta',
	'Jen',
	'Linn',
	'Roslyn',
	'Margorie',
	'Rafaela',
	'Romona',
	'Shanel',
	'Stan'
];

const occupations = [
	'Clerical assistant',
	'Leaflet distributor',
	'Landowner',
	'Special constable',
	'Anaesthetist',
	'Park-keeper',
	'Butler',
	'Choreographer',
	'Blacksmith',
	'Chef',
	'Legal secretary',
	'Song writer',
	'Librarian',
	'Landscape gardener'
];

const hostArray = [];

for (let i = 0; i < 100; i++) {
	let random = Math.floor(Math.random() * Math.floor(occupations.length));
	hostArray.push(new BasicHost(names[random], occupations[random]));
}

hostArray[55].saySpecs();
