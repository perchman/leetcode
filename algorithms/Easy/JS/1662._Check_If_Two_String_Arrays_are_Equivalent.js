/** https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/ */

const arrayStringsAreEqual = function(word1, word2) {
    let ia1 = 0,
        is1 = 0,
        ia2 = 0,
        is2 = 0;

    while (word1.length > ia1 && word2.length > ia2) {
        if (word1[ia1][is1] !== word2[ia2][is2]) {
            return false;
        }

        is1++;
        is2++;

        if (word1[ia1].length === is1) {
            ia1++;
            is1 = 0;
        }
        if (word2[ia2].length === is2) {
            ia2++;
            is2 = 0;
        }
    }

    return ia1 === word1.length && ia2 === word2.length;
};