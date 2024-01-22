/** https://leetcode.com/problems/count-the-number-of-consistent-strings/description/ */

const countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;

    for (let word of words) {
        let allow = true;

        for (let symbol of word) {
            if (!allowedSet.has(symbol)) {
                allow = false;
                break;
            }
        }

        if (allow) {
            count++;
        }
    }

    return count;
};