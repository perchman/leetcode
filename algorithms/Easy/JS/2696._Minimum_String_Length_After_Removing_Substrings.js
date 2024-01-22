/** https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/ */

const minLength = function(s) {
    const arr = [];

    for (let char of s) {
        if (arr[arr.length - 1] + char !== 'AB' && arr[arr.length - 1] + char !== 'CD') {
            arr.push(char);
        } else {
            arr.pop();
        }
    }

    return arr.length;
};