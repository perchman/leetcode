/** https://leetcode.com/problems/faulty-keyboard/description/ */

const finalString = function(s) {
    let result = [];

    for (let symbol of s) {
        if (symbol === 'i') {
            for (let start = 0, end = result.length - 1; end > start; start++, end--) {
                const temp = result[start];
                result[start] = result[end];
                result[end] = temp;
            }
        } else {
            result.push(symbol);
        }
    }

    return result.join('');
};