/** https://leetcode.com/problems/build-array-from-permutation/description/ */

const buildArray = function(nums) {
    const ans = new Array(nums.length);

    for (let i = 0; nums.length > i; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};