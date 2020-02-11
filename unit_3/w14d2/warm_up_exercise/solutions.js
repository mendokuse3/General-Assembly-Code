const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}

	return arr;
};

// TIME COMPLEXITY: O(n2)
// SPACE COMPLEXITY O(n)

console.log(bubbleSort([ 2, 1, 3, 0, 8, -1 ]));

// MERGE SORT
const merge = (left, right) => {
	let results = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return results.concat(left.length ? left : right);
};
const mergeSort = (arr) => {
	if (arr.length < 2) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([ 2, 1, 3, 0, 8, -1 ]));

// TIME = O(N log N)

const quickSort = (arr) => {
	if (arr.length <= 1) return arr;

	let pivot = Math.floor(arr.length / 2);
	let left = [],
		right = [];

	for (let i = 0; i < arr.length; i++) {
		if (i !== pivot) {
			if (arr[i] < arr[pivot]) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
	}

	return quickSort(left).concat(arr[pivot]).concat(quickSort(right));
};

console.log(quickSort([ 20, 8, 2, 0, 3, 45 ]));
console.log(quickSort([]));
// TIME = O(N log N)
