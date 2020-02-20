let quotes = ["めんどくさい", "死ね", "Like tears in the rain"];

// RANDOM
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings)

// WE'VE GOT CLASS
const ourClass = ["Ada", "Zoom", "Github", "Slack"];
console.log(ourClass[2]);
ourClass[2] = "Octocat";
ourClass.push("Cloud City");

// MIX IT UP
const myArray = [5 ,10 ,500, 20];
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();

// BIGGIE SMALLS
for (i = 0; i < myArray.length; i++){
    if (myArray[i] < 100){
        console.log("little number");
    } else {
        console.log("big number");
    }
}

// MONKEY IN THE MIDDLE
for (i = 0; i < myArray.length; i++){
    if (myArray[i] < 5){
        console.log("little number");
    } else if (myArray[i] > 10){
        console.log("big number");
    } else {
        console.log("monkey");
    }
}

// WHATS IN YOUR CLOSET
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

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
let kristynShoe = kristynsCloset.splice(0, 1);
kristynsCloset.splice(5, 0, "raybans");
kristynsCloset[4] = "stained knit hat";
console.log(kristynsCloset)

console.log(thomsCloset[0][1]);
console.log(thomsCloset[1][1]);
console.log(thomsCloset[2][1]);
console.log("Thom is looking spiffy in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and a " + thomsCloset[2][1]);

thomsCloset[1][2] = "Footie Pajamas";

// HUNGRY FOR MORE
const twoDArray = [
    [9,8,7],
    [6,5,4],
    [3,2,1],
];
for (let i = 0; i < twoDArray.length; i++){
    
}


const grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];