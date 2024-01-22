/** https://leetcode.com/problems/check-distances-between-same-letters/description/ */

const checkDistances = function(s, distance) {
    const result = [];

    for (let i = 0; s.length > i; i++) {
        const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (result[index] === undefined) {
            result[index] = i;
        } else {
            if (i - result[index] - 1 !== distance[index]) {
                return false;
            }

            result[index] = undefined;
        }
    }

    return true;
};