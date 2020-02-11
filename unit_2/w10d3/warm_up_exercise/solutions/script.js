// 1.Sum numbers recursive
// const numsToSum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const sumNumbers = (arr, sum) => {
// 	sum = sum || 0;
// 	if (arr.length === 0) return sum;
// 	sum += arr.shift();
// 	return sumNumbers(arr, sum);
// };

// console.log(sumNumbers(numsToSum));

// 2. factorial

// const factorial = (n, sum = 1) => {
// 	if (n <= 1) return sum;
// 	return factorial(n - 1, (sum *= n));
// };

// console.log(factorial(5));

// 3. Even or Odd
const isEven = (n) => {
	return n === 0 ? true : n < 0 ? false : isEven(n - 2);
};

// console.log(isEven(4));

//4. fib recursive

// 3. count steps // with memoization

// const countSteps = (n, obj = {}) => {
// 	if (n === 1) return 1;
// 	if (n === 2) return 2;
// 	if (obj[n]) return obj[n];

// 	obj[n] = countSteps(n - 1, obj) + countSteps(n - 2, obj);
// 	return obj[n];
// };

// console.log(countSteps(45));
