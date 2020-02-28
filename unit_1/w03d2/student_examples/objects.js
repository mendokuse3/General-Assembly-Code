// const car = {
//     color: "black",
//     hp: 2000,
//     year: 2010
// }

// console.log(car);

// car.gas = true;

// console.log(car);

// console.log(car.color);

// car.color = "beige";
// console.log(car.color);

// if (car.doors){
//     console.log("you have 3 doors");
// } else {
//     console.log("that does not exist")
// }



// const toppings = {};

// for (let i = 0; i < 10; i++) {
//     toppings['key' + i] = "cheese";
// }

// console.log(toppings);

// const laptop = {
//     year: 2020
// }

// const getYear = "year";

// console.log(laptop[getYear]);

const bestTVShowEver = { 
    title: "Lodge 49",
    showRunner: "Jim Gavin",
    year: 2018 
}

for (let key in bestTVShowEver){
    console.log(bestTVShowEver[key]);
}
