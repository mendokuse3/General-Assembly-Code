const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    } else if(num2 > num1 && num2 >num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
maxOfThree(5, 9, 9);

array = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"];
const printLongestWord = (array) => {
    let longestWord = "";
    for (let i = 0; i < array.length; i++){
        if (array[i].length > longestWord.length){
            longestWord = array[i];
        }
    } 
    return longestWord;
}
console.log(printLongestWord(array));


const transmorgify = (num1, num2, num3) => {
    // multiply first 2 nums
    let product = num1 * num2;
    // rais to power of third num
    let total = Math.pow(product, num3);
    // return result
    return total;
}
console.log(transmorgify(1, 2, 2));


const fibo = (num) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let firstNumber = 0;
    let secondNumber = 1;
    let placeholder = 1;
    let array = [];
    for (let i = 2; i <= num; i++){
        placeholder = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = placeholder;
        if ((placeholder % 2 === 0) && placeholder < 4000000) {
            array.push(placeholder);
        }
    }
    return array.reduce(reducer);
   
}
console.log(fibo(800));

let junkArray = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
const findNeedle = junkArray => {
    // loop through array
    let position;
    for (let i = 0; i < junkArray.length; i++){
        // match each array value to "needle"
        if (junkArray[i] === "needle") {
            // store position of needle
            position = i;
        }
    }
    // return found your needle at
    console.log("found the needle at position " + position);
}

findNeedle(junkArray);

let integerArray = [1, -4, -6, 20, 3, -3, 7, 12];
const positiveSum = integerArray => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let newArray = [];
    for (let i = 0; i < integerArray.length; i++){
        // check if value is positive
        if(integerArray[i] > 0) {
            // if positive add to new array
            newArray.push(integerArray[i]);
        }
    }   
    // sum new array
    return newArray.reduce(reducer);
}

console.log(positiveSum(integerArray));
