/** https://leetcode.com/problems/smallest-range-i/description/ */

const smallestRangeI = function(nums, k) {
    nums.sort((a, b) => a - b);

    const min = nums[0] + k,
        max = nums[nums.length - 1] - k;

    return Math.max(0, max - min);
};