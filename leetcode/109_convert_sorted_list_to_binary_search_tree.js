/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // first we convert the linkedlist to a sorted array
  let array = convertToArray(head);

  // then we convert the array to a bst
  return convertArrayToBST(array);
};

var convertToArray = function (head) {
  let output = [];
  let temp = head;

  while (temp) {
    output.push(temp.val);
    temp = temp.next;
  }

  return output;
};

var convertArrayToBST = function (arr) {
  if (!arr.length) return null;

  let mid = Math.floor(arr.length / 2);
  let root = new TreeNode(arr[mid]);

  root.left = convertArrayToBST(arr.slice(0, mid));
  root.right = convertArrayToBST(arr.slice(mid + 1));

  return root;
};

// Time: O(N + log N) = O(N) since we loop through all the elements in the linked list to create an array, then do a binary search operation to build the tree
// Space: O(N) since we create an array the size of the elements
