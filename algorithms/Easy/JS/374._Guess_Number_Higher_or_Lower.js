/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

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