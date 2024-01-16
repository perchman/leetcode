const kWeakestRows = function(mat, k) {
    const counts = [];

    const countSoldiers = (row) => {
        let left = 0;
        let right = mat[0].length - 1;

        while (right >= left) {
            const mid = Math.floor((left + right) / 2);

            if (mat[row][mid] === 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    };

    for (let i = 0; mat.length > i; i++) {
        counts.push({ index: i, count: countSoldiers(i) });
    }

    counts.sort((a, b) => a.count - b.count);

    return counts.slice(0, k).map(({ index }) => index);
};