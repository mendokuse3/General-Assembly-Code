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


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
