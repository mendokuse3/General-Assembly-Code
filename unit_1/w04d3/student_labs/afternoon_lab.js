class Pet  {
    constructor(name, owner) {
        this.name = name
        this.owner = owner
    }
    walk () {
        console.log('walka walka')
    }
}

// const newPet1 = new Pet ('Cleo', 'Kathleen');
// console.log(newPet1);
// newPet1.walk();

class Dog extends Pet {
    constructor (name, owner) {
        super(name, owner)
        this.price = 20;
    }
    bark() {
        console.log('bark');
    }
    chaseTail() {
        console.log('oh boy oh boy oh boy');
    }
    getPrice() {
        return this.price;
    }
}

let newDog = new Dog ('Kodiak', "Mike");

console.log(newDog);
newDog.bark();
newDog.chaseTail();
console.log(newDog.getPrice());

class Cat extends Pet {
    constructor (name, owner) {
        super(name, owner)
        this.price = 10
    }
    purr() {
        console.log('purrrrrr');
    }
    clean() {
        console.log('cleaning');
    }
    getPrice() {
        return this.price;
    }
    walk() {
        console.log('strut strut');
    }
}

const newCat = new Cat ("Cleo", "Kathleen");

console.log(newCat);
newCat.purr();
newCat.clean();
console.log(newCat.getPrice());
newCat.walk();

newDog.price = 50;
console.log(newDog);

newCat.name = "Claudio";
console.log(newCat);
