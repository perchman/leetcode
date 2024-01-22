/** https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/ */

const maximumNumberOfStringPairs = function(words) {
    const reversedMap = new Map();
    let count = 0;

    for (const word of words) {
        const reversedWord = word[1] + word[0];

        if (reversedMap.has(reversedWord) && !reversedMap.get(reversedWord)) {
            count++;
            reversedMap.set(reversedWord, true);
        } else {
            reversedMap.set(word, false);
        }
    }

    return count;
};