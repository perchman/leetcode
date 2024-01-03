const stringMatching = function(words) {
    const result = [];

    for (let i = 0; words.length > i; i++) {
        for (let j = 0; words.length > j; j++) {
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break;
            }
        }
    }

    return result;
};