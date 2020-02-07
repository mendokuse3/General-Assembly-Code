// JS Function Drills - Problem Solving

// 1. a paramenter is a placeholder in a function an argument is a value
// 2. return saves the value and stops the function, console.log prints to the console.


// Palindrome

function checkPalindrome(word) {
    const res = word.toLowerCase();
    return res.split('').every((char, i) => {
        return char === res[res.length - i -1];
    });
}

console.log(checkPalindrome('Radar'));
console.log(checkPalindrome("Borscht"));


// Sum Array

let sum = 0
const sumArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers


function checkPrime(maybePrime) {
    if (maybePrime <2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(maybePrime); i++) {
        if (maybePrime % i === 0) {
            return false;
        } 
    }
    return true;
}

const printPrime = (maybePrime) => {
    for (let j = 0; j <= maybePrime; j++){
        if(checkPrime(j) === true){
            console.log(j);
        }

    }
}

printPrime(97);

// Rock Paper Scissors

const move = ["Rock", "Paper", "Scissors"];

const randomMove = () => {
    return (move[Math.floor(((move.length)) * Math.random())]);
}

let computersMove = randomMove();

let usersMove = randomMove();

function rockPaperScissors(computersMove, usersMove) {
    console.log(`Computer throws ${computersMove}`);
    console.log(`User throws ${usersMove}`);
    if (computersMove === usersMove){
        console.log("It's a tie.");
    }else if (computersMove === "Rock") {
        if (usersMove === 'Scissors'){
            console.log(`Computer wins! Rock beats Scissors`);
        }else{
            console.log(`User wins! Paper beats Rock`);
        }
    }else if (computersMove === 'Paper') {
        if (usersMove === 'Scissors'){
            console.log(`User Wins! Scissors beats Paper`);
        }else{
            console.log('Computer Wins! Paper beats Rock');
        }
    }else if (computersMove === 'Scissors') {
        if (usersMove === 'Rock'){
            console.log('User Wins! Rock beats Paper');
        }else{
            console.log('Computer Wins! Scissors beats Paper');
        }
    }
    }

rockPaperScissors(computersMove, usersMove);