const greatestLetter = function(s) {
    const letters = new Set();
    let letter = '';

    for (let char of s) {
        if (
            char >= 'A' && char <= 'Z' && letters.has(char.toLowerCase()) ||
            char >= 'a' && char <= 'z' && letters.has(char.toUpperCase())
        ) {
            letter = letter > char.toUpperCase() ? letter : char.toUpperCase();
        } else {
            letters.add(char);
        }

    }

    return letter;
};