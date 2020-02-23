// VERBAL QUESTIONS
// 1. An argument is the input when you are calling the function.  the parameter is the input represented within the function
// 2. console.log simply prints to the console and is not useable.  return can make it so that the value of the function becomes whatever is returned and can be used within other functions.

// PALINDROME
const checkPalindrome = string => {
    if (string === string.split("").reverse().join("")){
        return true;
    }
    return false;
}
console.log(checkPalindrome("radar"));

// Sum Array
const sumArray = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return(sum);
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// PRIME NUMBERS
const checkPrime = number => {
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(64));

const printPrimes = number => {
    for (let i = 1; i <= number; i++){
        // let check = checkPrime(i);
        if (checkPrime(i)) {
            console.log(i);
        } 
    }
}

printPrimes(97);

// ROCK PAPER SCISSORS
const randomMove = () => {
    // set variable to assign math.random to generate between 0 - 2
    let rando = Math.ceil(Math.random() * 3);
    // assign rock, paper, and sciscor to 1-3
    // use if statement to assign if number then rock or whatever
    if (rando === 1){
        return "rock";
    } else if(rando === 2){
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(randomMove());

console.log("##############");
// assign user and computer variable to random move function
let usersMove = randomMove();
let computersMove = randomMove();

const rockPaperScissors = (usersMove, computersMove) => {
    let result;
    // print user move
    console.log("user chose " + usersMove);
    // print computer move
    console.log("computer chose " + computersMove);
    // compare moves
        // if result is draw
    if (usersMove === computersMove){
        result = "The result is a tie";
        return result;
    }
    // go through each: if user is __ and computer is __ then: 
    if (usersMove === "rock"){
        if(computersMove === "paper"){
            return "paper beats rock, computer wins";
        } else {
            return "rock beats scissors, user wins";
        }
    }
    if (usersMove === "paper"){
        if(computersMove === "rock"){
            return "paper beats rock, user wins";
        } else {
            return "scissors beats rock, computer wins";
        }
    }
    if (usersMove === "scissors"){
        if (computersMove === "rock"){
            return "rock beats scissors, computer wins";
        } else {
            return "scissors beats paper, user wins";
        }
    }

    // print winner or draw
}
console.log(rockPaperScissors(usersMove, computersMove));


