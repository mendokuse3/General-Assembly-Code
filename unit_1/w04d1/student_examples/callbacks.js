
// setTimeout(() => {
//     console.log("hello world");
// }, 0)


// const socky = () => {
//     console.log("I will iron your socks");
// }

// const foodie = () => {
//     console.log("I will sort your M&M's so that you encounter a green one");
// }
//  const pr = () => {
//      console.log("I will make sure everyone knows you are the best boss ever");
// }

// const boss = employee => {
//     console.log("I am the boss and you will do as I say!");
//     employee();
// }

// boss(socky);
// boss(foodie);
// boss(pr);

// boss(() => {
//     console.log("I'll close tonight");
// })


const capitalize = word => {
    return word[0].toUpperCase() + word.substring(1);
}

const excitedWords = word => {
    return word + "!";
}

// console.log(excitedWords(capitalize("hello")));

const demoralizeWords = word => {
    const arr = word.split(' ');
    const newArr = [];
    for (let word of arr){
        newArr.push(word.toLowerCase())
    }
    return newArr.join(" ");
}

const handleWords = (str, cb) => {
    const arr = str.split(' ');
    const newArr = [];
    debugger;
    for (let word of arr){
        newArr.push(cb(word));
    }
    debugger;
    return newArr.join(" ");
}

console.log(handleWords('HELLO dtHIs SHISER sidfEJKEKkksdfd', demoralizeWords));



