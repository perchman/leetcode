const maxNumberOfBalloons = function(text) {
    const map = new Map();

    for (let char of text) {
        map.set(char, (map.get(char) || 0) + 1);
    };

    let count = 0;

    while (
        map.get('b') >= 1 &&
        map.get('a') >= 1 &&
        map.get('l') >= 2 &&
        map.get('o') >= 2 &&
        map.get('n') >= 1
    ) {
        map.set('b', map.get('b') - 1);
        map.set('a', map.get('a') - 1);
        map.set('l', map.get('l') - 2);
        map.set('o', map.get('o') - 2);
        map.set('n', map.get('n') - 1);

        count++;
    }

    return count;
};