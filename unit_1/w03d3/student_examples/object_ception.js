const adventurer = {
	belongings: [ 'sword', 'potion', 'Tums' ],
	companion: {
		name: 'Velma',
		type: 'Bat'
	}
};

// adventurer.belongings.push('Vogue Magazine');

// for (let i = 0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// console.log(adventurer.companion.name);
// adventurer.companion.name = 'Susan';
// console.log(adventurer.companion.name);

// adventurer.companion2 = {
// 	name: 'Shrimp',
// 	type: 'Insect'
// };

// console.log(adventurer);

const movie = {
	title: "L'Avventura",
	director: 'Michelangelo Antonioni',
	year: 1960
};

for (let keys in movie) {
	console.log(keys);
}
const movie2 = { title: 'Eraserhead', director: 'David Lynch', year: 1978 };

for (let key in movie2) {
	console.log(key);
	console.log(movie2[key]);
}
