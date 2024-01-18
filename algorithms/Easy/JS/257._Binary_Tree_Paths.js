const binaryTreePaths = function(root) {
    const ans = [];

    const valTraversal = (node, path) => {
        if (!node) return;

        path += node.val;

        if (!node.left && !node.right) {
            ans.push(path);
        } else {
            path += '->';
            valTraversal(node.left, path);
            valTraversal(node.right, path);
        }
    }

    valTraversal(root, '');

    return ans;
};