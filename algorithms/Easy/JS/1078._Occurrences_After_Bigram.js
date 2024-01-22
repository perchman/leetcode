/** https://leetcode.com/problems/occurrences-after-bigram/description/ */

const findOcurrences = function(text, first, second) {
    text = text.split(' ');
    const ans = [];

    for (let i = 0; text.length - 2 > i; i++) {
        if (text[i] === first && text[i + 1] === second) {
            ans.push(text[i + 2]);
        }
    }

    return ans;
};