// const sayHello = () => {
//     console.log("hello world");
// }

// sayHello();

// const printSum = () => {
//     console.log(10 + 10);
// }

// const printTriangle = (num) => {
//     let arr = [];
//     for (let i = 1; i <= num; i++){
//         arr += "#";
//         console.log(arr);
//     }
// }
// printTriangle(5);

// const minusONe = (num) => {
//     console.log(num - 1);
// }
// minusONe(8);

// const makeSentence = (word1, word2, word3) => {
//     console.log(word1 + " " + word2 + " " + word3);
// }
// makeSentence("I", "want", "food");

// const palindrome = (word) => {
//     // check if you can reverse string
//     console.log(word.reverse);
//     // if statement string = string.reversee
//     // if true then return true
//     // else return false
// }

// const compareString = (str1, str2) => {
//     if (str1 === str2) {
//         return true;
//     }
//     return false;
// }

// console.log(compareString("hello", "hell"));

// const turnNumsToString = (num1, num2, num3) => {
//     // how to convert number to string
//     // take three params and sum
//     // convert sum to string
//     return (num1 + num2 + num3).toString();
// }
// console.log(turnNumsToString(1, 2, 3));




///////////////////////////////////
// SCOPE STUFF
const firstName = () => {
    return "leo";
}
const fullname = () => {
    return firstName() + " mendo";
}
console.log(fullname());

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// recursion
const countdown = (num) => {
    if(num != 0){
        console.log(num);
        countdown(num - 1 );
    } else {
        return
    }
}
countdown(5);


// pallindrome
const reverseString = (string) => {
    if (string === string.split("").reverse().join("")){
        return true;
    }
    return false;
}
console.log(reverseString("poop"));

const match = (string1, string2) => {
    if (string1 === string2){
        return true;
    } 
    return false;
}

console.log(match("hello", "helo"));

const numArray = [1, 2, 3];
const arrayToString = numArray => {
    total = 0;
    for(let i = 0; i < numArray.length; i++){
        total += numArray[i];
    }
    console.log(total.toString());

}
arrayToString(numArray);

