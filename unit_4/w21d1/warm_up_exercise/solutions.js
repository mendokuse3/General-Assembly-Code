// Delete Operation for Two Strings

var minDistance = function(word1, word2) {
	let matrix = Array(word1.length + 1).fill(0);

	for (let x in matrix) {
		matrix[x] = Array(word2.length + 1).fill(0);
	}

	for (let i = 1; i <= word1.length; i++) {
		for (let k = 1; k <= word2.length; k++) {
			if (word1.charAt(i - 1) === word2.charAt(k - 1)) {
				matrix[i][k] = matrix[i - 1][k - 1] + 1;
			} else {
				matrix[i][k] = Math.max(matrix[i][k - 1], matrix[i - 1][k]);
			}
		}
	}

	return word1.length + word2.length - 2 * matrix[word1.length][word2.length];
};

//  Search in Rotated Sorted Array

var search = function(nums, target) {
	// find the rotate point
	var n = nums.length;

	if (n < 1) return -1;
	else if (n < 2) {
		return nums[0] === target ? 0 : -1;
	}

	var start = 0,
		end = n - 1;

	while (start < end) {
		var mid = Math.floor((start + end) / 2);
		// if the mid is larger than the end
		if (nums[mid] > nums[end]) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}

	// we found the rotate point
	var rot = start;

	// regular binary search
	start = 0;
	end = n - 1;

	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		var realMid = (mid + rot) % n;
		if (nums[realMid] === target) {
			return realMid;
		} else if (nums[realMid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}

	return -1;
};
