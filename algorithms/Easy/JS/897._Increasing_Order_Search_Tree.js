const increasingBST = function(root) {
    let dummy = new TreeNode(),
        current = dummy;

    const morrisTraversal = (node) => {
        if (!node) return;

        morrisTraversal(node.left);

        node.left = null;
        current.right = node;
        current = node;

        morrisTraversal(node.right);
    };

    morrisTraversal(root);

    return dummy.right;
};