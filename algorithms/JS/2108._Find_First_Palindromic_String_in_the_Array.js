const isPalindromic = function(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

const firstPalindrome = function(words) {
    for (let word of words) {
        if (isPalindromic(word)) {
            return word;
        }
    }

    return '';
};