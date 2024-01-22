/** https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/ */

const removeDuplicates = function(s) {
    const result = [];

    for (let char of s) {
        if (result[result.length - 1] === char) {
            result.pop();
        } else {
            result.push(char);
        }
    }

    return result.join('');
};