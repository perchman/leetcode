/** https://leetcode.com/problems/flipping-an-image/description/ */

const flipAndInvertImage = function(image) {
    let result = [];

    for (let item of image) {
        for (let i = 0, j = item.length - 1; j > i; i++, j--) {
            const temp = item[i];
            item[i] = item[j] === 1 ? 0 : 1;
            item[j] = temp === 1 ? 0 : 1;
        }

        if (item.length % 2 !== 0) {
            item[item.length >> 1] = item[item.length >> 1] === 1 ? 0 : 1;
        }

        result.push(item);
    }

    return result;
};