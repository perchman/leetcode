/** https://leetcode.com/problems/to-lower-case/description/ */

const toLowerCase = function(s) {
    let result = '';

    for (let i = 0; s.length > i; i++) {
        const charCode = s.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32)
        } else {
            result += s[i];
        }
    }

    return result;
};