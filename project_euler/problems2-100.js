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
