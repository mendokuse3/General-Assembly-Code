const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// to get value between .6 and .8
// console.log(getRandomIntInclusive(6000, 8000)/10000);


class Ship {
    constructor(){
        this.hull = getRandomIntInclusive(3, 6);
        this.firepower = getRandomIntInclusive(2, 4);
        this.accuracy = (getRandomIntInclusive(6000, 8000)/10000);
    }
    attack(){
        // use math.random and accuracy to deterimine if attack will hit
        let chance = Math.random();
        if (chance >= this.accuracy){
            return "The attack hit!"
            // console.log("The attack hit!");
            // if hit then subtract firepower of ship from target
            // this.hull -= this.firepower;
            // maybe console.log health
        } else {
            return "The attack missed!"
            // console.log("The attack missed!");
            // prompt? or continue with next 
        }
    }
}
class AlienShip extends Ship {
    constructor() {
        super();
    }
    attackUSS() {
        let attack = this.attack();
        if (attack === "The attack hit!"){
            console.log("The attack hit!");
            USS_Schwarzenegger.hull -= this.firepower;
            if (USS_Schwarzenegger.hull > 0){
                console.log("The USS Schwarzenegger has " + USS_Schwarzenegger.hull + " hull remaining.")
            } else if (USS_Schwarzenegger.hull <= 0){
                console.log("The USS Schwarzenegger has been destroyed!");
                // game over logic
                console.log("Game over");
            }
        } else if (attack === "The attack missed!"){
            console.log("The attack missed!");
        }
    }
}

const alienFleet = [];
// instantiate 6 alien ships
for (let i = 0; i < 6; i++){
    const alien = new AlienShip();
    alienFleet.push(alien)
}
console.log(alienFleet);

// instantiate uss ship
// uss should extend ship but have its own set values
// const USSSchwarzenegger = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7
// }
class USSSchwarzenegger extends Ship {
    constructor() {
        super();
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    retreat() {
        console.log("You ran away.  Game over.")
    }
    attackAlien() {
        let attack = this.attack();
        if (attack === "The attack hit!"){
            console.log("The attack hit!");
            alienFleet[0].hull -= this.firepower;
            if (alienFleet[0].hull > 0){
                console.log("The alien ship has " + alienFleet[0].hull + " hull remaining.")
            } else if (alienFleet[0].hull <= 0){
                console.log("The alien ship has been destroyed!");
                alienFleet.shift();
                console.log(alienFleet);
            }
        } else if (attack === "The attack missed!"){
            console.log("The attack missed!");
        }
    }
}

const USS_Schwarzenegger = new USSSchwarzenegger;
console.log(USS_Schwarzenegger);


// console.log the situation
console.log("There is an alien fleet about to attack. Take the initiative and attack them first!");
console.log("Number of alien ships: " + alienFleet.length)
// prompt action input
// let action = prompt("What will you do?", "attack/retreat");
// action = action.toLowerCase();
// while (action !== "attack" && action !== "retreat"){
//     action = prompt("What will you do?", "attack/retreat");
// }
// upon retreat input at any point, call retreat function of uss and end game
// upon attack input
// you attack first; this should start a loop of you atack alien attack until one is dead
    // with each iteration, should console.log health of ship after damage has been done
// after alien ship is dead, remove from alien fleet array
    // possibly include some sort of logic that says if ship.hull <= 0, remove from array
// once an alien ship has been defeated, prompt another attack or retreat

// console.log(alienFleet);
// console.log(alienFleet[0]);
// USS_Schwarzenegger.attackAlien()

