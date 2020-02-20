////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++){
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee[2] = 5001;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let value of turtles) {
    console.log(value.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
console.log(favMovies.unshift());
// this returns the "new" length of the array
// console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 1, "Avatar");
console.log(favMovies.length/2);
let slice = favMovies.slice(favMovies.length/2, favMovies.length);
console.log(slice);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));
// if something is not in the array, it returns -1

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1);
whereIsWaldo[1].splice(2, 1, "No One");
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
let rando = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        let rng = Math.floor(Math.random()*3);
        console.log(rando[rng]);
    } else {
        console.log("Love me, pet me! HSSSSS!");
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums[Math.ceil(nums.length/2)])