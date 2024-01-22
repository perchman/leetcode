/** https://leetcode.com/problems/guess-number-higher-or-lower/description/ */

const guessNumber = function(n) {
    if (n === 1) return n;

    let i = 1,
        j = n;

    while (j >= i) {
        const m = Math.floor((i + j) / 2);
        const result = guess(m);

        if (result === 0) return m;

        if (result === -1) {
            j = m - 1;
        } else {
            i = m + 1;
        }
    }
};