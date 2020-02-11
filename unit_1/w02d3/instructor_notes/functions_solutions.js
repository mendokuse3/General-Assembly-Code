// palindrome examples

const checkPalindrome = (word) => {
	if (word === word.split('').reverse().join('')) {
		return true;
	} else {
		return false;
	}
};

// console.log(checkPalindrome('bart'));

// small problems

const checkStrings = (str, str2) => {
	return str === str2 ? true : false;
};

console.log(checkStrings('hi', 'hi'));

// sum to string

const sumToString = (num, num2, num3) => {
	return (num + num2 + num3).toString();
};

console.log(sumToString(1, 2, 3));
