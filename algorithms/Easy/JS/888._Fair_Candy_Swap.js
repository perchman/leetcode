const fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0;
    let sumBob = 0;

    const set = new Set();

    for (let box of aliceSizes) {
        sumAlice += box;
        set.add(box);
    }

    for (let box of bobSizes) {
        sumBob += box;
    }

    const diff = (sumAlice - sumBob) / 2;

    for (let box of bobSizes) {
        if (set.has(box + diff)) {
            return [box + diff, box];
        }
    }
};