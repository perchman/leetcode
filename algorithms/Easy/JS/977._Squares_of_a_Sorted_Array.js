/** https://leetcode.com/problems/squares-of-a-sorted-array/description/ */

const sortedSquares = function(nums) {
    for (let i = 0; nums.length > i; i++) {
        nums[i] = nums[i] ** 2;
    }

    return nums.sort((a, b) => a - b);
};