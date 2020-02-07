// const foo = {
<<<<<<< HEAD
//     someMethod: () => {
//         console.log("Hello World");
//     }
=======
// 	someMethod: () => {
// 		console.log('Hello World');
// 	}
>>>>>>> 6749bd3222fd260752b30d81efd1adc8dfc589fc
// };

// foo.someMethod();

<<<<<<< HEAD
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"],
//     () => {
//         console.log('fun');
//     }
// ];

// foo[3]();

// const foo2 = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// for (let i = 0; i < foo2.length; i ++) {
//     for (let j = 0; j < foo2[i].length; j++) {
//         console.log(foo2[i][j]);
//     }
// }

// const functionObj = () => {
//     return {
//         someProperty: "Hi!"
//     };
=======
const foo = [
	[ '0,0', '0,1', '0,2' ],
	[ '1,0', '1,1', '1,2' ],
	[ '2,0', '2,1', '2,2' ],
	() => {
		console.log('fun');
	}
];

// console.log(foo[2][0]);
// foo[3]();

// const foo2 = [ [ '0,0', '0,1', '0,2' ], [ '1,0', '1,1', '1,2' ], [ '2,0', '2,1', '2,2' ] ];

// for (let i = 0; i < foo2.length; i++) {
// 	for (let x = 0; x < foo2[i].length; x++) {
// 		console.log(foo2[i][x]);
// 	}
// }

// const functionObj = () => {
// 	return {
// 		someProperty: 'Hi!'
// 	};
>>>>>>> 6749bd3222fd260752b30d81efd1adc8dfc589fc
// };

// console.log(functionObj().someProperty);

const functionFunction = () => {
<<<<<<< HEAD
    return () => {
        console.log('oh hai Mark!');
    };
};

functionFunction()();
=======
	return () => {
		console.log('Hi world!');
	};
};

functionFunction()();
>>>>>>> 6749bd3222fd260752b30d81efd1adc8dfc589fc
