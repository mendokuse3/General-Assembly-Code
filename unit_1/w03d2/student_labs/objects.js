// ME ME ME
const me = {
    firstName: "leo",
    lastName: "mendo",
    age: 24,
    email: "mendo@kusai.com"
}

console.log(me.firstName);
me.age = 1000;
console.log(me.age);
me["place of residence"] = "Kanagawa";
console.log(me["place of residence"]);

// FANCY GREETING
const fancyGreeting = (me) => {
    console.log("Greetings " + me.firstName + " " + me.lastName);
}

fancyGreeting(me);

// SLIMER
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }
 console.log(monster.name);
monster.type = "creature";
monster["age"] = 6;
console.log(monster);

// OGRES
const adventurer = {
    name: "hero",
    hp: 10,
    weapon: "magic"
}

const ogre = {
    hp: 10,
    weapon: "club"
}

const battle = () => {
    // check adventure hp
    // check ogre hp
    // if adventure hp is 0
    // game over
    // if ogre hp is 0
    // game over
    // number generator 1-10
    // prompt attack ogre?
    // if yes then attack ogre using generated number
    // if ogre health !== 0, ogre attack
    // check hp
}

// CAT COMBINATOR
const cat1 = {
    name: "mom",
    breed: "coon",
    age: 12
}
console.log(cat1.age);
console.log(cat1.breed);

const cat2 = {
    name: "dad",
    breed: "saimese",
    age: 14
}

const combineCats = (mama, papa) => {
    console.log(mama)
    console.log(papa)
}

// combineCats(cat1, cat2);

const combineCats2 = (mama, papa) => {
    let object = {};
    object["name"] = mama.name + papa.name;
    object["age"] = 1;
    object["breed"] = mama.breed + "-" + papa.breed;
    return object;
}

console.log(combineCats2(cat1, cat2));

// CAT BRAIN BENDER
// console.log(combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2)));
console.log(combineCats2(combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2)),combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2))));


// HUNGRY FOR MORE
const object = {};

const profiler = (yourUsername, yourHometown, favoriteColor) => {
    // const object = {  //profilerPlus only works if object is declared outside of profiler
    //     username: yourUsername,
    //     hometown: yourHometown,
    //     favColor: favoriteColor 
    // }
    object["username"] = yourUsername;
    object["hometown"] = yourHometown;
    object["favColor"] = favoriteColor;
    return object;
}
console.log(profiler("mendo", "kanagawa", "black"));

const profilerPlus = (key, value) => {
    object[key] = value;
    return object;
}
console.log(profilerPlus("age", 1000));


const user = {
    name: "bob",
    email: "blahhhh",
    age: 4,
    purchased: []
};

user["email"] = "blahh 2";
user["age"] ++
user["location"] = "temple city";
user["purchased"].push("carbohydrates");
user["purchased"].push("peace of mind");
user["purchased"].push("merino jodhpurs");
console.log(user["purchased"][2]);
user["friend"] = {
    name: "tony",
    age: 4,
    location: "arcadia",
    purchased: []
}
console.log(user["friend"]["name"])
console.log(user["friend"]["location"])
user.friend.age = 55;
user.friend.purchased.push("the one ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);


for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}

const updateUser = () => {
    user.age ++;
    user.name = user["name"].toUpperCase();
}

updateUser();
