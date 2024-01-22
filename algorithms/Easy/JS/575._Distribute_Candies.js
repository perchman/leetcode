/** https://leetcode.com/problems/distribute-candies/description/ */

const distributeCandies = function(candyType) {
    const uniqueCandies = new Set();

    for (const candy of candyType) {
        uniqueCandies.add(candy);

        if (uniqueCandies.size === candyType.length / 2) {
            break;
        }
    }

    return uniqueCandies.size;
};