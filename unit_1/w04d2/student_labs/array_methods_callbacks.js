// // MESSING WITH THE MINIONS
// const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl']

// minions.forEach(element => {
//     console.log(element + " - here");
// })

// const capitalizedMinions = minions.map(name => {
//     if (name !== "kevin"){
//         return name[0].toUpperCase() + name.substr(1);
//     } else {
//         return name
//     }
// })
// console.log(capitalizedMinions);

// const isCapitalized = (minion) => {
//     if (minion[0] === minion[0].toUpperCase()){
//         return true;
//     } 
//     return false;
// }

// console.log(minions.every(isCapitalized));


// const actuallyCapitalizedMinions = capitalizedMinions.filter(isCapitalized);
// console.log(actuallyCapitalizedMinions);
// console.log(actuallyCapitalizedMinions.every(isCapitalized));


// const notCapitalized = minion => {
//     if(minion[0] !== minion[0].toUpperCase()){
//         return true;
//     }
//     return false;
// }
// const uncapitalizedMinion = capitalizedMinions.find(notCapitalized)
// console.log(uncapitalizedMinion)

// console.log(capitalizedMinions.findIndex(notCapitalized));
// capitalizedMinions[1] = capitalizedMinions[1][0].toUpperCase() + capitalizedMinions[1].substr(1);
// console.log(capitalizedMinions.every(isCapitalized));

// const minionNameLengths = capitalizedMinions.map(name => {
//     return name.length;
// })
// console.log(minionNameLengths);
// console.log(minionNameLengths.reduce((a, b) => {
//     return a + b;
// }))

// const long = num => {
//    return num > 6;
// }
// console.log(minionNameLengths.some(long))
// console.log(capitalizedMinions.some(isCapitalized))
// console.log(capitalizedMinions.some(notCapitalized))
// capitalizedMinions[1] = capitalizedMinions[1].toLowerCase();
// console.log(capitalizedMinions.some(isCapitalized))
// console.log(capitalizedMinions.some(notCapitalized))

// const compareMinions = (a, b) => {
//     return (a.length - b.length);
// }

// capitalizedMinions.sort(compareMinions);
// console.log(capitalizedMinions)


// ARRAY METHODS WITH CALLBACKS

const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]



console.log(smallNums.every(num => {
    return num >= 0;
}))
console.log(nums.every(num => {
    return num >= 0;
}))

console.log(panagram.every(word => {
    return word.length < 8;
}))
console.log(panagrams.every(word => {
    return word.length < 8;
}))



let filter1 = smallNums.filter(num => {
    if (num < 100){
        return num;
    }
})
let filter2 = nums.filter(num => {
    if (num < 100){
        return num;
    }
})
console.log(filter1);
console.log(filter2);

let filterWord1 = panagram.filter(word => {
    if (word.length % 2 === 0){
        return word;
    }
})
let filterWord2 = panagrams.filter(word => {
    if (word.length % 2 === 0){
        return word;
    }
})
console.log(filterWord1);
console.log(filterWord2);



console.log(smallNums.find(num => {
    if (num % 5 === 0) {
        return num;
    }
}))
console.log(nums.find(num => {
    if (num % 5 === 0) {
        return num;
    }
}))

console.log(panagram.find(word => {
    if (word.length > 6){
        return word;
    }
}))
console.log(panagrams.find(word => {
    if (word.length > 6){
        return word;
    }
}))

console.log(smallNums.findIndex(num => {
    if (num % 3 === 0){
        return num;
    }
}))
console.log(nums.findIndex(num => {
    if (num % 3 === 0){
        return num;
    }
}))

console.log(panagram.findIndex(word => {
    if (word.length < 2){
        return word;
    }
}));
console.log(panagrams.findIndex(word => {
    if (word.length < 2){
        return word;
    }
}));


smallNums.forEach(num => {
    console.log(num * 3);
});
nums.forEach(num => {
    console.log(num * 3);
});
panagram.forEach(word => {
    console.log(word + "!");
})
panagrams.forEach(word => {
    console.log(word + "!");
})


let map1 = smallNums.map(num => {
    return num * 100;
})
console.log(map1);
let map2 = nums.map(num => {
    return num * 100;
})
console.log(map2);
let map3 = panagram.map(word => {
    return word.toUpperCase();
})
console.log(map3);
let map4 = panagrams.map(word => {
    return word.toUpperCase();
})
console.log(map4);


console.log(smallNums.reduce((a, b) => {
    return a + b;
}))
console.log(nums.reduce((a, b) => {
    return a + b;
}))
console.log(panagram.reduce((a, b) => {
    return a + b;
}))
console.log(panagrams.reduce((a, b) => {
    return a + b;
}))


console.log(smallNums.some(num => {
    return num % 7 === 0
}));
console.log(nums.some(num => {
    return num % 7 === 0
}));
console.log(panagram.some(word => {
    for (let i of word){
        if (i.toLowerCase(0) === "a"){
            return word;
        }
    }
}));
console.log(panagrams.some(word => {
    for (let i of word){
        if (i.toLowerCase(0) === "a"){
            return word;
        }
    }
}));









