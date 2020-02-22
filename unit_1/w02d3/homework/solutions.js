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