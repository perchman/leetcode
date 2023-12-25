const toGoatLatin = function(sentence) {
    const words = sentence.split(' ');
    let a = 'a';
    let result = '';

    for (let i = 0; words.length > i; i++) {
        const firstChar = words[i][0].toLowerCase();

        if (
            firstChar === 'a' ||
            firstChar === 'e' ||
            firstChar === 'i' ||
            firstChar === 'o' ||
            firstChar === 'u'
        ) {
            result += words[i] + "ma";
        } else {
            result += words[i].substr(1, words[i].length) + words[i][0] + "ma";
        }

        result += a;
        a += 'a';

        if (i !== words.length - 1) {
            result += ' ';
        }
    }

    return result;
};