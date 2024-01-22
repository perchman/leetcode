/** https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/ */

const canBeEqual = function(target, arr) {
    const map = new Map();

    for (let num of target) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of arr) {
        if (!map.has(num)) {
            return false;
        } else {
            map.set(num, map.get(num) - 1);

            if (map.get(num) === 0) {
                map.delete(num);
            }
        }
    }

    return true;
};