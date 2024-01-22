/** https://leetcode.com/problems/lexicographically-smallest-palindrome/description/ */

const makeSmallestPalindrome = function(s) {
    const result = new Array(s.length);

    for (let i = 0, j = s.length - 1; j > i; i++, j--) {
        if (s[i] !== s[j]) {
            if (s[i] > s[j]) {
                result[i] = s[j];
                result[j] = s[j];
            } else {
                result[i] = s[i];
                result[j] = s[i];
            }
        } else {
            result[i] = s[i];
            result[j] = s[i];
        }
    }

    if (s.length % 2 !== 0) {
        const index = Math.floor(s.length / 2);
        result[index] = s[index];
    }

    return result.join('');
};