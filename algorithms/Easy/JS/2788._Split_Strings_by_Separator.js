/** https://leetcode.com/problems/split-strings-by-separator/description/ */

const splitWordsBySeparator = function(words, separator) {
    let result = [];
    let string = '';

    for (let word of words) {
        for (let char of word) {
            if (char === separator) {
                if (string !== '') {
                    result.push(string);
                    string = '';
                }
            } else {
                string += char;
            }
        }

        if (string !== '') {
            result.push(string);
            string = '';
        }
    }

    return result;
};