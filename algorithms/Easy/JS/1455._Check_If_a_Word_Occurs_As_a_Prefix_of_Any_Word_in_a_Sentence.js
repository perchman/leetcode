const isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');

    for (let i = 0; words.length > i; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
};