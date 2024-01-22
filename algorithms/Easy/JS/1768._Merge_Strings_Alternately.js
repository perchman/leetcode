/** https://leetcode.com/problems/merge-strings-alternately/description/ */

const mergeAlternately = function(word1, word2) {
    let result = '';

    for (let i = 0; word1.length > i || word2.length > i; i++) {
        if (word1[i]) {
            result += word1[i];
        }

        if (word2[i]) {
            result += word2[i];
        }
    }

    return result;
};