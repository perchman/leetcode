/** https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/ */

const findMaxK = function(nums) {
    const set = new Set();
    let maxNum = -1;

    for (let num of nums) {
        if (
            num >= -1000 && num <= -1 && set.has(-num) ||
            num >= 1 && num <= 1000 && set.has(-num)
        ) {
            maxNum = maxNum > Math.abs(num) ? maxNum : Math.abs(num);
        } else {
            set.add(num);
        }
    }

    return maxNum;
};