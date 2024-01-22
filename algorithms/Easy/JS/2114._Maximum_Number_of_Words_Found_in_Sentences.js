/** https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/ */

const mostWordsFound = function(sentences) {
    let result = 0;

    for (let sentence of sentences) {
        let count = 1;

        for (let symbol of sentence) {
            if (symbol === ' ') {
                count++;
            }
        }

        if (count > result) {
            result = count;
        }
    }

    return result;
};