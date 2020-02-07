//SECTION 1

// What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// Don't Repeat Yourself. We should pay attention so that we are writing efficient code. for and while loops and variables

// What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
// Var is an outdated source to name variables. Let allows us to change the variables in the future, and const always has a constant, unchangeable value

// SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

// console.log(a < b)
// console.log(c >= d)
// console.log('Name' === 'Name')
// console.log(a <= b <= c)
// console.log(a == a != d)
// console.log(e != 'Kevin')
// console.log(48 == '48')
// console.log(f != e)

// let g = 0
// console.log(g)

// g = b + c
// console.log(g)



// Did you use const, let or var? Why did you choose the one you chose?
// I used let, because I knew 'g' was going to be a variable that was going to change.

//What happens if you don't use const , let or var? Do you get an error? If so what does it say?
 // I do not get an error. I wonder if CS code assumes the declaration?

 //what happens if you write 10 = g?
// 10 = g 
// console.log(g)
// I get the error 'ReferenceError: Invalid left-hand side in assignment'

//Bonus Challenge (optional):
//working
console.log(a > (b || f) === !f && e < c)


//SECTION 3

//Is the code below an infinite loop? Why or why not?
 // yes, there is nothing that changes the current state for it so it would console.log forever

 //Infinite loop II
//is this loop an infinite loop? Why or why not?
// Yes, const cannot change so the runprogram = false would do nothing to stop it

let letters = "A";
let i = 0;
// start a while loop that will run as long as i is less than 20
while (i < 20) {
    // change the value incrementally adding an "A" everytime the loop runs
    letters += "A";
    // increment i by 1
    i++;
    // this closes the while loop and it will run until i = 20
}
// print value of variable letters to console expected result is "A" with 20 more "A"s
console.log(letters);
// printed as expected the variable added another A to the string


// SECTION 4

//What are the three components of the control panel?
//The first part of the control panel is: initial condition
// The second part of the control panel is: while condition
// The third part of the control panel is: repeating expression

//Write a for loop that will console.log the numbers 0 to 999.

for(let i = 0; i < 1000; i++) {
    console.log(i);
}

// Bonus Challenge (optional):

// What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
// it cancels out the apostraphe so that it doesn't think its the close of the string

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for(i = 999; i >= 0; i--) {
    console.log(i);
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.

for(i = 1; i <= 10; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}

// BONUS 
//string interpolation
for(i = 1; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

//ITERATION

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for(i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
}

for(i = 0; i < StarWars.length; i++) {
    console.log(`Help me ${StarWars[i]}, you're my number ${i} hope`);

}

// BONUS
for(i = 0; i < StarWars.length; i+=2) {
    console.log(StarWars[i]);
}