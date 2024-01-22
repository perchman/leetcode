/** https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/ */

const kidsWithCandies = function(candies, extraCandies) {
    const result = [];

    let max = Math.max(...candies);

    for (let candy of candies) {
        if (max > candy + extraCandies) {
            result.push(false);
        } else {
            result.push(true);
        }
    }

    return result;
};