/** https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/ */

const repeatedNTimes = function(nums) {
    const count = new Map();

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);

        if (count.get(num) === 2) {
            return num;
        }
    }
};