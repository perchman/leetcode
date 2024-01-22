/** https://leetcode.com/problems/binary-tree-postorder-traversal/description/ */

const postorderTraversal = function(root) {
    const ans = [];

    const valTraversal = (node) => {
        if (!node) return;

        valTraversal(node.left);
        valTraversal(node.right);

        ans.push(node.val);
    };

    valTraversal(root);

    return ans;
};