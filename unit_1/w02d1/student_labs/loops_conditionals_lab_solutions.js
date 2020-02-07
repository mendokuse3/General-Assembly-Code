// Conceptual questions:
// 1. We assign a value to a variable using equals sign
//     all of the following are valid:
//         let a = 0;
//         const b = 1;
        

//     9 = a; is not valid
//     b = b+5; is only valid if you previously declared the value of b using let
// 2. We change the value of the variable by reassigning it with an equals sign again
//    reassigning a from 0 to 1:
//     let a = 0;
//     a = 1;

// 3. We assign existing variable to new variable 
// let a = 1;
// let b = a;

// Strings activity 1:

// let firstVariable = "Hello World";
// console.log(firstVariable);

// firstVariable = 2;
// console.log(firstVariable);

// let secondVariable = firstVariable;
// console.log(secondVariable);

// secondVariable = "hello";
// console.log(firstVariable);
// console.log(secondVariable);

// let yourName = "Jane";
// console.log("Hello, my name is " + yourName);

// Booleans Activity

// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// console.log(a<b);
// console.log(c<d);
// console.log('Peanut' === 'Peanut');
// console.log(a && b > c);
// console.log(a < a+d);
// console.log(e === 'Jelly Bean');
// console.log(48 == '48');
// console.log('e' > 'Eh');

// The Farm

// let animal = 'goat';
// if(animal === 'cow'){
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow.");
// }

//Driver's Ed

// let age = 17
// if(age>=16){
//     console.log("Here are the keys");
// } else {
//     console.log("Sorry, you're too young");
// }

// Just Loop It

// for(i=0; i<=10; i++){
//     console.log(i);
// }

// for(i=500; i>=50; i--){
//     console.log(i);
// }

// Let's Get Odd
for(i=1; i<=100; i++){
    if(i%2!==0){
        console.log(i + " is an odd number");
}
}
