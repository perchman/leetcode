/** https://leetcode.com/problems/check-if-n-and-its-double-exist/description/ */

const checkIfExist = function(arr) {
    const set = new Set();

    for (let num of arr) {
        if (set.has(num * 2) || set.has(num / 2)) {
            return true;
        }

        set.add(num);
    }

    return false;
};