/** https://leetcode.com/problems/valid-perfect-square/description/ */

const isPerfectSquare = function(num) {
    if (num < 2) return true;

    let i = 0,
        j = Math.floor(num / 2);

    while (j >= i) {
        const m = Math.floor((i + j) / 2),
            temp = m * m;

        if (temp === num) {
            return m;
        } else if (temp > num) {
            j = m - 1;
        } else {
            i = m + 1;
        }
    }

    return false;
};