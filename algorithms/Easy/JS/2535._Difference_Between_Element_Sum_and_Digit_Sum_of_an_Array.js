const differenceOfSum = function(nums) {
    let elemSum = 0,
        digitSum = 0;

    for (let num of nums) {
        elemSum += num;

        if (num.toString().length === 1) {
            digitSum += num;
        } else {
            for (let char of num.toString()) {
                digitSum += parseInt(char);
            }
        }
    }

    return elemSum - digitSum;
};