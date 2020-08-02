// Design a HashSet without using any built-in hash table libraries.
//
// To be specific, your design should include these functions:
//
// add(value): Insert a value into the HashSet.
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.
//
// Example:
//
// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);
// hashSet.add(2);
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);
// hashSet.contains(2);    // returns true
// hashSet.remove(2);
// hashSet.contains(2);    // returns false (already removed)
//
// Note:
//
// All values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Please do not use the built-in HashSet library.

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  // if the index of the value being added isn't in the set then push into the hashset
  if (this.set.indexOf(key) === -1) {
    this.set.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  // get the index of the target value
  const index = this.set.indexOf(key);
  if (index >= 0) {
    delete this.set[index];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.indexOf(key) >= 0;
}
