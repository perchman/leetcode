/** https://leetcode.com/problems/concatenation-of-array/description/ */

const getConcatenation = function(nums) {
    const ans = new Array(nums.length * 2);

    for (let i = 0; nums.length * 2 > i; i++) {
        ans[i] = nums[i % nums.length];
    }

    return ans;
};