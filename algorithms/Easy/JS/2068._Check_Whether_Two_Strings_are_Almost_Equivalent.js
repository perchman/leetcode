/** https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/ */

const checkAlmostEquivalent = function(word1, word2) {
    const map = new Map();

    for (let i = 0; word1.length > i; i++) {
        map.set(word1[i], (map.get(word1[i]) || 0) + 1);
        map.set(word2[i], (map.get(word2[i]) || 0) - 1);
    }

    for (const [char, count] of map) {
        if (Math.abs(count) > 3) return false;
    }

    return true;
};