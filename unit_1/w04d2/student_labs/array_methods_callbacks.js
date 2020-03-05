// MESSING WITH THE MINIONS
const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl']

minions.forEach(element => {
    console.log(element + " - here");
})

const capitalizedMinions = minions.map(name => {
    if (name !== "kevin"){
        return name[0].toUpperCase() + name.substr(1);
    } else {
        return name
    }
})
console.log(capitalizedMinions);

const isCapitalized = (minion) => {
    if (minion[0] === minion[0].toUpperCase()){
        return true;
    } 
    return false;
}

console.log(minions.every(isCapitalized));


const actuallyCapitalizedMinions = capitalizedMinions.filter(isCapitalized);
console.log(actuallyCapitalizedMinions);
console.log(actuallyCapitalizedMinions.every(isCapitalized));


const notCapitalized = minion => {
    if(minion[0] !== minion[0].toUpperCase()){
        return true;
    }
    return false;
}
const uncapitalizedMinion = capitalizedMinions.find(notCapitalized)
console.log(uncapitalizedMinion)

console.log(capitalizedMinions.findIndex(notCapitalized));
capitalizedMinions[1] = capitalizedMinions[1][0].toUpperCase() + capitalizedMinions[1].substr(1);
console.log(capitalizedMinions.every(isCapitalized));

const minionNameLengths = capitalizedMinions.map(name => {
    return name.length;
})
console.log(minionNameLengths);
console.log(minionNameLengths.reduce((a, b) => {
    return a + b;
}))

const long = num => {
   return num > 6;
}
console.log(minionNameLengths.some(long))
console.log(capitalizedMinions.some(isCapitalized))
console.log(capitalizedMinions.some(notCapitalized))
capitalizedMinions[1] = capitalizedMinions[1].toLowerCase();
console.log(capitalizedMinions.some(isCapitalized))
console.log(capitalizedMinions.some(notCapitalized))

const compareMinions = (a, b) => {
    return (a.length - b.length);
}

capitalizedMinions.sort(compareMinions);
console.log(capitalizedMinions)




