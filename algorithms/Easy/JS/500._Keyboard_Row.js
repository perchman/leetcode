/** https://leetcode.com/problems/keyboard-row/description/ */

const findWords = function(words) {
    const topRow = new Set('qwertyuiop'),
        middleRow = new Set('asdfghjkl'),
        bottomRow = new Set('zxcvbnm');

    const result = [];

    outerLoop: for (let word of words) {
        let row;

        if (topRow.has(word[0].toLowerCase())) {
            row = new Set(topRow);
        } else if (middleRow.has(word[0].toLowerCase())) {
            row = new Set(middleRow);
        } else {
            row = new Set(bottomRow);
        }

        for (let char of word) {
            if (!row.has(char.toLowerCase())) {
                continue outerLoop;
            }
        }

        result.push(word);
    }

    return result;
};