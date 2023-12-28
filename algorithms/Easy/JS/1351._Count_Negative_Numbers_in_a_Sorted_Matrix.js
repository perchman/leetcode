const countNegatives = function(grid) {
    let count = 0;

    for (let i = 0; grid.length > i; i++) {
        for (let j = grid[i].length - 1; j >= 0; j--) {
            if (grid[i][j] >= 0) break;

            count++;
        }
    }

    return count;
};