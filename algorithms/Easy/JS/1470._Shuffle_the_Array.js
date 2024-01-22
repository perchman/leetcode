/** https://leetcode.com/problems/shuffle-the-array/description/ */

const shuffle = function(nums, n) {
    let result = [];

    for (let i = 0; n > i; i++) {
        result.push(nums[i], nums[i + n]);
    }

    return result;
};