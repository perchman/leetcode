/** https://leetcode.com/problems/shortest-completing-word/description/ */

const shortestCompletingWord = function(licensePlate, words) {
    const letters = new Map();

    for (let char of licensePlate) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            const lowChar = char.toLowerCase();
            letters.set(lowChar, (letters.get(lowChar) || 0) + 1);
        }
    }

    let result = null;

    for (let word of words) {
        const lettersCory = new Map(letters);

        for (let char of word) {
            if (lettersCory.has(char)) {
                lettersCory.set(char, lettersCory.get(char) - 1);

                if (lettersCory.get(char) === 0) {
                    lettersCory.delete(char);
                }
            }
        }

        if (lettersCory.size === 0) {
            if (result) {
                result = result.length > word.length ? word : result;
            } else {
                result = word;
            }
        }
    }

    return result;
};