// CONCEPTUAL QUESTIONS
// 1. we assign value to a variable by first declaring the variable, and then setting it equal to a value.  the first 2 and the 4th lines are valid
// 2. we change the value of a variable that has already been declared by simply setting the variable to be equal to a different value.  i.e. let x = 10; and then later: x=5;
// 3. you would declare a new variable and set its value equal to the preexisting variable

// STRINGS ACTIVITY 1
let firstVariable = "Hello world";
firstVariable = 3;
let secondVariable = firstVariable;
secondVariable = "I'm a string";
// firstVariable value is 3

let yourName = "Leo";
console.log("Hello my name is " + yourName);

// BOOLEANS ACTIVITY
const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

console.log(a < b);
console.log(c < d);
console.log('Peanut' === 'Peanut')
console.log(a < b > c);
console.log(a !== a < d);
console.log(e === "Jelly Bean");
console.log(48 == "48");
console.log("e" !== "Eh");

// THE FARM
let animal = "pig";
if (animal === "cow"){
    console.log("moo");
} else {
    console.log("Hey you're not a cow");
}

// DRIVERS ED
let age = 15;
if (age >= 16) {
    console.log("Here are the keys");
} else {
    console.log("sorry you're too young");
}

// JUST LOOP IT
for (let i = 0; i <= 10; i++){
    console.log(i);
}

for (let i = 500; i >= 50; i--){
    console.log(i);
}

// LETS GET ODD
for (let i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        console.log(i + " is an odd number");
    }
}

// GIVE ME FIVE
for (let i = 0; i <= 100; i++){
    if (i % 5 === 0){
        console.log("I found a " + i + ". High five!");
    } else if (i % 3 === 0){
        console.log("I found a " + i + ". Three is a crowd!");

    }
}

let sum = 0;
for (let i = 1; i <= 1000; i ++){
    if (i % 5 === 0){
        sum += i;
    } else if (i % 3 === 0){
        sum += i;
    }
}
console.log(sum);

// SAVINGS ACCOUNT
let bank_account = 0;
for (let i = 1; i <= 10; i++){
    bank_account += i;
}

let bank_account2 = 0;
for (let i = 1; i <= 100; i++){
    bank_account2 += i*2;
}

// FIBONACCI
let firstNumber = 0;
let secondNumber = 1;
let placeholder = 1;
let total = 0;
let num = 33;
for (let i = 1; i <= num; i++) {
    placeholder = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = placeholder;
    if ((placeholder % 2 === 0) && placeholder < 4000000){
        total += placeholder;
    }
}
// had to look up how to do 


// CHECKERBOARD
var boardSize = 20; 

var board = "";

for (var y = 0; y < boardSize/2; y++) { 
  for (var x = 0; x < boardSize; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
// had to look up how to do https://stackoverflow.com/questions/30225678/how-do-i-solve-the-eloquent-javascript-chess-board/30225774



// if (i % 2 === 0) {
//     console.log("# ");
// } else if (i % 2 !== 0){
//     console.log(" #");
// }