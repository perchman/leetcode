/** https://leetcode.com/problems/design-an-ordered-stream/description/ */

const OrderedStream = function(n) {
    this.values = new Array(n);
    this.i = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    idKey--;
    this.values[idKey] = value;

    const result = [];

    while (this.i < this.values.length && this.values[this.i] !== undefined) {
        result.push(this.values[this.i]);
        this.i++;
    }

    return result;
};