// const arr = [];

// console.log(arr);

// const favFoods = ["pizza", "tacos", "ice cream"];
// console.log(favFoods);

// const num = 0;
// const str = 'strings are cool';
// const bool = true;
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof arr);

// console.log(Array.isArray(arr));

// const ghostBusters = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];

// console.log(ghostBusters[ghostBusters.length -1]);

// const numbers = [21, 18, 5, 3, 2, 1, 1];

// numbers[2] = null;
// console.log(numbers[2]);

// numbers[0] *= 10;
// console.log(numbers[0]);

// const shortArray = ['first', 'middle', 'last'];
// console.log(shortArray[Math.floor(shortArray.length/2)]);


// const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];

// for (let i = 0; i < kitchenSink.length; i++){
//     console.log("this is in my sink: " + kitchenSink[i]);
// }

// const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
// for (let i = 0; i < drSeuss.length; i++){
//     console.log(drSeuss[i]);
// }

// for (let i = 1; i < drSeuss.length; i+= 2){
//     console.log(drSeuss[i]);
// }

// for (let i = 1; i < drSeuss.length; i+= 2){
//     console.log(drSeuss[i] + " " + i);
// }

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// for (let i = 0; i < looneyTunesChars.length; i++){
//     if (i % 2 === 0){
//         console.log(looneyTunesChars[i]);
//     }
// }

// for (let i = 0; i < looneyTunesChars.length; i++){
//     if (i % 2 === 0 || i === 3){
//         console.log(looneyTunesChars[i]);
//     }
// }

// for (let i = 0; i < looneyTunesChars.length; i++){
//     if (i % 2 === 1){
//         console.log(looneyTunesChars[i]);
//     }
// }


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.slice(2, 8));

// let store = array.splice(2, 3);
// console.log(array);
// console.log(store);

const confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg", ["kitkat bar 1", "kitkat bar 2", 'kitkat bar 3', "kitkat bar 4"]]];
console.log(confectionary[1][2][0]);