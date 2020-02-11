const movies = [
	{ title: "L'Avventura", director: 'Michelangelo Antonioni', year: 1960 },
	{ title: 'Eraserhead', director: 'David Lynch', year: 1978 },
	{ title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
	{ title: 'Dayereh', director: 'Jafar Panahi', year: 2000 }
];

let moveTitles = Object.keys(movies);
let moviesObject = {};
for (let i = 0; i < moveTitles.length; i++) {
	// console.log(movies[i]);
	moviesObject[movies[i].title] = {
		director: movies[i].director,
		title: movies[i].title
	};
}

console.log(moviesObject);
