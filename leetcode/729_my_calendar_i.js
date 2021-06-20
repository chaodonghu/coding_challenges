var MyCalendar = function () {
  this.root = null;
};

var Node = function (start, end) {
  this.start = start;
  this.end = end;
  this.left = null;
  this.right = null;
};

Node.prototype.insert = function (node) {
  if (node.start >= this.end) {
    if (this.right === null) {
      this.right = node;
      return true;
    }
    return this.right.insert(node);
  } else if (node.end <= this.start) {
    if (this.left === null) {
      this.left = node;
      return true;
    }
    return this.left.insert(node);
  } else {
    return false;
  }
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  var newNode = new Node(start, end);
  if (this.root === null) {
    this.root = newNode;
    return true;
  } else {
    return this.root.insert(newNode);
  }
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */
