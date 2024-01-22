/** https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/description/ */

const largestInteger = function(num) {
    num = num.toString();

    const a = [],
          b = [];

    for (let i of num) {
        i % 2 == 0 ? a.push(i) : b.push(i);
    }

    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    let ans = '';

    for (let i of num) {
        ans += i % 2 == 0 ? a.pop() : b.pop();
    }

    return parseInt(ans);
};