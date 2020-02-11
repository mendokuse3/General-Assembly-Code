const arr = [ [ 10, 20, 30 ], [ 40, 50, 60 ], [ 70, -80, 90 ] ];

const greatestSum = (arr) => {
	let rows = 0;
	let col = 0;

	for (let i = 0; i < arr.length; i++) {
		// rows
		rows = arr[i].reduce((a, b) => a + b) > rows ? arr[i].reduce((a, b) => a + b) : rows;

		// cols
		let currentCol = 0;
		for (let x = 0; x < arr.length; x++) {
			currentCol += arr[x][i];
		}
		col = currentCol > col ? currentCol : col;
	}

	return Math.max(rows, col, dia);
};

console.log(greatestSum(arr));
