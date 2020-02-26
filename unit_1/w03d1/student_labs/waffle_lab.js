// check if there is a waffle in fridge
let waffle;

const checkWaffle = () => {
    // ask if there is a waffle 
    let waffleInFridge = prompt("Is there a waffle in the fridge", "yes/no");
    // if there is waffle
    if (waffleInFridge === "yes"){
        waffle = true;
        cookWaffle();
    } else if (waffleInFridge === "no"){
        // else if there is no waffle
        alert("well go buy some");
        checkWaffle();
    }
}

// put waffle in toaster  
const cookWaffle = () => {
    // ask if they want to cook waffle
    let cook = prompt("cook waffle?", "yes/no");
    // if there is waffle then cook waffle
    if (waffle === true && cook == "yes") {
        alert("you put the waffle in toaster");
        cookedWaffle();
    } else if (waffle === false){
        // if there is no waffle then get waffle
        alert("get a waffle");
    }
}

const cookedWaffle = () => {
    // check is waffle cooked
    let waffleStatus = prompt("is waffle cooked?", "yes/no");
    // if waffle is cooked, remove from toaster
    if (waffleStatus == "yes") {
        plateWaffle();
    } else if (waffleStatus == "no") {
        // else if waffle is not cookec
        // let waffle cook
        alert("let the waffle cook");
        cookedWaffle();
    }
}

const plateWaffle = () => {
    // get plate
    let plateExistence = prompt("do you have a plate?", "yes/no")
        // if there is a plate
    if (plateExistence == "yes"){
        // put waffle on plate
        placeWaffle();
    } else if (plateExistence == "no") {
        // if tehre is no plate
        // get a plate
        alert("get a plate");
        // check if there is a plate
        plateWaffle();
    }
}

const placeWaffle = () => {
    // prompt place waffle
    let beingNormal = prompt("put the waffle on the plate?", "yes/no");
    // if waffle goes on plate
    if(beingNormal == "yes"){
        // check syrup
        checkSyrup();
    } else if (beingNormal == "no"){
        // if not then re prompt
        alert("put the waffle on the plate");
        placeWaffle();
    }
}


const checkSyrup = () => {
    // check if there is syrup
    let syrupExistence = prompt("is there syrup", "yes/no");
    // if there is syrup, pour over waffle
    if (syrupExistence == "yes"){
        pourSyrup();
    } else if (syrupExistence == "no"){
        // else if there is no syrup
        // obtain syrup from cabinet
        alert("what are you doing? get the syrup");
        checkSyrup();
    }
}

const pourSyrup = () => {
    // prompt if they want to pour syrup
    let ultimanum = prompt("pour the syrup on the waffle?", "yes/no");
    // if they pour syrup
    if (ultimanum == "yes"){
        // you have poured the syrup. enjoy
        alert("you have poured the syrup. Enjoy");    
    } else if (ultimanum == "no") {
        // if they do not
        // pour the syrup
        alert("pour the syrup");
        // re prompt
        pourSyrup();
    }
}

let button = document.getElementById("clickme");
button.addEventListener("click", function(){
    checkWaffle();
});
