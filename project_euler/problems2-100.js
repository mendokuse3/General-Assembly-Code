// // problem 3
// let largestNumber = 600851475143;
// let primeFactor = 2;
// // let primeNumbers = [];
// while (largestNumber > 1) {
//     if (largestNumber % primeFactor === 0){
//         largestNumber /= primeFactor;
//     } else {
//         primeFactor++;
//     }
// }
// console.log(primeFactor);
// // assistance from https://medium.com/@popflorin1705/javascript-coding-challenge-4-d2d4f2852950

// // problem 4
// let palindrome = 1;
// let product;
// // 2 for loops, a and b until each equals 999
// //  multiply together
// // store product in variable
// // variable .tostring() then .split/.reverse.join then store as parseInt()
// for (let a = 1; a <= 999; a++){
//     for (let b = 1; b <= 999; b++){
//         if (Number((a*b).toString().split("").reverse().join("")) === (a*b)){
//             product = a*b;
//             if (product > palindrome) {
//                 palindrome = product
//             }
//         }
//     }
// }
// console.log(palindrome);
// // let number = (250).toString().split("").reverse().join("")
// // console.log(Number(number))

// // problem 5
// let numberFive = 50;
// let range = 10;

// // loop through decreasing from 20 to 2 where number % i = 0
// // for (let i = 20; i > 1; i--){
// //     if (numberFive % i === 0){

// //     }
// // }

// // this works for smaller range like 10 but works by claling function range number of times
// // const attempt = () => {
// //     for (let i = range; i > 1; i--){
// //         if (numberFive % i === 0){
// //             console.log(i);
// //         } else if(numberFive % i !== 0){
// //             numberFive ++;
// //             attempt();
// //         }
// //     }
// //     console.log(numberFive);
// // }


// // problem 6
// // sum numbers 1 - 100 and square
// const squareOfSums = () => {
//     let num = 0
//     for (let i = 1; i <= 100; i++){
//         num += i;
//     }
//     return num ** 2
// }
// // squaer numbers 1 - 100 and then sum
// const sumOfSquares = () => {
//     let num = 0
//     for (let i = 1; i <= 100; i++){
//         num += i ** 2;
//     }
//     return num;
    
// }
// console.log(squareOfSums() - sumOfSquares());

// problem 8
const number8 = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
const array8 = number8.split("");
const newArray = [];
const findAdjacentDigits = () => {
    for (let i = 0; i < array8.length; i++){
        newArray.push(Number(array8[i]))
    }
    let largestProduct = 1;
    let product8;
    let a = 0;
    let b = 12;
    let digit;
    for (let j = 0; j < newArray.length; j++){
        product8 = 1;
        for (let i = a; i <= b; i++){
            product8 *= newArray[i];
        }
        if (product8 > largestProduct){
            largestProduct = product8;
            digit = j;
        }
        a++;
        b++;
    }
    
    
    for (let i = 0; i < 13; i++){
        console.log(newArray[digit + i])
    }
    
    console.log(product8);
    console.log(largestProduct);
    // console.log(a);
    // console.log(b);
}
findAdjacentDigits();
    
// problemt 9






