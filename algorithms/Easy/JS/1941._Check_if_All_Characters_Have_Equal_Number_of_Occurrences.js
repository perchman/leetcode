/** https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/ */

const areOccurrencesEqual = function(s) {
    const count = new Map ();

    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    let firstElem = null;

    for (let elem of count) {
        if (!firstElem) {
            firstElem = elem;
            continue;
        } else {
            if (firstElem[1] !== elem[1]) {
                return false
            }
        }
    }

    return true;
};