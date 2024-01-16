// Design a data structure that supports all following operations in average O(1) time.
//
// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
// Example:
//
// // Init an empty set.
// RandomizedSet randomSet = new RandomizedSet();
//
// // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomSet.insert(1);
//
// // Returns false as 2 does not exist in the set.
// randomSet.remove(2);
//
// // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomSet.insert(2);
//
// // getRandom should return either 1 or 2 randomly.
// randomSet.getRandom();
//
// // Removes 1 from the set, returns true. Set now contains [2].a
var RandomizedSet = function() {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) return false;

    this.set.add(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.set.delete(val)   
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.set.size);
    let arr = [...this.set];
    return arr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// randomSet.remove(1);
//
// // 2 was already in the set, so return false.
// randomSet.insert(2);
//
// // Since 2 is the only number in the set, getRandom always return 2.
// randomSet.getRandom();

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.array = [];
    this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const { array, map } = this;

    if (map.has(val)) {
        return false;
    }

    array.push(val);
    // set the value and position of the value in the array
    map.set(val, array.length - 1);

    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const { array, map } = this;

    if (!map.has(val)) {
        return false;
    }

    const [last, index] = [array[array.length - 1], map.get(val)];
    array[index] = last;
    map.set(last, index);

    array.pop();
    map.delete(val);

    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const {array} = this;

    const r = Math.floor(array.length * Math.random());
    return array[r];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
