const isUnivalTree = function(root) {
    if (!root) return true;

    const left =
        !root.left ||
        (root.val === root.left.val && isUnivalTree(root.left));

    const right =
        !root.right ||
        (root.val === root.right.val && isUnivalTree(root.right));

    return left && right;
};