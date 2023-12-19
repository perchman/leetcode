const minTimeToType = function(word) {
    const charCodeA = 'a'.charCodeAt(0);
    let seconds = 0;
    let currentPosition = charCodeA;

    for (let i = 0; word.length > i ; i++) {
        const targetCharCode = word.charCodeAt(i);
        const clockwiseSteps = (targetCharCode - currentPosition + 26) % 26;
        const counterclockwiseSteps = (currentPosition - targetCharCode + 26) % 26;

        seconds += Math.min(clockwiseSteps, counterclockwiseSteps) + 1;

        currentPosition = targetCharCode;
    }

    return seconds;
};