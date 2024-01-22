/** https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/ */

const isAcronym = function(words, s) {
    if (words.length !== s.length) {
        return false;
    }

    for (let i = 0; words.length > i; i++) {
        if (words[i][0] !== s[i]) {
            return false;
        }
    }

    return true;
};