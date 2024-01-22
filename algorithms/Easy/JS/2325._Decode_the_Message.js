/** https://leetcode.com/problems/decode-the-message/description/ */

const createDecodedAlphabet = function(key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const decodedAlphabet = new Map();

    let i = 0;

    for (let symbol of key) {
        if (symbol !== ' ' && !decodedAlphabet.has(symbol)) {
            decodedAlphabet.set(symbol, alphabet[i]);
            i++;
        }
    }

    return decodedAlphabet;
}

const decodeMessage = function(key, message) {
    const decodedAlphabet = createDecodedAlphabet(key);

    let result = '';

    for (let symbol of message) {
        result += symbol === ' ' ? ' ' : decodedAlphabet.get(symbol);
    }

    return result;
};