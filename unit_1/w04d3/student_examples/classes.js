// class Person {
//     constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats = lovesCats;
//         this.lovesDogs = lovesDogs || false;
//     }
//     greet(otherPerson) {
//         console.log('hi ' + otherPerson + "!");
//     }
//     classyGreeting(otherClassyPerson) {
//         console.log("Greetings " + otherClassyPerson.name + "!");
        
//     }
//     setHair(hairColor) {
//         this.hair = hairColor;
//     }
//     walk() {
//         console.log("I hate when my segway is in the shop");
//     }
// }


// class SuperHero extends Person {
//     constructor(name, age, eyes, hair){
//         super(name, age, eyes, hair);
//         this.superPowers = ['flight', 'strength'];
//     }
//     fly() {
//         console.log("up up and away");
//     }
//     greet(otherPerson){
//         console.log(`Greetings Earthl- oops i mean ${otherPerson}`)
//     }
//     walk () {
//         super.walk();
//         this.fly();
//     }
// }

// const superman = new SuperHero('Clark kent', 30, 'blue', 'black');
// console.log(superman);
// // superman.walk()
// // superman.greet('bob')
// superman.walk();







// // const me = new Person('mendo', 24, 'grey', 'black', true, true);
// // const you = new Person('bob', 43, 'green', 'black');
// // you.setHair('red')
// // console.log(me);
// // console.log(you);

// // me.classyGreeting(you);


// // me.greet('you');
// // me.walk();
// // you.greet(2);
// // you.walk();

// // console.log(me.hair);









// // const vendingMachine = {
// //     snacks: [
// //       {
// //         name: 'kitkat',
// //         price: 6
// //       },
// //       {
// //         name: 'sun chips',
// //         price: 7
// //       },
// //       {
// //         name: 'apple',
// //         price: 12
// //       }
// //     ],
// //     vend (input) {
// //       console.log('vending', this.snacks[input]);
// //     }
// //   };
  
// // vendingMachine.vend(1);





// FACTORIES

class Car {
    constructor(maker, serialNumber) {
        this.maker = maker;
        this.serialNumber = serialNumber;
    }
    drive () {
        console.log("vroom vroom");
    }
}

class Factory {
    constructor(company){
        this.company = company;
        this.cars = [];
    }

    generateCar() {
        const newCar = new Car(this.company, this.cars.length);
        this.cars.push(newCar);
    }
    findCar(index) {
        return this.cars[index];
    }
}

const tesla = new Factory('Tesla');
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0))

const honda = new Factory('Honda');
honda.generateCar();
honda.generateCar();
honda.generateCar();
honda.generateCar();
console.log(honda);
