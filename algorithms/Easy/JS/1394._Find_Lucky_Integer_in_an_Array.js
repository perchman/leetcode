/** https://leetcode.com/problems/find-lucky-integer-in-an-array/description/ */

const findLucky = function(arr) {
    const map = new Map();

    let lucky = -1;

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
        if (num === count) {
            lucky = lucky > num ? lucky : num;
        }
    }

    return lucky;
};