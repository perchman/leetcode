const canBeTypedWords = function(text, brokenLetters) {
    const brokenLettersSet = new Set(brokenLetters);

    let countWords = 0;
    let isIncompleteWord = false;

    for (let letter of text) {
        if (letter === ' ') {
            if (!isIncompleteWord) {
                countWords++;
            }
            isIncompleteWord = false;
        } else if (brokenLettersSet.has(letter)) {
            isIncompleteWord = true;
        }
    }

    if (!isIncompleteWord) {
        countWords++;
    }

    return countWords;
};