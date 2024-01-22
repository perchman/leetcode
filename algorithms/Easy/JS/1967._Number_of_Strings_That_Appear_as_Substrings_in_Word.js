/** https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/ */

const numOfStrings = function(patterns, word) {
    let count = 0;

    for (let pattern of patterns) {
        if (word.includes(pattern)) {
            count++;
        }
    }

    return count;
};