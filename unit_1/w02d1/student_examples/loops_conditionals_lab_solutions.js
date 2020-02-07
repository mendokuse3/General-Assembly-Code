// CONCEPTUAL QUESTIONS
// 1. How do we assign a value to a variable? assignment operator
        // let a = 0; valid
        // const b = 1; valid
        // 9 = a; not
        // b = b + 5; not (const above)
// 2.How do we change the value of a variable? 
            // let a = 1
            //  a = 1 5
// 3. How do we assign an existing variable to a new variable? 
        // let a = 1;
        // leb b = a; 5

let  firstVariable = 'Hello World';
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = 'Hey dude!';
console.log(firstVariable);
// 6. value is 1

// STRINGS
let yourName = 'Mike'

console.log('hello, my name is ' + yourName);

// BOOLEANS
//   const a = 6;
//   const b = 100;
//   const c = -5;
//   const d = 3000;
//   const e = 'Jelly Bean';
// a < b;
// c < d;
// 'Peanut' === 'Peanut';
// a < b > c;
// a == a < d;
// e === 'Jelly Bean';
// 48 !== '48';
// 'e' > 'Eh'

// THE FARM
// let animal = 'cow'

// if(animal === 'cow') {
//     console.log ('moooo!');
// } else {
//     console.log("Hey! You/'re not a cow!");
// }

// Driver's Ed
// let age = 21

// if (age === 21) {
//     console.log("Here are my keys.");
// }else{
//     console.log("Sorry you are too young.");
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let j = 500; j >= 50; j--){
//     console.log(j);
// }

// Let's get odd
for(let oddNumber = 1; oddNumber <=100; oddNumber++) {
    if (oddNumber % 2 === 1) {
        console.log(oddNumber + " is an odd number." );
    }
}

// Give me five
for (let divFive = 0; divFive <= 100; divFive++) {
    if (divFive % 5 === 0) {
        console.log(`I found a ${divFive}. High Five!`);
    } else if (divFive % 3 === 0) {
            console.log(`I found a ${divFive}. Three is a crowd!`);
        }
}
// Savings account 