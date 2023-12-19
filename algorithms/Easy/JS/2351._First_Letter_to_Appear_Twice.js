const repeatedCharacter = function(s) {
    const count = new Map();

    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);

        if (count.get(char) === 2) {
            return char;
        }
    }
};