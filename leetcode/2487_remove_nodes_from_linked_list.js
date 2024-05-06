var removeNodes = function (head) {
  const stack = [];

  while (head) {
    // if we have in our stack and the current head is greater than the value, pop that node off the stack since we only want values that are greater than the head
    while (stack.length && head.val > stack[stack.length - 1]) {
      stack.pop();
    }
    // push into our stack
    stack.push(head.val);
    // continue along the linked list
    // head will eventually be null
    head = head.next;
  }

  // go through our remaining values in the stack and create our linked list
  while (stack.length) {
    // this reverses the linkedlist
    // our first iteration will be `stack.pop()` -> null
    head = new ListNode(stack.pop(), head);
  }

  
  return head;
};

// Time: O(N)
// Space: O(N) to store the values in the stack
