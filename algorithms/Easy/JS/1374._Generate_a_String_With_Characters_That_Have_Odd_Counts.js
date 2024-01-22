/** https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/ */

const generateTheString = function(n) {
    return n % 2 == 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};