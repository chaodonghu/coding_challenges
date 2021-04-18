// Find n'th Node from the End of a Linked List
// Given a singly linked list, return the nth from last node. Return null if 'n' is out-of-bounds.
//
// Description #
// Given a singly linked list, return the nth node from last. Return null if ‘n’ is out-of-bounds.
//
// Hints #
// Move two pointers which are n nodes apart.


let findNthFromLast = function (head, n) {
  let index = n;
  let tail = head;

  while (tail && index > 0) {
    tail = tail.next;
    index--;
  }

  while (tail) {
    tail = tail.next;
    head = head.next;
  }

  return head.data;
};

// Time: O(N)
// Space: O(1)

// The idea is to have two pointers n nodes apart, one pointing to the head and the other pointing the nth node
// We then move the pointers forward until the second pointer reaches the tail
// the first pointer will be pointing to the nth node from the last
