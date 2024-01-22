/** https://leetcode.com/problems/binary-tree-preorder-traversal/description/ */

const preorderTraversal = function(root) {
    const ans = [];

    const valTraversal = (node) => {
        if (!node) return;

        ans.push(node.val);

        valTraversal(node.left);
        valTraversal(node.right);
    }

    valTraversal(root);

    return ans;
};