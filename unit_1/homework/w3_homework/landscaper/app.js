let bank = 0;
let totalLawnsMowed = 0;
let tools = ["TEETH", "RUSTY SCISSORS", "PUSH MOWER", "ELECTRIC MOWER", "RIDING MOWER DEULUXE"]
let currentTool = tools[0];
let income = 1;

const update = () => {
    document.getElementById("moneyInBank").innerHTML = bank;
    document.getElementById("totalLawnsMowed").innerHTML = totalLawnsMowed;
    document.getElementById("currentTool").innerHTML = currentTool;
    document.getElementById("income").innerHTML = income;
};
// I can get the reset to work for the button colors but they do not reset the disability

const gameStart = () => {
    bank = 0;
    totalLawnsMowed = 0;
    currentTool = tools[0];
    income = 1;
    document.getElementById("btn-scissors").style.backgroundColor = "#FCB97D";
    document.getElementById("btn-push").style.backgroundColor = "#FCB97D";
    document.getElementById("btn-electric").style.backgroundColor = "#FCB97D";
    document.getElementById("btn-tractor").style.backgroundColor = "#FCB97D";
    update();
};

const checkWin = () => {
    if (bank >= 1000) {
        gameStart();
        alert("YOU WIN!");
    }
};

const mowLawn = () => {
    bank += income;
    totalLawnsMowed++;
    update();
    checkWin();
};

const buyScissors = () => {
    if (bank >= 5) {
        bank -= 5;
        currentTool = tools[1];
        income = 5;
        document.getElementById("btn-scissors").style.backgroundColor = "#3F2A2B";
        document.getElementById("btn-scissors").setAttribute("disabled", true);
        update();
    }
}

const buyPush = () => {
    if (bank >= 10) {
        bank -= 10;
        currentTool = tools[2];
        income = 10;
        document.getElementById("btn-push").style.backgroundColor = "#3F2A2B";
        document.getElementById("btn-push").setAttribute("disabled", true);
        update();
    }
}

const buyElectric = () => {
    if (bank >= 50) {
        bank -= 50;
        currentTool = tools[3];
        income = 25;
        document.getElementById("btn-electric").style.backgroundColor = "#3F2A2B";
        document.getElementById("btn-electric").setAttribute("disabled", true);
        update();
    }
}

const buyTractor = () => {
    if (bank >= 500) {
        bank -= 500;
        currentTool = tools[4];
        income = 100;
        document.getElementById("btn-tractor").style.backgroundColor = "#3F2A2B";
        document.getElementById("btn-tractor").setAttribute("disabled", true);
        update();
    }
}


document.getElementById("btn-mower").onclick  = function() {mowLawn()};

document.getElementById("btn-scissors").onclick  = function() {buyScissors()};

document.getElementById("btn-push").onclick  = function() {buyPush()};

document.getElementById("btn-electric").onclick  = function() {buyElectric()};

document.getElementById("btn-tractor").onclick  = function() {buyTractor()};

document.getElementById("currentTool").innerHTML = currentTool;

document.getElementById("income").innerHTML = income;

document.getElementById("btn-reset").onclick  = function() {gameStart()};

