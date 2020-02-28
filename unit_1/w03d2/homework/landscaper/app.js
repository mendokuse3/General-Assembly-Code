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

let money = 50;
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
let tools = {
    teeth: true,
    rustyScissors: false,
    oldLawnmower: false,
    fancyLawnmower: false,
    starvingStudents: false
}

const numberOfTools = {
    teeth: 1,
    rustyScissors: 0,
    oldLawnmower: 0,
    fancyLawnmower: 0,
    starvingStudents: 0
}

let toolsArray = [];


const checkWin = () => {
    if (money >= 1000 && tools["starvingStudents"] === true) {
        const winner = prompt("You won!!! Restart?", "yes/no");
        if (winner === "yes"){
            resetGame();
        }
    }
}


const resetGame = () => {
    money = 0;
    tools = {
        teeth: true,
        rustyScissors: false,
        oldLawnmower: false,
        fancyLawnmower: false,
        starvingStudents: false
    }
    startMenu();
}


const startMenu = () => {
    checkWin();  
    alert("You are starting a landscaping business, but all you have are your teeth.");
    alert("You have $" + money);
    const begin = prompt("Spend the day cutting lawns?", "yes/no");
    if (begin === "yes"){
        toolPrompt();
    } else if (begin === "no"){
        purchasePrompt();
    } else if (begin === "reset"){
        resetGame();
    } else if (begin === "quit"){

    } else {
        alert("Error!");
        startMenu();
    }
}

const toolPrompt = () => {
    toolsArray = [];
    for (let key in tools){
        if(tools[key] === true){
            toolsArray.push(key);
        }
    }
    let joined = toolsArray.join(', ');
    alert("You have " + joined);
    const toolSelect = prompt("Cut with: " + joined);
    if (toolSelect === "teeth"){
        money += toolIncrement["teeth"];
        startMenu();
    } else if (toolSelect === "rustyScissors" && tools["rustyScissors"] === true){
        money += (toolIncrement["rustyScissors"] * numberOfTools["rustyScissors"]);
        startMenu();
    } else if (toolSelect === "oldLawnmower" && tools["oldLawnmower"] === true){
        money += (toolIncrement["oldLawnmower"] * numberOfTools["oldLawnmower"]);
        startMenu();
    } else if (toolSelect === "fancyLawnmower" && tools["fancyLawnmower"] === true){
        money += (toolIncrement["fancyLawnmower"] * numberOfTools["fancyLawnmower"]);
        startMenu();
    } else if (toolSelect === "starvingStudents" && tools["starvingStudents"] === true){
        money += (toolIncrement["starvingStudents"] * numberOfTools["starvingStudents"]);
        startMenu();
    }  else if (toolSelect === "reset") {
        resetGame();
    } else {
        alert("Error!");
        startMenu();
    }
}


const alertTool = () => {
    let purchaseTools = [];
    for (let key in toolPrice){
        purchaseTools.push(key + " is $" + toolPrice[key])
    }
    let joined = purchaseTools.join(", ");
    alert(joined);
}

const purchasePrompt = () => {
    alert("Would you like to purchase a tool?");
    alertTool();
    const purchase = prompt("Input tool name or input sell", "rustyScissors, oldLawnmower, fancyLawnmower, starvingStudents, sell");
    if (purchase === "rustyScissors" && money >= toolPrice["rustyScissors"]){
        tools["rustyScissors"] = true;
        money -= toolPrice["rustyScissors"];
        numberOfTools["rustyScissors"] ++;
        alert("You purchased rustyScissors");
        startMenu();
    } else if (purchase === "oldLawnmower" && money >= toolPrice["oldLawnmower"]){
        tools["oldLawnmower"] = true;
        money -= toolPrice["oldLawnmower"];
        numberOfTools["oldLawnmower"] ++;
        alert("You purchased oldLawnmower");
        startMenu();
    } else if (purchase === "fancyLawnmower" && money >= toolPrice["fancyLawnmower"]){
        tools["fancyLawnmower"] = true;
        money -= toolPrice["fancyLawnmower"];
        numberOfTools["fancyLawnmower"] ++;
        alert("You purchased fancyLawnmower");
        startMenu();
    } else if (purchase === "starvingStudents" && money >= toolPrice["starvingStudents"]){
        tools["starvingStudents"] = true;
        money -= toolPrice["starvingStudents"];
        numberOfTools["starvingStudents"] ++;
        alert("You purchased starvingStudents");
        startMenu();
    } else if (purchase === "sell"){
        sellPrompt();
    } else if (purchase === "reset") {
        resetGame();
    } else {
        alert("Error!");
        startMenu();
    }
}

const sellPrompt = () => {
    const tool = prompt("Which tool would you like to sell", "rustyScissors, oldLawnmower, fancyLawnmower, starvingStudents");
    if (tool === "rustyScissors"){
        money += (toolPrice["rustyScissors"] / 2);
        startMenu();
    } else if (tool === "oldLawnmower"){
        money += (toolPrice["oldLawnmower"] / 2);
        startMenu();
    } else if (tool === "fancyLawnmower"){
        money += (toolPrice["fancyLawnmower"] / 2);
        startMenu();
    } else if (tool === "starvingStudents"){
        money += (toolPrice["starvingStudents"] / 2);
        startMenu();
    } else {
        alert("Error!");
        startMenu();
    }
}

startMenu();


