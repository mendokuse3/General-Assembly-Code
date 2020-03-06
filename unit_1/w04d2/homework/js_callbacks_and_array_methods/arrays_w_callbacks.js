// SECTION 3 ARRAY METHODS WITH CALLBACKS
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


console.log(nums.every((num) => {
    return num >= 0
}))
console.log(panagram.every(() => {
    for (let i of panagram) {
        return i.length < 8
    }
}))


const filterNum = nums.filter((num) => {
    if (num < 4) {
        return true;
    }
})
console.log(filterNum);

const evenPanagram = panagram.filter((word) => {
        if (word.length % 2 === 0){
            return word;
    }
})
console.log(evenPanagram)


console.log(nums.find(num => {
    if (num % 5 === 0){
        return num;
    }
}))
console.log(panagram.find(word => {
    if (word.length > 5){
        return word;
    } //there is no word longer than 5 characters
}));


console.log(nums.findIndex(num => {
    return num % 3 === 0 
}))

console.log(panagram.findIndex(word => {
    return word.length < 2;
    // no word in the panagram array is less than 2 characters.
}))


nums.forEach((num) => {
    console.log(num * 3);
})

panagram.forEach((word) => {
    console.log(word + "!");
})


const mapNums = nums.map((num)=> {
    return num * 100;
})
console.log(mapNums);

const mapPanagram = panagram.map((word)=>{
    return word.toUpperCase();
})
console.log(mapPanagram);

console.log(nums.some((num)=>{
    if (num % 7 === 0){
        return true;
    }
}))

console.log(panagram.some(word => {
    for (let i of word){
        if (i === "a"){
            return true;
        }
    }
}));


// HUNGRY FOR MORE
const reducedarr = nums.reduce((accum, elm) => {
    return accum + elm;
});
console.log(reducedarr);

const reducedPanagram = panagram.reduce((accum, elm) => {
    return accum + elm;
});
console.log(reducedPanagram);


console.log(nums.sort())
    // it is sorted, but according to the utf 16 code values
console.log(panagram.sort());
    // it is sorted, but according to the utf 16 code values
console.log(nums.sort((a, b) => {
    return a - b;
}));
console.log(nums.sort((a, b) => {
    return b - a;
}));
console.log(panagram.sort((a, b) => {
    if(a.toUpperCase() < b.toUpperCase()){
        return -1;
    } 
    if (a.toUpperCase() > b.toUpperCase()){
        return 1;
    }
    return 0;
}));
console.log(panagram.sort((a, b) => {
    if(a.toUpperCase() > b.toUpperCase()){
        return -1;
    } 
    if (a.toUpperCase() < b.toUpperCase()){
        return 1;
    }
    return 0;
}));


const panagram2 = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']



const isPanagram = (arr) => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const joinedPanagram = arr.join("").toLowerCase();
    const sortedPanagram = joinedPanagram.split('').sort((a, b) => {
        if (a.toUpperCase() < b.toUpperCase()) {
            return -1;
        }
        if (a.toUpperCase() > b.toUpperCase()) {
            return 1;
        }
        return 0;
    });
    const removedDuplicates = [...new Set(sortedPanagram)];
    if (removedDuplicates.length === abc.split('').length){
        return true;
    }
    return false;
}

console.log(isPanagram(panagram2))



const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
]

const filteredProducts = products.filter(item => {
    if (item.price < 10) {
        return item;
    }
})

console.log(filteredProducts);

products.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
})

console.log(products);







