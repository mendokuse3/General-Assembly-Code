// problem 3
let largestNumber = 600851475143;
let primeFactor = 2;
// let primeNumbers = [];
while (largestNumber > 1) {
    if (largestNumber % primeFactor === 0){
        largestNumber /= primeFactor;
    } else {
        primeFactor++;
    }
}
console.log(primeFactor);
// assistance from https://medium.com/@popflorin1705/javascript-coding-challenge-4-d2d4f2852950

// problem 4
let palindrome = 1;
let product;
// 2 for loops, a and b until each equals 999
//  multiply together
// store product in variable
// variable .tostring() then .split/.reverse.join then store as parseInt()
for (let a = 1; a <= 999; a++){
    for (let b = 1; b <= 999; b++){
        if (Number((a*b).toString().split("").reverse().join("")) === (a*b)){
            product = a*b;
            if (product > palindrome) {
                palindrome = product
            }
        }
    }
}
console.log(palindrome);
// let number = (250).toString().split("").reverse().join("")
// console.log(Number(number))

// problem 5
let numberFive = 20;
let value = 20;
let smallerNumber;
// loop through decreasing from 20 to 2 where number % i = 0
// for (let i = 20; i > 1; i--){
//     if (numberFive % i === 0){

//     }
// }

const attempt = () => {
    if (numberFive % value === 0){
        value --;
        attempt();
    } else if(numberFive % value !== 0){
        numberFive ++;
    }
}