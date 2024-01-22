/** https://leetcode.com/problems/count-asterisks/description/ */

const countAsterisks = function(s) {
    let result = 0;
    let count = 0;

    for (let symbol of s) {
        if (count === 0 && symbol === '|') {
            count++;
        } else if (count === 1 && symbol === '|') {
            count--;
        } else if (count === 0 && symbol === '*') {
            result++;
        }
    }

    return result;
};