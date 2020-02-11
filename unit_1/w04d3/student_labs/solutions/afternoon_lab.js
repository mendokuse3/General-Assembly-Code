class Pet {
	constructor(owner, name) {
		this.name = name;
		this.owner = owner;
	}

	walk() {
		console.log('walka walka');
	}
}

// const shrimp = new Pet('tom', 'shrimp');
// shrimp.walk();

class Dog extends Pet {
	constructor(owner, name, price) {
		super(owner, name);
		this.price = price;
	}

	bark() {
		console.log('bark');
	}

	chaseTail() {
		console.log('Oh boy oh boy');
	}

	getPrice() {
		return this.price;
	}

	getName() {
		console.log(this.name);
	}
}

const newDog = new Dog('tom', 'shrimp', 5);
// console.log(newDog.getPrice());
// newDog.chaseTail();
// console.log(newDog.name);
// newDog.getName();
// newDog.name = 'teeny';
// newDog.getName();

class Cat extends Pet {
	constructor(owner, name, price) {
		super(owner, name);
		this.price = 10;
	}

	purr() {
		console.log('purr');
	}

	clean() {
		console.log('cleaning');
	}

	getPrice() {
		return this.price;
	}

	walk() {
		console.log('strut strut');
	}
}
const teeny = new Cat();
// teeny.walk();
// teeny.clean();
// teeny.purr();
// console.log(teeny.getPrice());
// teeny.purr = () => {
// 	console.log('LOVE YOU');
// };

// teeny.purr();

// -------------
// DECK OF CARDS
// -------------

class Card {
	constructor(value, face, suit, faceUp = false) {
		this.value = value;
		this.face = face;
		this.suit = suit;
		this.faceUp = faceUp;
	}
}

class cardFactory {
	constructor() {
		this.deck = [];
	}

	generateCards(value, face, suit, faceUp = false) {
		const newCard = new Card(value, face, suit, faceUp);
		this.deck.push(newCard);
	}

	listCards() {
		for (let i of this.deck) {
			console.log(i);
		}
	}
}

let factory = new cardFactory();
factory.generateCards('10', ':)', 'ace', false);
factory.generateCards('8', ':)', 'spades');

factory.listCards();
