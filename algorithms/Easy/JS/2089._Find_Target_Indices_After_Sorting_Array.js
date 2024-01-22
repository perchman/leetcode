/** https://leetcode.com/problems/find-target-indices-after-sorting-array/description/ */

const targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);

    let ans = [];

    for (let i = 0; nums.length > i; i++) {
        if (nums[i] === target) ans.push(i);
    }

    return ans;
};