/** https://leetcode.com/problems/roman-to-integer/description/ */

const romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; s.length > i; i++) {
        const symbol = s[i];
        const value = romanNumerals[symbol];
        const nextSymbol = s[i + 1];
        const nextValue = romanNumerals[nextSymbol];

        if (nextValue > value) {
            result += nextValue - value;
            i++;
        } else {
            result += value;
        }
    }

    return result;
};