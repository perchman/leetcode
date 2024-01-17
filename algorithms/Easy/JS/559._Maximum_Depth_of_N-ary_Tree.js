const maxDepth = function(root) {
    if (!root) return 0;

    let ans = 0;

    for (const child of root.children) {
        ans = Math.max(ans, maxDepth(child));
    }

    return ans + 1;
};