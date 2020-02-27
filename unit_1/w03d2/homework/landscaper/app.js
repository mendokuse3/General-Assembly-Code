// win condition: have a team of starving students and 1000$$$$$
// declare money variable
// declare object of purchasables
// declare object of what you own


// start function (so that you can reset later)
// set money to 0, all tool variables to 0, 

// alert: you are starting a ....... 
// prompt: spend the day cutting lawns? 
    // if yes ask what tool you would like to use
        // default is teeth
        // list tools
        // once tool is selected display you will make x money
        // increment money variable
        // reprompt spend the day cutting lawn?
    // if no
        // prompt would you like to buy tool
        // list tools and price
        // check money variable with price. if = or > then can purchase
        // once tool is purchased prompt spend teh day cutting lawns

const youWon = () => {
    if (money = 1000 && starvingStudents === true) {
        const winner = prompt("You won!!! Restart?", "yes/no");
        if (winner === "yes"){
            // resetGame();
            // startGame();
        }
    }
}

let money = 0;
const toolPrice = {
    rustyScissors: 5,
    oldLawnmower: 25,
    fancyLawnmower: 250,
    starvingStudents: 500
}
const toolIncrement = {
    teeth: 1,
    rustyScissors: 5,
    oldLawnmower: 50,
    fancyLawnmower: 100,
    starvingStudents: 250
}
const tools = {
    teeth: true,
    rustyScissors: false,
    oldLawnmower: false,
    fancyLawnmower: false,
    starvingStudents: false
}

let toolsArray = [];

// const resetGame = () => {
//     money = 0;
//     tools = {
//         teeth: true,
//         rustyScissors: false,
//         oldLawnmower: false,
//         fancyLawnmower: false,
//         starvingStudents: false
//     }
// }

const startMenu = () => {
    alert("You are starting a landscaping business, but all you have are your teeth.");
    alert("You have $" + money);
    const begin = prompt("Spend the day cuttin lawns?", "yes/no");
    if (begin === "yes"){
        toolPrompt();
    } else if (begin === "no"){
        purchasePrompt();
    }
}

const toolPrompt = () => {
    for (let key in tools){
        if(tools[key] === true){
            toolsArray.push(key)
        }
    }
    let joined = toolsArray.join(', ');
    alert("You have " + joined);
    const toolSelect = prompt("Cut with: " + joined);
    if (toolSelect === "teeth"){
        money += toolIncrement["teeth"];
        startMenu();
    } else if (toolSelect === "rustyScissors"){
        money += toolIncrement["rustyScissors"];
        startMenu();
    } else if (toolSelect === "oldLawnmower"){
        money += toolIncrement["oldLawnmower"];
        startMenu();
    } else if (toolSelect === "fancyLawnmower"){
        money += toolIncrement["fancyLawnmower"];
        startMenu();
    } else if (toolSelect === "starvingStudents"){
        money += toolIncrement["starvingStudents"];
        startMenu();
    }

}



const purchasePrompt = () => {

}

startMenu();
