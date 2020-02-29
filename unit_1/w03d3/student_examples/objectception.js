const adventurer = {
    name: "tim",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "velma",
        type: "bat"
    }
}
// console.log(adventurer.belongings);
adventurer.belongings.push("vogue magazine");
// for (let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i]);
// }

// console.log(adventurer.companion.name);
// console.log(adventurer.name);
adventurer.companion.name = "susan";
// console.log(adventurer.companion.name);
adventurer["companion2"] = {
    name: "bob",
    type: "insect"
}

adventurer.companion.companion = {
    name: "tim",
    type: "parasite"
}
// console.log(adventurer);
// console.log(adventurer.companion.companion.type);
adventurer
    .companion
        .companion
            .belongings = [
                "scuba tank", 
                "rogan josh",
                "health insurance"
            ];
// console.log(adventurer.companion.companion);
// console.log(adventurer.companion.companion.belongings);






const movies = [
    {
        title: "tokyo ghoul"
    },
    {
        title: "paul blart"
    },
    {
        title: "a quiet place"
    }
]

// console.log(movies[0].title);

// for (let i = 0; i < movies.length; i++){
//     console.log(movies[i].title)
// }

const monster = {
    name: "slimer",
    age: 6
}
const somevar = "name";

// console.log(monster[somevar]);

// const movie = { 
//     title: "L'Avventura", 
//     director: "Michelangelo Antonioni", 
//     year: 1960 
// }

// for (let key in movie){
//     console.log(key)
// }
// for (let key in movie){
//     console.log(movie[key]);
// }

// create an array of object keys
// const keysarray = Object.keys(movie)
// console.log(keysarray);

// for (let i = 0; i < keysarray.length; i++){
//     console.log(movie[keysarray[i]]);
    
// }

const movie = { 
    title: "Eraserhead", 
    director: "David Lynch", 
    year: 1978 
}

for (let key in movie){
    console.log(movie[key]);
}

const moviekey = Object.keys(movie)
for (let i = 0; i < moviekey.length; i++){
    console.log(movie[moviekey[i]]);
    
}

const challenge = [
	{ title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
	{ title: "Eraserhead", director: "David Lynch", year: 1978 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 }
]

const moviesObj = {};

const challengeKey = Object.keys(challenge);