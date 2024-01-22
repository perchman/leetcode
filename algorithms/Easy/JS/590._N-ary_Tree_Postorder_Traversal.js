/** https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/ */

const postorder = function(root) {
    const result = [];

    const traverse = (node) => {
        if (!node) return;

        for (const child of node.children) {
            traverse(child);
        }

        result.push(node.val);
    };

    traverse(root);

    return result;
};