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

