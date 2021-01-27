// Create a doubly linked list

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add to the end of the list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    }
    // if linkedlist has >= one node
    else {
      // set the old tail to the current tail
      let oldTail = this.tail;
      // new tail is the new node
      this.tail = new Node(value);
      // set to next tail to the new tail
      oldTail.next = this.tail;
      // point the new tail back to the previous tail
      this.tail.prev = oldTail;
    }
  }

  //add to beginning of list / head
  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    }
    // if linkedlist has >= one node
    else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    // if list is empty (no head)
    if (!this.head) {
      return null;
    }
    // if linkedlist has >= 1 node
    else {
      let removedHead = this.head.value;
      // if list has only 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      }
      //if list has >1 node
      else {
        // current head is the next head
        this.head = this.head.next;
        // remove the pointer on the current head
        this.head.prev = null;
      }
      return removedHead;
    }
  }

  deleteTail() {
    // if list is empty (no tail)
    if (!this.tail) {
      return null;
    }
    // if linkedlist has >= one node
    else {
      let removedTail = this.tail.value;
      // if list has only 1 node left
      if (this.head === this.tail) {
        this.tail = this.head = null;
      }
      //if list has >1 node
      else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail;
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    // if we reach the end of the linked list (currentNode = null)
    return null;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

list.search(1);
list.search(3);
list.search(999);

list.deleteHead(); // -1
list.deleteTail(); // 3
list.deleteTail(); // 2
list.deleteHead(); // 0

list.deleteHead(); // 1

list.deleteTail(); // null
