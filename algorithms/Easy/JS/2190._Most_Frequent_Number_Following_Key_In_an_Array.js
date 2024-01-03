const mostFrequent = function(nums, key) {
    const map = new Map();

    let maxCount = 0,
        target = -1;

    for (let i = 0; nums.length - 1 > i; i++) {
        if (nums[i] === key) {
            const count = (map.get(nums[i + 1]) || 0) + 1;

            map.set(nums[i + 1], count);

            if (count > maxCount || (count === maxCount && nums[i + 1] > target)) {
                maxCount = count;
                target = nums[i + 1];
            }
        }
    }

    return target;
};