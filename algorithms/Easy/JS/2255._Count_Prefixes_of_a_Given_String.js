/** https://leetcode.com/problems/count-prefixes-of-a-given-string/description/ */

const countPrefixes = function(words, s) {
    let count = 0;

    for (let i = 0; words.length > i; i++) {
        if (s.startsWith(words[i])) {
            count++;
        }
    }

    return count;
};