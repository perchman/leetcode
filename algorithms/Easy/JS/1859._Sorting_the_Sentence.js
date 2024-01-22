/** https://leetcode.com/problems/sorting-the-sentence/description/ */

const sortSentence = function(s) {
    s = s.split(' ');
    const words = new Array(s.length);

    for (let word of s) {
        const match = word.match(/([a-zA-Z]+)(\d+)/);
        words[match[2] - 1] = match[1];
    }

    return words.join(' ');
};