/** https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/ */

const strStr = function(haystack, needle) {
    let index = 0;

    for(let i = 0; haystack.length > i; i++) {
        if (haystack[i]==needle[index]){
            index++;

            if (needle.length === index) {
                return i - (index - 1);
            }
        } else {
            i = i - (index);
            index = 0;
        }
    }

    return -1;
};