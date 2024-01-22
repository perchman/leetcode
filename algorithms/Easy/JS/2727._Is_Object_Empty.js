/** https://leetcode.com/problems/is-object-empty/description/ */

const isEmpty = function(obj) {
    if (typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }

    if (typeof obj === 'array') {
        return obj.length === 0;
    }

    return false;
};