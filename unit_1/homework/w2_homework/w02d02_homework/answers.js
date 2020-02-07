//////////////////////////////////////
//       PART 1 HTML & CSS          //
//////////////////////////////////////
// HTML TAGS - 5
// Elements - 4
// CSS files - 5
// CSS Basics- 4

///////////////////////////////////////
//       PART 2 JAVASCRIPT REPS      //
///////////////////////////////////////

// EASY GOING

for (let i = 1; i <=20; i++) {
    console.log(i);
}

// GET EVEN

for ( i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// FIZZ BUZZ

for (i = 1; i <= 100; i++){
     if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
    }else if (i % 3 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }   
}

// WILD WILD LIFE

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;
wolfy.pop();
wolfy.push("Gothem City");
dart.push("Hawkins");
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

// Yell at the Ninja Turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let members;

for (members of ninjaTurtles) {
    console.log(`Hey, ${members}! Pizza is ready! Cowabunga!`);
}

// Methods Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 
                    'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 
                    'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
                    'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Tommy Boy");
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(15, 1, "Avatar");
let halfMovies = favMovies.slice(favMovies.length / 2, favMovies.length - 1);
console.log(favMovies);
console.log(halfMovies);

// Where is Waldo

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);

// Excited Kitten

for (let i = 0; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
}



const kittyFunc = (num = 20) => {
    let kittyTalk = ["...human...why you taking pictures of me?...",                         "...the catnip made me do it...",
                 "...why does the red dot always get away..."];

    const talk = "Love me, pet me! HSSSSSSS!"
    for(let i = 0; i < num; i++){
        if (i % 2 === 0) {
            console.log(kittyTalk[Math.ceil(((kittyTalk.length) - 1) * Math.random())]);
        } else {
            console.log(talk);
        }
    }
}
kittyFunc(20);

// Find the Medium

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
let median = nums[Math.ceil(nums.length / 2)];

console.log(median);
