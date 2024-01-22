/** https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/ */

const findNumbers = function(nums) {
    let count = 0;

    for (let num of nums) {
        if (num.toString().length % 2 === 0) count++;
    }

    return count;
};