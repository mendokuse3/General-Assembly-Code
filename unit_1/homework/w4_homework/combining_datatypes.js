///////////////////////////////////
// Section 2 Combining Datatypes //
///////////////////////////////////
const crayonBox = {
    colorNames: ["blue", 'green', 'yellow', 'red']
};

// console.log(crayonBox.colorNames[1]);

const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
};

// console.log(bottle.cap.material);

const receipt = [
    {item: 'cherries', price: .59, onSale: false},
    {item: 'Coke Zero', price: 1.99, onSale: true}
];
// console.log(receipt[0].price);

const apartmentBuilding = [
    ['john', 'mary', 'tim'],
    ['steve', 'Karen', 'mike']
];

// console.log(apartmentBuilding[0][2]);

const knit = () => {
    return {
        item: 'scarf',
        size: '6ft',
        color: 'rainbow'
    };
};

// console.log(knit().color)

const crayonSelector = () => {
    return crayonBox;
};

// console.log(crayonSelector().colorNames[0]);

const powerButton = () => {
        return options = () => {
        console.log('Power is ON');
    }
}
// powerButton()();

const vendingMachine = {
    snacks: [{name: 'Hot Takis', price: 1.50},
             {name: 'Peanut M&Ms', price: .85},
             {name: 'gum', price: .50}
            ],
    vend: (num) => {
        return vendingMachine.snacks[num];
    }
};

console.log(vendingMachine.vend(2));

const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const calculate = (num1, num2, operates) => {
    return operates(num1,num2);
};

// console.log(calculate(1,2,add));
// console.log(calculate(23,15,subtract));
// console.log(calculate(5,12,multiply));
// console.log(calculate(100,4,divide));


// const bar = () => {
//     console.log('bar here');
// };

// const foo = () => {
//     console.log('foo here');
// };

// bar();
// foo();

// foo();

// const foo = () => {                       //  missing initializer is the missing = after foo on 103
//     console.log('hi');
// }

////////////////////////////////////////////
// Section 3 Array Methods with Callbacks //
////////////////////////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// every

const isGreater = nums.every(currentValue => {
    return currentValue >= 0;
});

console.log(isGreater);

const shortWord = panagram.every(checkLength => {
    return checkLength.length < 8;
});

console.log(shortWord);

