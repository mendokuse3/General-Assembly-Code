// //maxOfThree

// const maxOfThree = (num, num2, num3) => {
// 	return Math.max(num, num2, num3);
// };

// console.log(maxOfThree(6, 9, 1));

// const printLongestWord = (arr) => {
// 	return arr.sort(function(a, b) {
// 		return b.length - a.length;
// 	})[0];
// };

// console.log(printLongestWord([ 'BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'blob' ]));

// Project Euler Problem 2

// const fib = (limit) => {
// 	let arr = [ 0 ];
// 	let evenArr = [];

// 	for (let i = 0; i < 100; i++) {
// 		if (arr[arr.length - 1] <= limit) {
// 			if (i > 1) {
// 				arr.push(arr[i - 1] + arr[i - 2]);
// 			} else {
// 				arr.push(i);
// 			}
// 		}
// 	}

// 	for (index of arr) {
// 		if (index % 2 === 0) {
// 			evenArr.push(index);
// 		}
// 	}

// 	let sum = arr.reduce((acc, current) => {
// 		return acc + current;
// 	});

// 	let sumEven = evenArr.reduce((acc, current) => {
// 		return acc + current;
// 	});

// 	// return evenArr;
// 	return arr;
// };

// console.log(fib(40));

// //Transmogrify the Numbers

// const transmogrify = (num, num2, num3) => {
// 	return Math.pow(num * num2, num3);
// };

// console.log(transmogrify(5, 3, 2));

// /// find the needle

// const find_needle = (arr) => {
// 	if (arr.indexOf('needle') !== 0) {
// 		return 'found the needle at position ' + arr.indexOf('needle');
// 	}
// };

// console.log(find_needle([ 'hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk' ]));

// // sum the positive

// const sumPositive = (arr) => {
// 	let count = 0;
// 	for (index of arr) {
// 		if (index > 0) {
// 			count += index;
// 		}
// 	}
// 	return count;
// };

// console.log(sumPositive([ 1, -4, 7, 12 ]));
