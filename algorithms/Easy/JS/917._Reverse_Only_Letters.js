const reverseOnlyLetters = function(s) {
    const isLetter = char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

    let ans = '',
        i = 0,
        j = s.length - 1;

    while (s.length > i) {
        if (!isLetter(s[j]) && j >= 0) {
            j--;
            continue;
        }

        ans += isLetter(s[i]) ? s[j--] : s[i];
        i++;
    }

    return ans;
};