const buyChoco = function(prices, money) {
    let one = Infinity;
    let two = Infinity;

    for (let price of prices) {
        if (one > price) {
            two = one;
            one = price;

            continue;
        }

        if (two > price) {
            two = price;
        }
    }

    if (one + two > money) {
        return money;
    }

    return money - (two + one);
};