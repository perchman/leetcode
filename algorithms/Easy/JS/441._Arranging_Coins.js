const arrangeCoins = function(n) {
    let ans = 0;

    while (n > ans) {
        ans++;
        n -= ans;
    }

    return ans;
};