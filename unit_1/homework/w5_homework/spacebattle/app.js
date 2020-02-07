
// Ship class allows for creation of player ship and alien fleets
class Ship {
    constructor (name, hull, firePower, accuracy) {
        this.name = name
        this.hull = hull || 20
        this.firePower = firePower || 5
        this.accuracy = accuracy || .7
    }
    attack = () => {
        if (Math.random() < this.accuracy) {
            return true; // hit
        }
            return false; // miss
    } 
}

const alienFleet = [];  //empty array of object where all enemies will go

const createEnemies = (num) => {  //method that creates random number of enemies
    Array.from(new Array(num).keys()).forEach((item) => {
        const randomHull = Math.floor(Math.random() * (4) + 3);
        const randomFirePower = Math.floor(Math.random() * (3) + 2);
        const randomAccuracy = Math.random() * (.2) + .6;
        alienFleet.push(new Ship('Alien', randomHull, randomFirePower, randomAccuracy));
    });
};

let difficulty = Math.floor(Math.random() * (3) + 5); //generates random number between 4 and 8

createEnemies(difficulty);  //calles createEnemies with random number from above

let playerName = prompt("Identify yourself!", "USS Schwarzenegger");
let playerShip = new Ship(playerName);
let level = 0;
let currentEnemy = alienFleet[level];

const checkLoss = () => {
    if (playerShip.hull <= 0) {
        alert(`${playerShip.name} destroyed! GAME OVER!`);
        location.reload();
    }
}

const checkEnemyAttack = () => {
    currentEnemy.attack();
        if(currentEnemy.attack() === true) {
            playerShip.hull -= currentEnemy.firePower;
            console.log('%c Direct Hit!', 'color: red; font-size: 24px; font-weight: 900;');
            checkLoss();
            console.log(`%c ${playerShip.name}'s hull is at ${100 * (playerShip.hull / 20)}%`, 'border: 1px solid;');

        }else{
            console.log('%c Enemy attack evaded!', 'color: blue; font-style: italic');
            console.log(`%c ${playerShip.name}'s hull integrity is at ${100 * (playerShip.hull / 20)}%`, 'border: 1px solid;');
        }
};

const checkEnemyHull = () => {
    if (currentEnemy.hull <= 0) {
        console.log('Enemy Down!');
        level++;
        checkWin();
        currentEnemy = alienFleet[level];
        console.log(`New Enemy Incomming! Level: ${level+1} Enemy Health: ${currentEnemy.hull}`);

    }else{
        console.log(`Level: ${level+1} Enemy Health: ${currentEnemy.hull}`);
        console.log(`Attack Incomming!`)
        checkEnemyAttack();        
    }
};

const checkWin = () => {
    if (level === alienFleet.length) {
        alert('You single-handedly saved Humanity! YOU WIN!');
        location.reload();
    }
};

const nextAction = () => {
    let action = prompt('What are you going to do soldier?', "attack / retreat");
    if (action === 'attack') {
        console.log('%c Fire Missle!', 'font-weight: 300; color: red; font-style; italic');
        playerShip.attack();
        if(playerShip.attack() === true) {
            currentEnemy.hull -= playerShip.firePower;
            console.log('%c Direct Hit!', 'color: red; font-size: 24px; font-weight: 900;');
            checkEnemyHull();
            nextAction();

        }else{
            console.log('%c Enemy evaded!', 'color: blue; font-style: italic');
            checkEnemyAttack();
            nextAction();
        }

    }else if (action === 'retreat'){
        alert(`Deserters will not be tolerated! GAME OVER!`);

    }else{
        nextAction();
    }
};


console.log('%c spacebattle', 'font-size: 40px')
console.log(`%c There are ${difficulty} alien ships!`, 'color: green; border: 1px solid black');
nextAction();

