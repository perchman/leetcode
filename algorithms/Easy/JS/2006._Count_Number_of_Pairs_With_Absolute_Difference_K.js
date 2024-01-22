/** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/ */

const countKDifference = function(nums, k) {
    const map = new Map();
    let count = 0;

    for (const num of nums) {
        count += map.get(num - k) || 0;

        count += map.get(num + k) || 0;

        map.set(num, (map.get(num) || 0) + 1);
    }

    return count;
};