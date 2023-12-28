const heightChecker = function(heights) {
    const copy = [...heights];
    copy.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; heights.length > i; i++) {
        if (heights[i] !== copy[i]) count++;
    }

    return count;
};