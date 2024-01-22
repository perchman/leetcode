/** https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/ */

const numberOfPairs = function(nums) {
    const set = new Set();
    let count = 0;

    for (let num of nums) {
        if (set.has(num)) {
            count++;
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    return [count, set.size];
};