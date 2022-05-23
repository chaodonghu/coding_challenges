// Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().
//
// Example:
//
// Assume that the iterator is initialized to the beginning of the list: [1,2,3].
//
// Call next() gets you 1, the first element in the list.
// Now you call peek() and it returns 2, the next element. Calling next() after that still return 2.
// You call next() the final time and it returns 3, the last element.
// Calling hasNext() after that should return false.
// Follow up: How would you extend your design to be generic and work with all types, not just integer?

// Our new class will do the same things that the original class does, except that it will store the next value separately, so that we can peek at it without it being removed.
// The only challenging thing at this point is to make sure that the next function checks to make sure if there actually is a next element before updating the stored value.

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.nextVal;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  let nextVal = this.nextVal;
  this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
  return nextVal;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return !!this.nextVal;
};

var PeekingIterator = function (iterator) {
  this.list = iterator;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.top) {
    return this.top;
  }

  // if our list has a next then reassign the top value and return it
  if (this.list.hasNext()) {
    this.top = this.list.next();
    return this.top;
  }
  return false;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.top) {
    let value = this.top;
    this.top = null;
    return value;
  }

  return this.list.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  if (this.top) {
    return true;
  }
  return this.list.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
