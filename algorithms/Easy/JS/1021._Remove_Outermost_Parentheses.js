/** https://leetcode.com/problems/remove-outermost-parentheses/description/ */

const removeOuterParentheses = function(s) {
    let result = '';
    let count = 0;

    for (const symbol of s) {
        if (symbol === '(') {
            if (count > 0) {
                result += symbol;
            }
            count++;
        } else {
            count--;
            if (count > 0) {
                result += symbol;
            }
        }
    }

    return result;
};