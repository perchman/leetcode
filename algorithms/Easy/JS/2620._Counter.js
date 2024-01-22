/** https://leetcode.com/problems/counter/ */

const createCounter = function(n) {
    return function() {
        return n++;
    };
};