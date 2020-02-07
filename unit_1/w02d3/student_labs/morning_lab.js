// calculate the cube
const calulateCube = (num) => {
    return num * num * num; 
}
console.log(calulateCube(5));


// Is a vowel?

const vowels = ["a", "e", "i", "o", "u"];

function isAVowel(letter){
    if (vowels.indexOf(letter.toLowerCase()) !== 1) {
        return true;
    }
        return false;
}

console.log(isAVowel("i"));


// Get Two Lengths

const getTwoLengths = (str1, str2) => {
    let arr = [str1.split('').length, str2.split('').length];
    return arr;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// Get Multiple Lenths

const getMultipleLengths = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split('').length);
    }
    return newArr;
}

// console.log(getMultipleLengths([ 'hello', 'what', 'is', 'up', 'dude' ]));

// function sqRT(num) {
//     return Math.sqrt(num) % 1 === 0 ? true : false;
//   }

//   const checkToLimit = (num) => {
//     for( let i = 0; i < num; i++) {
//         console.log(`Is ${num} a perfect square? ${sqRt(i)}`);
//     }
//  }
//  checkToLimit(100);


// for ( let i = 0; i <100; i++) {
//     console.log(i);
// }
// console.log(i);

// const age = 21;
// let message = '';

// if (age < 21) {
// 	message = 'You cannot buy the beer';
// } else {
// 	message = 'You can buy the beer';
// }

// console.log(message);
