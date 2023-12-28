const findGCD = function(nums) {
    let min = Math.min(...nums),
        max = Math.max(...nums);

    while (max !== 0) {
        const temp = max;
        max = min % max;
        min = temp;
    }

    return min;
};