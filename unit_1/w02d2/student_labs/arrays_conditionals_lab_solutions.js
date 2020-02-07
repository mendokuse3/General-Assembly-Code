// EASY DOES IT

let quotes = ["do or do not, there is no try", "Four score and seven years ago", "What's up doc?"];

// Random

const randomThings = [1, 10, "Hello", true];

// how do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello" to "World".
randomThings[2] = "world";
// Check the value of the array to make sure it updated the array.
console.log(randomThings);

// We've Got Class
const ourClass = ["Ada", "Zoom", "Github", "Slack"];
// What would you write to access the 3rd element of the array?
// ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat";
// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);

// Mix It Up
const myArray = [5 ,10 ,500, 20];

// myArray.push("Egon");
// myArray.pop();
// myArray.unshift("Bob Marley");
// myArray.shift();
// myArray.reverse();

// Biggie Smalls
// for (i = 0; i < myArray.length; i++){
//     if (myArray[i] <= 100){
//         console.log("little number");
//     }else{
//         console.log("BIG NUMBER");
//     }
// }

// Monkey in the Middle
// for (i = 0; i < myArray.length; i++){
//         if (myArray[i] < 5){
//             console.log("little number");
//         }else if(myArray[i] > 10) {
//             console.log("BIG NUMBER");
//         }else{
//             console.log("Monkey");
//         }
//     }

// What's in your Closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  for(let i = 0; i < kristynsCloset.length; i++){
      console.log(`Kristyn is rocking that ${kristynsCloset[i]} today!`);
  }


krystynShoe = kristynsCloset.shift();
kristynsCloset.splice(1, 6, "raybans");