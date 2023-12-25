const minOperations = function(logs) {
    let count = 0;

    for (let log of logs) {
        if (
            log[0] >= 'a' && log[0] <= 'z' ||
            log[0] >= 0 && log[0] <= 9
        ) {
            count++;
        } else if (log[0] + log[1] === '..' && count !== 0) {
            count--;
        }
    }

    return count;
};