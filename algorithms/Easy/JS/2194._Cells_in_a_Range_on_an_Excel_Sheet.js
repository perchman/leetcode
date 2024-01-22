/** https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/ */

const cellsInRange = function(s) {
    const initCol = s[0],
        initColRowsCount = s[1],
        endCol = s[3],
        endColRowsCount = s[4];

    const unicodeInit = initCol.charCodeAt(0),
        unicodeEnd = endCol.charCodeAt(0),
        difference = unicodeEnd - unicodeInit;

    const maxRows = Math.max(initColRowsCount, endColRowsCount);

    const result = [];
    let colCount = 0,
        rowCount = initColRowsCount;

    while (difference >= colCount) {
        result.push(String.fromCharCode(unicodeInit + colCount) + rowCount);

        if (rowCount >= maxRows) {
            rowCount = initColRowsCount;
            colCount++;
        } else {
            rowCount++;
        }
    }

    return result;
};