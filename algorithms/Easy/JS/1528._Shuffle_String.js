/** https://leetcode.com/problems/shuffle-string/description/ */

const restoreString = function(s, indices) {
    const result = new Array(s.length);

    for (let i = 0; s.length > i; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
};