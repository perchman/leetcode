const minOperations = function(nums, k) {
    const map = new Map();

    let sum = k * (k + 1) / 2,
        count = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (sum === 0) break;

        if (!map.has(nums[i])) {
            map.set(nums[i], 1);

            if (nums[i] <= k) {
                sum = sum - nums[i];
            }

            count++;
        } else if (map.get(nums[i]) === 1) {
            count++;
        }
    }

    return count;
};