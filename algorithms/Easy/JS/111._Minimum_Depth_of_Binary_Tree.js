const minDepth = function(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    let left = root.left ? minDepth(root.left) : Infinity;
    let right = root.right ? minDepth(root.right) : Infinity;

    return 1 + Math.min(left, right);
};