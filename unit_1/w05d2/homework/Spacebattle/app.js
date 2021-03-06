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
        if (chance <= this.accuracy){
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
            console.log("The attack did " + this.firepower + " damage!");
            USS_Schwarzenegger.hull -= this.firepower;
            if (USS_Schwarzenegger.hull > 0){
                console.log("The USS Schwarzenegger has " + USS_Schwarzenegger.hull + " hull remaining.")
            } else if (USS_Schwarzenegger.hull <= 0){
                console.log("The USS Schwarzenegger has been destroyed!");
            }
        } else if (attack === "The attack missed!"){
            console.log("The attack missed!");
        }
    }
}

// const alienFleet = [];
// // instantiate 6 alien ships
// for (let i = 0; i < getRandomIntInclusive(2, 14); i++){
//     const alien = new AlienShip();
//     alienFleet.push(alien)
// }
// // console.log(alienFleet);
let alienFleet = [];
const generateFleet = () => {
    for (let i = 0; i < getRandomIntInclusive(2, 14); i++){
        const alien = new AlienShip();
        alienFleet.push(alien)
    }
}

const rechargeShield = () => {
    let chargePrompt = prompt("Return to base and recharge shields?", "yes/no");
    if (chargePrompt === "yes"){
        USS_Schwarzenegger.hull = 20;
    }
}


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
        console.log("You are attacking the alien ship.");
        let attack = this.attack();
        if (attack === "The attack hit!"){
            console.log("The attack hit!");
            console.log("The attack did " + this.firepower + " damage!");
            alienFleet[0].hull -= this.firepower;
            if (alienFleet[0].hull > 0){
                console.log("The alien ship has " + alienFleet[0].hull + " hull remaining.")
            } else if (alienFleet[0].hull <= 0){
                console.log("The alien ship has been destroyed!");
                // alienFleet.shift();
                // console.log(alienFleet);
            }
        } else if (attack === "The attack missed!"){
            console.log("The attack missed!");
        }
    }
}

const USS_Schwarzenegger = new USSSchwarzenegger;
console.log(USS_Schwarzenegger);

const startBattle = () => {
    USS_Schwarzenegger.attackAlien();
    if (alienFleet[0].hull > 0){
        console.log("The alien ship is attacking!");
        alienFleet[0].attackUSS();
        if (USS_Schwarzenegger.hull > 0){
            for (let i = 0; i < alienFleet.length; i++){
                let enemyBoostChance = getRandomIntInclusive(1, 2);
                if (enemyBoostChance === 1){
                    alienFleet[i].hull ++;
                } else if (enemyBoostChance === 2){
                    alienFleet[i].firepower ++;
                }
            }
            startBattle();
        } else if (USS_Schwarzenegger.hull <= 0){
            console.log("The aliens took over Earth.")
            console.log("Game over");
            return;
        }
    } else if (alienFleet[0].hull <= 0){
        alienFleet.shift();
        console.log("The USS Schwarzenegger has " + USS_Schwarzenegger.hull + " hull remaining.")
        if (USS_Schwarzenegger.hull < 20){
            rechargeShield();
        }
        console.log("The alien fleet is " + alienFleet.length + " strong. What will you do?");
    } else {
        for (let i = 0; i < alienFleet.length; i++){
            let enemyBoostChance = getRandomIntInclusive(1, 2);
            if (enemyBoostChance === 1){
                alienFleet[i].hull ++;
            } else if (enemyBoostChance === 2){
                alienFleet[i].firepower ++;
            }
        }
        startBattle();
    }
}
// startBattle();

const startPrompt = () => {
    winGame();
    // prompt action input
    if (alienFleet.length > 0){
        if (USS_Schwarzenegger.hull > 0){
            let action = prompt("What will you do?", "attack/retreat");
            action = action.toLowerCase();
            while (action !== "attack" && action !== "retreat"){
                action = prompt("What will you do?", "attack/retreat");
            }
            // upon retreat input at any point, call retreat function of uss and end game
            if (action === "retreat"){
                console.log("You retreated from the battlefield.  The alien fleet invaded and took over Earth.");
                console.log("Game over");
            } else if (action === "attack"){
                console.log("The alien ship has " + alienFleet[0].hull + " hull and " + alienFleet[0].firepower + " firepower.");
                startBattle();   
                startPrompt();
            }
        }
    }
}

// if at any point alienFleet.length = 0, you win 
const winGame = () => {
    if (alienFleet.length === 0){
        console.log("Congratulations! You have defeated the alien fleet.  You win.")
        const restart = prompt("Restart the game?", "yes/no");
        if (restart === "yes"){
            startGame();
        }
    }
}

const startGame = () => {
    generateFleet();
    USS_Schwarzenegger.hull = 20;
    console.log("There is an alien fleet about to attack. Take the initiative and attack them first!");
    console.log("Number of alien ships: " + alienFleet.length)
}

startGame();
startPrompt();


// console.log the situation
// // prompt action input
// let action = prompt("What will you do?", "attack/retreat");
// action = action.toLowerCase();
// while (action !== "attack" && action !== "retreat"){
//     action = prompt("What will you do?", "attack/retreat");
// }
// // upon retreat input at any point, call retreat function of uss and end game
// if (action === "retreat"){
//     console.log("You retreated from the battlefield.  The alien fleet invaded and took over Earth.");
//     console.log("Game over");
// }
// upon attack input
// else if (action === "attack"){
//     startBattle();
    
// }
// you attack first; this should start a loop of you atack alien attack until one is dead
    // with each iteration, should console.log health of ship after damage has been done
// after alien ship is dead, remove from alien fleet array
    // possibly include some sort of logic that says if ship.hull <= 0, remove from array
// once an alien ship has been defeated, prompt another attack or retreat

// console.log(alienFleet);
// console.log(alienFleet[0]);
// console.log(USS_Schwarzenegger);
// USS_Schwarzenegger.attackAlien()
// USS_Schwarzenegger.attackAlien()
// USS_Schwarzenegger.attackAlien()

// battle function 


// cd unit_1/w05d2/homework/Spacebattle 

// to make enemies stronger after each battle, at end of startBattle function
// use for loop to =+ 1 to each alien ship's hull and firepower