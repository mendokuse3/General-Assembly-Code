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
            console.log("The attack hit!");
            // if hit then subtract firepower of ship from target
            // this.hull -= this.firepower;
            // maybe console.log health
        } else {
            console.log("The attack missed!");
            // prompt? or continue with next 
        }
    }
}

const alienFleet = [];
// instantiate 6 alien ships
const alien1 = new Ship();
const alien2 = new Ship();
const alien3 = new Ship();
const alien4 = new Ship();
const alien5 = new Ship();
const alien6 = new Ship();
alienFleet.push(alien1);
alienFleet.push(alien2);
alienFleet.push(alien3);
alienFleet.push(alien4);
alienFleet.push(alien5);
alienFleet.push(alien6);
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
}

const USS_Schwarzenegger = new USSSchwarzenegger;
console.log(USS_Schwarzenegger);
USS_Schwarzenegger.attack();



