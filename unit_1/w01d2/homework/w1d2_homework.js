// Section 1
// 1. DRY stands for Don’t Repeat Yourself. We should pay attention to it because it will enable us to write more efficient code. We have learned programming tools such as while loops and for loops, so that we can create a series of actions without repeating a similar line of code over and over again.
// 2. Var is mutable (can be reassigned) and has global scope (accessible in any block). Let is mutable and block scoped (only works in the block it is located). Const is immutable (can’t be reassigned) and block scoped.

// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a<d);
console.log(e !== 'Kevin');
console.log(48 !== '48');
console.log(f !== e);

let g = 0;
console.log(g);
g = (b+c);
console.log(g);

// I used let because it allows g to be reassigned to a different expression.
// If I don’t use let, the code does still run without an error. I am surprised that it still ran.
// If I write 10 = g, instead of reassigned g the value of 10, I'm creating a new variable 10 and assigning it to g. This would give me an error message because I can't name a variable with a number.

// Bonus: 
console.log(a < (b || f) === !f && e.length < c);
//e.length == 6

// Section 3:
// Yes, this is an infinite loop: there is nothing in the code to stop itself (the “while” condition will remain true forever)
// Yes, this is an infinite loop as well: because const is used for the runProgram variable, it can’t be reassigned to false, so it will remain true and the program will keep running infinitely.

let letters = "A";
let i = 0;
// start a while loop that will run as long as i is less than 20
while (i < 20) {
// add an additional “A” to the variable “letters”
letters += "A";
//increases the value of I by 1
i++;
//closes while loop, so the code inside will run until I=20
}
//logs “AAAAAAAAAAAAAAAAAAAAA” (21 As) to the terminal window
console.log(letters);

// Yes, the code ran as expected and logged 21 As.

// Section 4
// A for loop and a while loop both are ways of automatically repeating blocks of code. They both run during certain declared conditions.
// The difference between these types of loops is that a for loop condenses the information controlling the loop into the beginning syntax, whereas a while loop does each of these things in separate places.
// The control panel consists of (initial condition; while condition; repeating expression)

for (i=0; i<=999; i++){
	console.log(i);
}

// Bonus:
// console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// console.log("Without you, today's emotions are the scurf of yesterday's");
// Backslash in the first example example prevents the apostrophe in the phrase from being interpreted as the end of a string.
// In the second example, double quotes are used to define the string, so the apostrophe can be used without backslash.

for (i=999; i>=0; i--){
	console.log(i);
}

for (i=1; i<=10; i++){
	console.log("The value of \i is " + i);
}

// Bonus: using string interpolation
for (i=1; i<=10; i++){
	console.log(`The value of i is ${i}`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i=0; i<=5; i++){
console.log(StarWars[i]);
}

for (let i=0; i<=5; i++){
	console.log(`${StarWars[i]}: this is the ${i} iteration`);
}

// Bonus: iterate over every second element
for (let i=0; i<=5; i+=2){
	console.log(StarWars[i]);
}
