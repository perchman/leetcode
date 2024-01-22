/** https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/ */

const makeEqual = function(words) {
    const map = new Map();

    for (const word of words) {
        for (const char of word) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    for (const [char, count] of map) {
        if (count % words.length !== 0) {
            return false;
        }
    }

    return true;
};