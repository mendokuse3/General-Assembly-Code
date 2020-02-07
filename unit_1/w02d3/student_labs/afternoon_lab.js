// Afternoon Lab

// Problem Solving
// maximum of Three Numbers

// const maxOfThree = (first, second, third) => {
//     return Math.max(first, second, third);
// }
// console.log(maxOfThree(92, 3, 12));

// Print Longest Word
const printLongestWord = (arr) => {
        let longest = '';
      for (i = 0; i < arr.length; i++) {
        if((arr[i].length) > longest.length){
          longest = arr[i];
        }
        return longest;
}
}


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max",                                "Peanutbutter", "big", "blob"]));