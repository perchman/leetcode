/** https://leetcode.com/problems/array-prototype-last/description/ */

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }

    return this[this.length - 1];
};