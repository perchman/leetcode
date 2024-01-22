/** https://leetcode.com/problems/unique-morse-code-words/description/ */

const morse = [
    ['a', ".-"], ['b', "-..."], ['c', "-.-."], ['d', "-.."],
    ['e', "."], ['f', "..-."], ['g', "--."], ['h', "...."],
    ['i', ".."], ['j', ".---"], ['k', "-.-"], ['l', ".-.."],
    ['m', "--"], ['n', "-."], ['o', "---"], ['p', ".--."],
    ['q', "--.-"], ['r', ".-."], ['s', "..."], ['t', "-"],
    ['u', "..-"], ['v', "...-"], ['w', ".--"], ['x', "-..-"],
    ['y', "-.--"], ['z', "--.."]
]

const uniqueMorseRepresentations = function(words) {
    const morseMap = new Map(morse);

    const uniqueMorse = new Set();

    for (let word of words) {
        let morseWord = '';

        for (let symbol of word) {
            morseWord += morseMap.get(symbol);
        }

        uniqueMorse.add(morseWord);
    }

    return uniqueMorse.size;
};