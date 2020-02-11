// callbacks = (foo) => {
// 	console.log(foo);
// 	foo();
// };

// foo = () => {
// 	console.log('hi');
// };

// callbacks(foo);

// see and guess

// foo(bar, 'hi'); ==> logs "hi"

// See if you can guess what this will log:

const foo = (param, param2) => {
	param(param2, 'hello');
};

const bar = (param, param2) => {
	console.log(param2);
};
const baz = (param) => {
	console.log(param.toUpperCase());
};

// foo(bar, 'hi');
// => logs hi hello
// foo(baz, 'hello');
// => logs hi HELLO

// ELECTRIC MIXER

// electricMixer = (attachment) => {
// 	console.log('This mixer is now: ' + attachment());
// };

// electricMixer(() => {
// 	return 'spiralizing';
// });

// Set Interval
// let counter = 0;
// setInterval(() => {
// 	console.log(counter++);
// }, 1000);

// word reverse
// wordReverse = (str) => {
// 	str = str.split(' ').reverse().join(' ');
// 	return str;
// };

// // console.log(wordReverse('madeline'));

// // uppercase
// toUpperCase = (str) => {
// 	return str.toUpperCase();
// };

// // console.log(toUpperCase('madeline'));

// // repmaster
// repMaster = (str, param2) => {
// 	return param2(str) + ' proves that I am the rep MASTER!';
// };

// console.log(repMaster('I finished this practice', wordReverse));
