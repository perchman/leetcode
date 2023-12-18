const maxProduct = function(nums) {
    let i = -1;
    let j = -1;

    for (let num of nums) {
        if (num >= i) {
            j = i;
            i = num;
        } else if (num > j) {
            j = num;
        }
    }

    return (i - 1) * (j - 1);
};