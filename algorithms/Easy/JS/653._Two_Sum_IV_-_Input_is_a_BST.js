const findTarget = function(root, k) {
    const values = new Set();

    function dfs(node) {
        if (!node) return false;

        if (values.has(k - node.val)) {
            return true;
        }

        values.add(node.val);

        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};