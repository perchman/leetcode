const uniqueOccurrences = function(arr) {
    const nums = {};

    for (let num of arr) {
        nums[num] = (nums[num] || 0) + 1;
    }

    const counts = new Set();

    for (let num in nums) {
        if (counts.has(nums[num])) {
            return false;
        }

        counts.add(nums[num]);
    }

    return true;
};