/** https://leetcode.com/problems/first-bad-version/description/ */

const solution = function(isBadVersion) {
    return function(n) {
        if (n === 1) return n;

        let i = 1,
            j = n;

        while (j >= i) {
            const m = Math.floor((i + j) / 2);

            if (isBadVersion(m)) {
                j = m - 1;
            } else {
                i = m + 1;
            }
        }

        return i;
    };
};