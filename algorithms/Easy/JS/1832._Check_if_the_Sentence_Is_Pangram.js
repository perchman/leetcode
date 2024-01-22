/** https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/ */

const checkIfPangram = function(sentence) {
    const letters = new Set();

    for (const char of sentence) {
        letters.add(char);

        if (letters.size === 26) {
            return true;
        }
    };

    return false;
};