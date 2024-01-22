/** https://leetcode.com/problems/number-of-distinct-averages/description/ */

const distinctAverages = function(nums) {
    nums.sort((a, b) => a - b);

    const set = new Set();

    for (let i = 0; nums.length > i; i++) {
        set.add((nums[i] + nums[nums.length - 1 - i]) / 2);
    }

    return set.size;
};