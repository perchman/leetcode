/** https://leetcode.com/problems/find-common-characters/description/ */

const commonChars = function(words) {
    let chars = [...words[0]];

    for (let i = 1; words.length > i; i++) {
        let iChars = [];

        for (let char of words[i]) {
            if (chars.includes(char)) {
                iChars.push(char);
                chars.splice(chars.indexOf(char), 1);
            }
        }

        chars = iChars;
    }

    return chars;
};