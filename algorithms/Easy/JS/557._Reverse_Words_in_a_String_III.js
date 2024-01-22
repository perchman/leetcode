/** https://leetcode.com/problems/reverse-words-in-a-string-iii/description/ */

const reverseWords = function(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let start = i;

        while (i < s.length && s[i] !== ' ') {
            i++;
        }

        let end = i - 1;

        while (end >= start) {
            result += s[end];
            end--;
        }

        if (s.length > i) {
            result += ' ';
        }
    }

    return result;
};