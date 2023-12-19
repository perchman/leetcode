const vowels = new Set (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

const halvesAreAlike = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let left = 0,
        right = 0;

    for (let i = 0, j = s.length - 1; j > i; i++, j--) {
        if (vowels.has(s[i])) {
            left++;
        }
        if (vowels.has(s[j])) {
            right++;
        }
    }

    return left === right;
};