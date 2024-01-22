/** https://leetcode.com/problems/climbing-stairs/description/ */

const climbStairs = function(n) {
    if (n === 1) return 1;

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; n >= i; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};