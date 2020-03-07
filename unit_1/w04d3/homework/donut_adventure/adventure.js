class Hero {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random()*2)])
    }
    announceHealth() {
    console.log(this.health);
    }
    fight(enemy) {
        enemy.health -= this.weapons.sugarShock
        console.log(`Pizza Rat got hit by Dougie! His health is now at ${enemy.health - this.weapons.sugarShock}`);
    }
}

const dougie = new Hero("Dougie the donut");

class Enemy {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        }
        this.catchPhrases =  ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']       
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random()*2)])
    }
    announceHealth() {
        console.log(this.health);
    }
    fight(enemy) {
        enemy.health -= this.weapons.cheeseGrease;
        console.log(`Dougie got hit by Pizza Rat! His health is now at ${enemy.health - this.weapons.cheeseGrease}`);
    }
}

const pizzaRat = new Enemy("Pizza Rat");

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();
dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
dougie.announceHealth();
pizzaRat.announceHealth();

