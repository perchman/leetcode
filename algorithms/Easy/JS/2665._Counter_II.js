/** https://leetcode.com/problems/counter-ii/description/ */

const createCounter = function(init) {
    if (!(this instanceof createCounter)) {
        return new createCounter(init);
    }

    this.value = init;
    this.init = init;
};

createCounter.prototype.increment = function() {
    this.value++;
    return this.value;
}

createCounter.prototype.decrement = function() {
    this.value--;
    return this.value;
}

createCounter.prototype.reset = function() {
    this.value = this.init;
    return this.value;
}