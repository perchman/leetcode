const longestPalindrome = function(s) {
    let count = 0;
    let obj = {};

    for (let char of s) {
        obj[char] = (obj[char] || 0) + 1;

        if (obj[char] % 2 == 0) {
            count += 2;
        }
    }

    return s.length > count ? count + 1 : count;
};