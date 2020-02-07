// const adventurer = {
//     belongings: ["sword", "potion", "tums"],
//     companion: {
//         name: "Velma",
//         type: "Bat"
//     }
// };

// adventurer.belongings.push("Vogue Magazine");

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// };

// adventurer.companion.name = "Susan";

// console.log(adventurer.companion.name);

// adventurer.companion2 = {
//     name: "Herbie",
//     type: "Insect"
// };

// console.log(adventurer);

// const movie = { 
//     title: "L'Avventura",
//     director: "Michelangelo Antonioni", 
//     year: 1960 
// };

// for (let item in movie) {
//     console.log(movie[item]);
// };

const movie2 = {
    title: "Eraserhead", 
    director: "David Lynch", 
    year: 1978 
};

for(let keys in movie2) {
    console.log(keys);
};

for(keys in movie2) {
    console.log(movie2[keys]);
};
