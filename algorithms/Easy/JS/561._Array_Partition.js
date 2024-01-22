/** https://leetcode.com/problems/array-partition/description/ */

const arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let result = 0;

    for (let i = 0; nums.length > i; i += 2) {
        result += nums[i];
    }

    return result;
};