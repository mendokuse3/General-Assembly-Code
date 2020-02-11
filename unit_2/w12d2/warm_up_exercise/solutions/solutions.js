var containsNearbyDuplicate = function(nums, k) {
	if (nums.length <= 1) {
		return false;
	}

	for (let i = 0; i < nums.length; i++) {
		for (let x = i + 1; x < nums.length; x++) {
			if (nums[i] === nums[x]) {
				if (x - i <= k) {
					return true;
				}
			}
		}
	}

	return false;
};
