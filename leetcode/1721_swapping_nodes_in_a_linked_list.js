/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let array = [];
  let temp = head;

  // build our array
  while (temp) {
    array.push(temp);
    temp = temp.next;
  }

  // swap the kth from beginning and end of list, because our nodes will be a reference in the linked list
  [array[k - 1].val, array[array.length - k].val] = [
    array[array.length - k].val,
    array[k - 1].val,
  ];

  return head;
};

// Time: O(N) since we do a single pass through the linked list of N nodes
// Space: O(N) we store all the nodes in an array

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let node = head;
  let first = head;
  let second = head;

  // put both our node and second pointers on the kth node from the beginning
  for (let i = 1; i < k; i++) {
    node = node.next;
    second = second.next;
  }

  // currently the second pointer and the first pointer are kth nodes apart therefore we can find the kth node
  // from the end of the linkedlist by increasing second until we get to null
  while (second.next) {
    second = second.next;
    first = first.next;
  }

  // our first is now at the kth node from the end
  // our node is now at the kth node from beginning
  let temp = first.val;
  first.val = node.val;
  node.val = temp;
  return head;
};

// Time: O(N)
// Space: O(1)
