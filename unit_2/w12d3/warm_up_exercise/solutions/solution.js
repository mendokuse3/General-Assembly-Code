const longestValidParen = (str) => {
	let char = [];
	let result = 0;
	let map = new Map();

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			char.push(str[i]);
			map.set(i, str[i]);
		} else if (str[i] === ')') {
			console.log(map);
			if (char[char.length - 1] === '(') {
				char.pop();
				result += 2;
			}
		}
	}
	return result;
};

console.log(longestValidParen('(a()'));
