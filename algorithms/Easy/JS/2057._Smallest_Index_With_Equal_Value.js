/** https://leetcode.com/problems/smallest-index-with-equal-value/description/ */

const smallestEqual = function(nums) {
    for (let i = 0; nums.length > i; i++) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }

    return -1;
};