/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
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