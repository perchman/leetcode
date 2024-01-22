/** https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/ */

const maxDepth = function(s) {
    let maxDepth = 0;
    let count = 0;

    for (let symbol of s) {
        if (symbol === '(') {
            count++;
        } else if (symbol === ')') {
            count--;
        }

        if (count > maxDepth) {
            maxDepth = count;
        }
    }

    return maxDepth;
};