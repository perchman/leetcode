const alphabet = [
    ['a', 0],
    ['b', 1],
    ['c', 2],
    ['d', 3],
    ['e', 4],
    ['f', 5],
    ['g', 6],
    ['h', 7],
    ['i', 8],
    ['j', 9],
    ['k', 10],
    ['l', 11],
    ['m', 12],
    ['n', 13],
    ['o', 14],
    ['p', 15],
    ['q', 16],
    ['r', 17],
    ['s', 18],
    ['t', 19],
    ['u', 20],
    ['v', 21],
    ['w', 22],
    ['x', 23],
    ['y', 24],
    ['z', 25]
];

const isSumEqual = function(firstWord, secondWord, targetWord) {
    const alphabetMap = new Map(alphabet);

    let firstSum = '',
        secondSum = '',
        targetSum = '';

    const maxLength = Math.max(firstWord.length, secondWord.length, targetWord.length);

    for (let i = 0; maxLength > i; i++) {
        if (firstWord[i]) {
            firstSum += alphabetMap.get(firstWord[i]);
        }
        if (secondWord[i]) {
            secondSum += alphabetMap.get(secondWord[i]);
        }
        if (targetWord[i]) {
            targetSum += alphabetMap.get(targetWord[i]);
        }
    }

    return parseInt(firstSum) + parseInt(secondSum) === parseInt(targetSum);
};