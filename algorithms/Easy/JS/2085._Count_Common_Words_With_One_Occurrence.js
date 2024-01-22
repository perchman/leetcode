/** https://leetcode.com/problems/count-common-words-with-one-occurrence/description/ */

const countWords = function(words1, words2) {
    const countWords = new Map();
    const deletedWords = new Set();
    let count = 0;

    for (let word of words1) {
        if (countWords.get(word) === 1) {
            countWords.delete(word);
            deletedWords.add(word);
        } else {
            if (!deletedWords.has(word)) {
                countWords.set(word, (countWords.get(word) || 0) + 1);
            }
        }
    }

    for (let word of words2) {
        if (countWords.has(word)) {
            countWords.set(word, countWords.get(word) + 1);

            if (countWords.get(word) === 2) {
                count++;
            } else if (countWords.get(word) === 3) {
                countWords.delete(word);
                count--;
            }
        }
    }

    return count;
};