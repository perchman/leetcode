const findSubarrays = function(nums) {
    const sum = new Set();

    for (let i = 0; nums.length - 1 > i; i++) {
        if (sum.has(nums[i] + nums[i + 1])) {
            return true;
        } else {
            sum.add(nums[i] + nums[i + 1]);
        }
    }

    return false;
};