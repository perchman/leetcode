/** https://leetcode.com/problems/number-of-lines-to-write-string/description/ */

const numberOfLines = function(widths, s) {
    let count = 1;
    let currentWidth = 0;

    for (let i = 0; s.length > i; i++) {
        const charWidth = widths[s.charCodeAt(i) - 'a'.charCodeAt(0)];

        if (currentWidth + charWidth > 100) {
            count++;
            currentWidth = charWidth;
        } else {
            currentWidth += charWidth;
        }
    }

    return [count, currentWidth];
};