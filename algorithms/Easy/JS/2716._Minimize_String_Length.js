/** https://leetcode.com/problems/minimize-string-length/description/ */

const minimizedStringLength = function(s) {
    return new Set(s).size;
};