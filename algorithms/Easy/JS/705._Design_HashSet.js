const MyHashSet = function() {
    this.p = 997;
    this.table = new Array(this.p).fill(null).map(() => []);
};

MyHashSet.prototype.hash = function(key) {
    return key % this.p;
}

MyHashSet.prototype.add = function(key) {
    const value = this.hash(key);
    if (!this.table[value].includes(key)) {
        this.table[value].push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    const value = this.hash(key);
    const index = this.table[value].indexOf(key);
    if (index !== -1) {
        this.table[value].splice(index, 1);
    }
};

MyHashSet.prototype.contains = function(key) {
    return this.table[this.hash(key)].includes(key);
};