/** https://leetcode.com/problems/split-a-string-in-balanced-strings/description/ */

const balancedStringSplit = function(s) {
    let result = 0;
    let count = 0;

    for (let i of s) {
        if (i === 'L') {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            result++;
        }
    }

    return result;
};