/** https://leetcode.com/problems/find-missing-and-repeated-values/description/ */

const findMissingAndRepeatedValues = function(grid) {
    const set = new Set();
    let repeat = 0,
        missing = 0;

    for (let row of grid) {
        for (let cell of row) {
            if (set.has(cell)) repeat = cell;

            set.add(cell)
        }
    }

    for (let i = 1; grid.length ** 2 >= i; i++) {
        if (!set.has(i)) missing = i;
    }

    return [repeat, missing];
};