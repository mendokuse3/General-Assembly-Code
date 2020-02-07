// function sayHello(){
//     console.log("hello world");
// }
// sayHello();

// const sayHello = function(){
//     console.log("Hello World");
// }

// sayHello();


// const printSum = () => {
//     console.log(10 + 10);
// }

// printSum();

// function printSum(){
//     console.log(10 +10);
// }

// printSum();

// const printTriangle = function(){
//     let hash = "";
//     for (let i = 0; i < 5; i++){
//         hash += "#";
//         console.log(hash);
//     }
// }

// printTriangle();

// const checkInputLength = (input) => {
// 	if (input.length > 10) {
// 		console.log('input length is greater than 10');
// 	} else {
// 		console.log('input length is not greater than 10');
// 	}
// };

// checkInputLength("Michael DiChello");

// const sayName = (name) => {
// 	console.log(`Hello! My name is ${name}`);
// }

// sayName("Frodo");
// sayName("Mike");


// const minusOne = function(num){
//     console.log(num - 1);
// }

// minusOne(10);        
// minusOne(100);       
// minusOne(Infinity);  


// const makeSentence = (a, b, c) => {
//    return console.log(`Oh Boy, do ${a} ${b} ${c} or what?`);
// }

// makeSentence('I', 'want', 'chimichangas');

// const getLastElement = function(arr){
//     console.log(arr[arr.length - 1]);
// }
// getLastElement([1, 2, 3, 4, 5, 6]);       
// getLastElement(['a', 'b', 'c']);          
// getLastElement([[1, 2, 3], [4, 5, 6]]); 

// const checkPallendrome = function(word) {
//     if (word === word.split('').reverse().join('')){
//         return console.log(`${word} is a pallendrome!`);
//     }
//         return console.log(`${word} is not a pallendrome`);
//     }

//     checkPallendrome('racecar');
//     checkPallendrome('michael dichello');

const checkIdentical = function(first, second){
    return first === second ? true : false;
}

console.log(checkIdentical("fart", 'boy'));