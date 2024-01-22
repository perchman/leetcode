/** https://leetcode.com/problems/reverse-string/description/ */

const reverseString = function(s) {
    for (let i = 0, j = s.length - 1; j > i; i++, j--) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    return s;
};