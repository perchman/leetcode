const leafSimilar = function(root1, root2) {
    const learnLeaves = (node, leaves) => {
        if (!node) return;

        if (!node.left && !node.right) {
            leaves.push(node.val);
        }

        learnLeaves(node.left, leaves);
        learnLeaves(node.right, leaves);
    }

    const leaves1 = [],
        leaves2 = [];

    learnLeaves(root1, leaves1);
    learnLeaves(root2, leaves2);

    return JSON.stringify(leaves1) === JSON.stringify(leaves2);
};