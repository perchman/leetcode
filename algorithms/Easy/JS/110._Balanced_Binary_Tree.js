const isBalanced = function(root) {
    let isTreeBalanced = true;

    const valueTraversal = (node) => {
        if (!node) return 0;

        const left = valueTraversal(node.left);
        const right = valueTraversal(node.right);

        if (Math.abs(left - right) > 1) isTreeBalanced = false;

        return 1 + Math.max(left, right);
    };

    valueTraversal(root);

    return isTreeBalanced;
};