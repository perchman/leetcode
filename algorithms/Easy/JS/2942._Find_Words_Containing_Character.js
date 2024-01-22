/** https://leetcode.com/problems/find-words-containing-character/description/ */

const findWordsContaining = function(words, x) {
    const result = [];

    for (let i = 0; words.length > i; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }

    return result;
};