/** https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/ */

const sortByBits = function(arr) {
    const countBits = num => {
        let count = 0;

        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }

        return count;
    };

    arr.sort((a, b) => {
        const countA = countBits(a);
        const countB = countBits(b);

        if (countA !== countB) {
            return countA - countB;
        } else {
            return a - b;
        }
    });

    return arr;
};