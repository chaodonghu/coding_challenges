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

// returns the last element
var last = (arr) => {
  return arr[arr.length - 1];
};

var NestedIterator = function (nestedList) {
  // our stack starts off with the nestedList and it's level
  this.stack = [[nestedList, 0]];
  this.makeStackTopAnInteger = function () {
    while (this.stack.length) {
      // get the last element off of our stack
      const [currentList, currentIndex] = last(this.stack);
      // if the length of the current list equals the current index then pop off the stack, we have processed it
      if (currentList.length === currentIndex) {
        this.stack.pop();
        continue;
      }

      let el = currentList[currentIndex];

      //if the element is an integer then break out of this while loop
      if (el.isInteger()) {
        break;
      }

      // the element is not an integer therefore is a list
      const newList = el.getList();
      // update our last element's level
      last(this.stack)[1] += 1;
      // push this new list onto our stack
      this.stack.push([newList, 0]);
    }
  };
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  this.makeStackTopAnInteger();
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  this.makeStackTopAnInteger();
  const [currentList, currentIndex] = last(this.stack);
  last(this.stack)[1] += 1;
  console.log('currentList', currentList[currentIndex].getInteger());
  return currentList[currentIndex].getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
