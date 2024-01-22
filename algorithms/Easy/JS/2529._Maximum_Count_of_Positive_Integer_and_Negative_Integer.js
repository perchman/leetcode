/** https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/ */

const maximumCount = function(nums) {
    let pos = 0,
        neg = 0;

    for (let num of nums) {
        if (num > 0) {
            pos++;
        } else if (num < 0) {
            neg++;
        }
    }

    return Math.max(pos, neg);
};