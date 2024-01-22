/** https://leetcode.com/problems/merge-similar-items/description/ */

const mergeSimilarItems = function(items1, items2) {
    const obj = {};

    for (let item of items1) {
        obj[item[0]] = item[1];
    }

    for (let item of items2) {
        obj[item[0]] = (obj[item[0]] || 0) + item[1];
    }

    let result = [];

    for (let key in obj) {
        result.push([key, obj[key]]);
    }

    return result;
};