/** https://leetcode.com/problems/excel-sheet-column-number/description/ */

const titleToNumber = function(columnTitle) {
    let result = 0;

    for (let i = 0; columnTitle.length > i; i++) {
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - (i + 1));
    }

    return result;
};