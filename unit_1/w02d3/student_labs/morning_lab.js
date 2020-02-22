const calculateCube = (num) => {
    // volume of cube l x w x h
    // return value
    return (num * num * num);
}
console.log(calculateCube(2));

const isAVowel = (character) => {
    // store param in variable after converting to upper or lower case
    let letter = character.toLowerCase();
    // if charaacter is a, e, i, o u return true
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return true;
    }
    return false;
}

console.log(isAVowel("b"));

const getTwoLengths = (str1, str2) => {
    // store str1 length
    // store str2 length
    // return length 1 and 2
    let length1 = str1.length;
    let length2 = str2.length;
    let arr = [length1, length2]
    return arr;
}
console.log(getTwoLengths("hey", "hello"));

let array = ["Hello", "my", "name", "is", "slim"];
// const getMultipleLengths = (...strings) => {
//     // make empty array to hold lengths
//     // make for loop, looop through each array element and return length
//         // push length to empty array
//     for (i = 0; i < strings.length; i++){
//         let length = strings[i];
//         array.push(length);
//     }
//     console.log(array);
// }
const getMultipleLengths = (array) => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let store = array[i].length;
        arr.push(store);
    }
    return arr;
}
console.log(getMultipleLengths(array));