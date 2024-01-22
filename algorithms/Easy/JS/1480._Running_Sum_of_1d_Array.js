/** https://leetcode.com/problems/running-sum-of-1d-array/description/ */

const runningSum = function(nums) {
    for (let i = 1; nums.length > i; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }

    return nums;
};