class Hamster {
    constructor(name){
        this.name = name;
        this.owner = "";
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello! my name is ${this.name}`);
    }
    eat() {
        this.weight += 10;
        this.mood ++;
    }
    exercise() {
        this.weight -= 5;
    }
    ageUp() {
        this.age ++;
        this.height ++;
        this.weight += 3;
        this.mood --;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const timmy = new Person("Timmy");
for (let i = 0; i < 5; i++){
    timmy.ageUp();
    timmy.eat();
    timmy.exercise();
}
for (let i = 0; i < 9; i++){
    timmy.ageUp();
}
const gus = new Hamster("Gus")
gus.owner = "Timmy";
timmy.buyHamster(gus);
for (let i = 0; i < 15; i++){
    timmy.ageUp()
}
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();
console.log(timmy);
