// Swap Nth Node with Head
// Given the head of a singly linked list and 'N', swap the head with the Nth node. Return the head of the new linked list.

//  Example: 7 -> 14 -> 21 -> 28 -> 35 -> 42 -> NULL, N = 4
// Solution : 28 -> 14 -> 21 -> 7 -> 35 -> 42 -> NULL
let swapNthNode = function (head, n) {
  let prev = null;
  let current = head;

  // start at index 1, since our linked list is 1 indexed
  for (let i = 1; i < n; i++) {
    // have a previous pointer pointing to the current
    prev = current;
    // increase our current to the next
    current = current.next;
  }

  // our prev next will point to the head
  // 7 -> 14 -> 21
  prev.next = head;
  // instantiate our temp which the head.next
  // 14
  let temp = head.next;

  // 7 -> 35 -> 42
  head.next = current.next;
  // 28 -> 14 -> 21 -> 7 -> 35  -> 42
  current.next = temp;

  return current;
};
