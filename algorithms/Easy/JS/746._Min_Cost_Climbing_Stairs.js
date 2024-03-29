/** https://leetcode.com/problems/min-cost-climbing-stairs/description/ */

const minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length + 1).fill(0);

    for (let i = 2; cost.length >= i; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[cost.length];
};