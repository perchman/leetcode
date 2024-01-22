/** https://leetcode.com/problems/replace-all-digits-with-characters/description/ */

const replaceDigits = function(s) {
    const shift = (c, x) => {
        return String.fromCharCode(c.charCodeAt(0) + parseInt(x));
    };

    let result = '';

    for (let i = 1; s.length > i; i += 2) {
        result += s[i - 1];
        result += shift(s[i - 1], s[i]);
    }

    return result;
};