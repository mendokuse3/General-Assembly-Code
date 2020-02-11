let sum = 0;

for (let i = 1; i < 1000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		sum += i;
	}
}

console.log('SUM: ', sum);

var dailyTemperatures = function(T) {
	let newArray = T.map((item, index) => {
		for (let i = index + 1; i < T.length; i++) {
			if (T[i] > item) {
				return i - index;
			}
		}
		return 0;
	});

	return newArray;
};
