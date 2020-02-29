// ANSWER THE FOLLOWING
// 1. datatype: boolean
    // example: const lightIsOn = true;
// 2. datatype: string
    // ex: const userEmail = "mynameis@gmail.com"
// 3. datatype: array and strings
    // ex: const spaceship = ["hull", "laser blasters", .... ]
// 4. datatype: array and strings
    // ex: const class = ['name 1", 'name2', ...]
// 5. datatype: object, array, and strings
    // ex: const class = [{name: "name1", location: "location1"}, {name: "name2", location: "location2"}, ... ]
// 6. datatype: array, object, string
    // ex: const class = [{name: "name 1", location: "location 1", tvlist: ["show 1", "show 2"]}, {{name: "name 2", location: "location 2", tvlist: ["show 1", "show 2"]}]

// TAKE IT EASY
const rainbow = [
    "red", "orange", "yellow", "green", "blue", "purple"
]
console.log(rainbow[4])
const leo = {
    faveFood: "food",
    hobby: "Jiu-Jitsu",
    town: "Cypress",
    favDatatype: "string"
}
console.log(leo.hobby)

// CRAZY OBJECT
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
}
console.log(
    crazyObject.taco[1].salsa[5]
)  

console.log(
    crazyObject.larry.quotes[0]
);

console.log(
    crazyObject.larry.characters[2].favourtieHobby
);

console.log(
    crazyObject.larry.nicknames[1]
);

console.log(
    crazyObject.larry.characters[1]
);

crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(
    crazyObject.larry.quotes
);

