/** https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/ */

const vowelStrings = function(words, left, right) {
    const vowels = new Set('aeiou');
    let count = 0;

    for (let i = left; right >= i; i++) {
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
            count++;
        }
    }

    return count;
};