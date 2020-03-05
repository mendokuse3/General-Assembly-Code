// const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];

// const updatedIceCreams = iceCreams.map((flavor) => {
//     return flavor + " Ice Cream";
// })

// console.log(updatedIceCreams);

// const numberArray = [2,4,6,8,10];

// const unoriginalArray = numberArray.map((num) => {
//     return num * 2;
// })
// console.log(unoriginalArray)

const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

// the callback (comparefunction) can be any function that defines the sort order
numberArray.sort((a, b) => {
    return a - b;
  }
)
console.log(numberArray)