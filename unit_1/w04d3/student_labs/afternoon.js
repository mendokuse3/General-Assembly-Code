// class Pet {
//     constructor(owner, name){
//         this.owner = owner;
//         this.name = name;
//     }
//     walk() {
//         console.log('walka walka');
//     }
// }

// const dog = new Pet('bob', 'charlie');
// console.log(dog);
// dog.walk()

// class Dog extends Pet {
//     constructor(owner, name) {
//         super(owner, name);
//         this.price = 20;
//     }
//     bark() {
//         console.log("bark");
//     }
//     chaseTail() {
//         console.log("oh boy oh boy");
//     }
//     getPrice() {
//         return this.price;
//     }
// }
// const snoopy = new Dog('joe', "snoopy")
// console.log(snoopy);
// snoopy.bark();
// snoopy.chaseTail();
// console.log(snoopy.getPrice());

// class Cat extends Pet {
//     constructor(owner, name){
//         super(owner, name);
//         this.price = 10;
//     }
//     purr() {
//         console.log('purr');
//     }
//     clean() {
//         console.log("cleaning");
//     }
//     getPrice() {
//         return this.price;
//     }
//     walk() {
//         console.log('strut strut');
//     }
// }

// const kitty = new Cat('pat', 'sylvester');
// console.log(kitty);
// kitty.purr();
// kitty.clean();
// console.log(kitty.getPrice());
// kitty.walk();



// snoopy.price = 50;
// console.log(snoopy);


// kitty.name = "garfield";
// console.log(kitty);



class Card {
    constructor(value, face, suit, faceUp){
        this.value = value;
        this.face = face;
        this.suit = suit;
        this.faceup = faceUp;
    }
    // constructor() {
    //     this.makeDeck = []
    // }

}
// const arr = [];
const suitArr= ["clubs", "spades", "diamonds", "hearts"]
const faceArr = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, "joker", "queen", "king"]
const valueArr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const faceUpArr = [true, false]

// const newCard = new Card('11', 'ace', 'clubs', false);
// console.log(newCard);


  
class MakeDeck {
    constructor () {
      this.cards = [];
    }
    // generateDeck () {
    //     for (const j of valueArr)
    //         for (const i of faceArr){
    //         const newCard = new Card(valueArr[j], faceArr[i], 'clubs', false);
    //         this.cards.push(newCard);
    //     }
    // }
    generateDeck () {
        for (let j = 0; j < suitArr.length; j++){
            for (let i = 0; i < valueArr.length; i++){
                const newCard = new Card(valueArr[i], faceArr[i], suitArr[j], false);
                this.cards.push(newCard);
            }
        }
    }
}

const newDeck = new MakeDeck("deck");
newDeck.generateDeck();
console.log(newDeck);

const shuffleDeck = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleDeck(newDeck.cards);
console.log(newDeck);

const compareCards = deck => {
    console.log(deck.cards[0]);
    console.log(deck.cards[deck.cards.length-1]);
    if (deck.cards[0].value > deck.cards[deck.cards.length-1].value){
        console.log("the top card is bigger");
    } else if (deck.cards[0].value < deck.cards[deck.cards.length-1].value){
        console.log(("the bottom card is bigger"));
    } else if (deck.cards[0].value === deck.cards[deck.cards.length-1].value){
        console.log('its a tie');
    }
}
compareCards(newDeck)
