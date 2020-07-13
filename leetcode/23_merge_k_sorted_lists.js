// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
//
// Example:
//
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwo = function(a, b) {
    let i = a;
    let j = b;
    let res = new ListNode('temp');

    let current = res;

    while (a && b) {
        if (a.val > b.val) {
            current.next = b;
            b = b.next;
        } else {
            current.next = a;
            a = a.next;
        }
        current = current.next;
    }

    current.next = a || b;

    return res.next;
}

var mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }

    // until we finally have one linked list
    while (lists.length > 1) {
        // remove the first linkedlist in the queue
        let a = lists.shift();
        // remove the next linkedlist in the queue
        let b = lists.shift();

        // merge the two linkedlists together based on sorted
        const h = mergeTwo(a, b);

        // push the merged link list back into a queue
        lists.push(h);
    }

    // return the one and only linkedlist in the queue
    return lists[0];
};
