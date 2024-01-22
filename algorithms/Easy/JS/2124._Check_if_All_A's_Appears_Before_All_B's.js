/** https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/ */

const checkString = function(s) {
    let foundB = false;

    for (let char of s) {
        if (char === 'a') {
            if (foundB) {
                return false;
            }
        } else {
            foundB = true;
        }
    }

    return true;
};