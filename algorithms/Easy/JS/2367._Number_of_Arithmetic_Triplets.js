/** https://leetcode.com/problems/number-of-arithmetic-triplets/description/ */

const arithmeticTriplets = function(nums, diff) {
    const set = new Set();
    let count = 0;

    for (let num of nums) {
        set.add(num);

        if (set.has(num - diff) && set.has(num - diff * 2)) {
            count++;
        }
    }

    return count;
};