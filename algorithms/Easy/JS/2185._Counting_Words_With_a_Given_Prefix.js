/** https://leetcode.com/problems/counting-words-with-a-given-prefix/description/ */

const prefixCount = function(words, pref) {
    let count = 0;

    for (let word of words) {
        let match = true;

        for(let i = 0; pref.length > i; i++) {
            if (word[i] !== pref[i]) {
                match = false;
                break;
            }
        }

        if (match) {
            count++;
        }
    }

    return count;
};