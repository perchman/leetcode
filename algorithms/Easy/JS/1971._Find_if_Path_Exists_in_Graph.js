const validPath = function(n, edges, source, destination) {
    const map = new Map();

    for (const [u, v] of edges) {
        if (!map.has(u)) map.set(u, []);
        if (!map.has(v)) map.set(v, []);

        map.get(u).push(v);
        map.get(v).push(u);
    }

    const set = new Set();

    const dfs = (node) => {
        if (node === destination) return true;

        set.add(node);

        if (map.has(node)) {
            for (const neighbor of map.get(node)) {
                if (!set.has(neighbor) && dfs(neighbor)) {
                    return true;
                }
            }
        }

        return false;
    };

    return dfs(source);
};