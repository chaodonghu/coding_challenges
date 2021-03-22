/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  // recursively call flatten array
  var flattenArray = function (nestedList, list) {
    // loop through every element in the nested list
    for (let el of nestedList) {
      // if the element is an integer, then push this into our list
      if (el.isInteger()) {
        list.push(el.getInteger());
      } else {
        // element is not an integer, therefore is alist, so call flatten array again on this list
        flattenArray(el.getList(), list);
      }
    }
  };
  this.list = [];
  this.index = -1;
  flattenArray(nestedList, this.list);
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  // if the index we are on is not less than the list's length then there is no next
  return this.index < this.list.length - 1;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  // increase the index
  this.index++;
  // return the current element at the current index, as we'll push that into our array
  return this.list[this.index];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

 // Time:
 // Constructor: O (N + L) # of lists plus the number of integers
 // next(): O(1) since getting the next element requires incrementing the position by 1 and acesssing the element at a particular index of the integers list
 // hasNext(): O(1) checking whether or not there is a next element requires comparing the length of the integers list to the position variable
 // Space:
 // O(N + D)
