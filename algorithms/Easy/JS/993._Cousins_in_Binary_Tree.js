const isCousins = function(root, x, y) {
    let xInfo = { depth: -1, parent: null };
    let yInfo = { depth: -1, parent: null };

    const valueTraversal = (node, parent, depth, target) => {
        if (!node) return;

        if (node.val === target) {
            target === x ? xInfo = { depth, parent } : yInfo = { depth, parent };
            return;
        }

        valueTraversal(node.left, node, depth + 1, target);
        valueTraversal(node.right, node, depth + 1, target);
    }

    valueTraversal(root, null, 0, x);
    valueTraversal(root, null, 0, y);

    return xInfo.depth === yInfo.depth && xInfo.parent !== yInfo.parent;
};