const searchBST = function(root, val) {
    let node = root;

    while (node) {
        if (node.val === val) return node;

        node = node.val > val ? node.left : node.right;
    }

    return null;
};