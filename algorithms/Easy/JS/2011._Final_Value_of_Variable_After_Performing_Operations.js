/** https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/ */

const finalValueAfterOperations = function(operations) {
    let x = 0;

    for (let i of operations) {
        if (i === '++X' || i === 'X++') {
            x++;
        } else {
            x--;
        }
    }

    return x;
};