/** https://leetcode.com/problems/uncommon-words-from-two-sentences/description/ */

const uncommonFromSentences = function(s1, s2) {
    const map = new Map();

    const filling = (str) => {
        let word = '';

        for (let char of str) {
            if (char === ' ') {
                map.set(word, (map.get(word) || 0) + 1);
                word = '';
            } else {
                word += char;
            }
        }

        if (word) {
            map.set(word, (map.get(word) || 0) + 1);
        }
    }

    filling(s1);
    filling(s2);

    const result = [];

    for (let [word, count] of map) {
        if (count === 1) {
            result.push(word);
        }
    }

    return result;
};