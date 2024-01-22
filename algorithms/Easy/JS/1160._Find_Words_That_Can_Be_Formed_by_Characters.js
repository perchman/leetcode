/** https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/ */

const countCharacters = function(words, chars) {
    const charsMap = new Map();

    for (let char of chars) {
        charsMap.set(char, (charsMap.get(char) || 0) + 1);
    }

    let totalLength = 0;

    outerLoop: for (let word of words) {
        const charsMapCopy = new Map(charsMap);

        for (let char of word) {
            if (!charsMapCopy.has(char) || charsMapCopy.get(char) === 0) {
                continue outerLoop;
            } else {
                charsMapCopy.set(char, charsMapCopy.get(char) - 1);
            }
        }

        totalLength += word.length;
    }

    return totalLength;
};