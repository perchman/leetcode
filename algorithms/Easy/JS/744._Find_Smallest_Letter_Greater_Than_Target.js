const nextGreatestLetter = function(letters, target) {
    let i = 0,
        j = letters.length;

    while (j > i) {
        const m = Math.floor((i + j) / 2);

        if (target >= letters[m]) {
            i = m + 1;
        } else {
            j = m;
        }
    }

    return letters.length > i ? letters[i] : letters[0];
};