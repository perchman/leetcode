const maxDepth = function(root) {
    if (!root) return 0;

    const left = maxDepth(root.left),
        right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};