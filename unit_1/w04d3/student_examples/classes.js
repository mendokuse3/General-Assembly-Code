// class Person {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats = lovesCats;
//         this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherPerson) {
//         console.log(`hi ${otherPerson}!`);
//     }
//     walk () {
//         console.log(`I hate when my car is in the shop`);
//     }
//     classyGreeting (otherClassyPerson) {
//         console.log(`Greetings ${otherClassyPerson.name}!`)
//     }
//     setHair (hariColor) {
//         this.hair = hariColor;
//     }
// }

// class Superhero extends Person {
//     constructor(name, age, eyes,hair) {
//         super(name, age, eyes, hair);
//         this.superPowers = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability'];
//     }
//     fly () {
//         console.log ('Up up and away!');
//     }
//     greet (otherPerson) {
//         console.log(`Greetings Earthl- Oops, I mean ${otherPerson}.`);
//     }
//     walk () {
//         super.walk();
//         this.fly();
//     }
// }

// const supermanPerson = new Superhero('Clark Kent', 30, 'blue', 'black');

class Car {
    constructor(maker, serialNumber) {
        this.maker = maker;
        this.serialNumber = serialNumber;
    }
    drive () {
        console.log('Vroom Vroom')
    }
}

// const newCar = new Car('Mazda', 12345);

// console.log(newCar);

class Factory {
    constructor (company) {
        this.company = company;
        this.cars = [];
    }
    generateCar () {
        const newCar = new Car(this.company, this.cars.length);
        this.cars.push(newCar);
    }
    findCar (index) {
        return this.cars[index];
    }
}
const tesla = new Factory('Tesla');

const porche = new Factory('Porche');

tesla.generateCar();
tesla.generateCar();
tesla.generateCar();

porche.generateCar();
porche.generateCar();
porche.generateCar();
porche.generateCar();
porche.generateCar();

console.log(Factory);