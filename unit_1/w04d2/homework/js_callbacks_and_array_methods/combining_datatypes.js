const crayonBox = {
    crayonArr: [
        'white', 'peach', 'blue', 'skin'
    ]
}
console.log(crayonBox.crayonArr[3])

const bottle = {
    cap: {
        material: "metal",
        color: "silver"
    }
}
console.log(bottle.cap.material)

const receipt = [
    'bob',
    2343,
    obj = {
        knife: {
            price: 23,
            name: "bob Kramer"
        },
        spoon: {
            price: 2,
            name: "ikea brand"
        }
    },
    'floopin'
]

console.log(receipt[2].knife.name)

const apartmentBuilding = [
    'ken',
    23432,
    [
        'hannah', 'alex', 'krystal', 'haidii'
    ],
    false
]
console.log(apartmentBuilding[2][3]);

// Combine objects, arrays, and functions more than one level deep

const knit = () => {
    return {
        object: {
            item: "scarf",
            size: "6ft"
        }
    }
}
console.log(knit().object.size)

const crayonSelector = () => {
    return {
        crayonBox
    }
}
console.log(crayonSelector().crayonBox.crayonArr[2]);

const powerButton = () => {
    return options = () => {
            console.log("select a song");
    }
}

powerButton()();


// MODEL A VENDING MACHINE
const vendingMachine = {
    snackArr: [
        {
            name: 'cookie',
            price: 2
        },
        {
            name: "kit kat",
            price: 1.5
        },
        {
            name: 'chips',
            price: 2.5
        }
    ],
    vend: (index) => {
        return vendingMachine.snackArr[index];
    }
}

console.log(vendingMachine.vend(2))

// CALLBACKS
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}

console.log(calculate(1, 1, add));
console.log(calculate(2,1, subtract));
console.log(calculate(2,2, multiply));
console.log(calculate(4, 2, divide));

const bar = () => {
    console.log('bar here');
}
const foo = () => {
    console.log('foo here');
}
bar();
foo();

// foo();

// const foo ()=>{
//     console.log('hi');
// }
// // the error here says "Missing initializer in const declaration" which means that it is missing the = after foo.
// // to fix it should be const foo = () => {code}
// // after fixing that it will give error "cannot access 'foo' before initialization" which means that you cannot call a function before it is declared/initialized











