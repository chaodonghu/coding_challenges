/**
 * @param {number[][]} vec
 */
var Vector2D = function (vec) {
  // recursively call flatten array
  var flattenArray = function (vec, list) {
    // loop through every element in the nested vector
    for (let el of vec) {
      // if the element is an array, then we recursively call flatten array on this array
      if (Array.isArray(el)) {
        flattenArray(el, list);
      } else {
        // it not a array therefore push this element into our list
        list.push(el);
      }
    }
  };
  this.list = [];
  this.index = -1;
  flattenArray(vec, this.list);
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
  // increase the index
  this.index++;
  return this.list[this.index];
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  return this.index < this.list.length - 1;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
