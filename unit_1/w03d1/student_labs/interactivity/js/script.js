<<<<<<< HEAD
// console.log("Hello World!");
// alert('Hello World!');
=======
// console.log('Hello world!');
// alert('Hello world!');
>>>>>>> 28768060fa240907aeea6ad0f003739ca03442a7

// const yourAnswer = prompt('Some question', 'A default value goes here');
// console.log(yourAnswer);

// const greet = () => {
<<<<<<< HEAD
//     alert('HI!');
// };

// const sayBye = () => {
//     alert('BYEEEEEE!');
// };

// const answer = prompt('Are you arriving or leaving?', 'Arriving or Leaving?');
//     if(answer === "Arriving") {
//         greet();
//     }else if (answer === 'Leaving') {
//         sayBye();
//     }else{
//         alert('ARE YOU COMING OR GOING?');
//     }

// let action = null;

// while(action !== 'Stop') {
//     action = prompt('What do you want to do?', 'Your action');
// }

// const func1 = ()=> {
//     console.log(1);
//     func2();
//     func3();
//     console.log('Finished!');
// }
// const func2 = ()=> {
//     console.log(2);
//     func4();
//     func6();
// }
// const func3 = ()=> {
//     console.log(3);
//     func5();
// }
// const func4 = ()=> {
//     console.log(4);
// }
// const func5 = ()=> {
//     console.log(5);
// }
// const func6 = ()=> {
//     console.log(6);
// }
// func1();

// let apples;
// let money;

// const start = () => {
//     apples = 0;
//     money = 20;
//     askForAction();
// };

// const showStatus = () => {
//     alert(`You have ${apples} apples and $${money}`);
// };

// const askForAction = () => {
//     showStatus();
//     const choice = prompt('What do you want to do?', 'buy apple/ eat apple/ restart');
//     if (choice === 'buy apple') {
//         buyApple();
//     } else if (choice === 'eat apple') {
//         eatApple();
//     } else if (choice === 'restart') {
//         start();
//     }
// };

// const buyApple = () => {
//     apples++;
//     money -= 1;
//     askForAction();
// };

// const eatApple = () => {
//     apples--;
//     askForAction();
// };
// start();
=======
// 	alert('hi');
// };

// const sayBye = () => {
// 	alert('Bye!');
// };

// const answer = prompt('Are you arriving or leaving?', 'Arriving or leaving?');

// if (answer === 'Arriving') {
// 	greet();
// } else if (answer === 'Leaving') {
// 	sayBye();
// }

// let action = null;

// while (action !== 'stop') {
// 	action = prompt('What do you want to do', 'Your action');
// }
// const func1 = () => {
// 	console.log(1);
// 	func2(); //why can I call this now, even though the definition is below?
// 	func3();
// 	console.log('Finished!');
// };
// const func2 = () => {
// 	console.log(2);
// 	func4();
// 	func6();
// };
// const func3 = () => {
// 	console.log(3);
// 	func5();
// };
// const func4 = () => {
// 	console.log(4);
// };
// const func5 = () => {
// 	console.log(5);
// };
// const func6 = () => {
// 	console.log(6);
// };
// func1();

let apples;
let money;

const start = () => {
	apples = 0;
	money = 20;
	askForAction();
};

const askForAction = () => {
	showStatus();
	const choice = prompt('What do you want to do?', 'buy apple/ eat apple / restart');
	if (choice === 'buy apple') {
		buyApple();
	} else if (choice === 'eat apple') {
		eatApple();
	} else if (choice === 'restart') {
		start();
	}
};

const showStatus = () => {
	alert('You have ' + apples + ' apples and $' + money);
};

const buyApple = () => {
	apples++;
	money -= 1;
	askForAction();
};

const eatApple = () => {
	apples--;
	askForAction();
};

start();
>>>>>>> 28768060fa240907aeea6ad0f003739ca03442a7
