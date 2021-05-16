// In a row of trees, the i-th tree produces fruit with type tree[i].
//
// You start at any tree of your choice, then repeatedly perform the following steps:
//
// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.
//
// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.
//
// What is the total amount of fruit you can collect with this procedure?
//
//
//
// Example 1:
//
// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:
//
// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
// Example 3:
//
// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].
// Example 4:
//
// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let isSeens = {};
  let isSeenCount = 0;
  let maxCount = 0;
  let left = 0;
  let right = 0;


  while (right < tree.length) {
    let treeType = tree[right];

    // if we have already seen the type of tree
    if (isSeens[treeType]) {
      isSeens[treeType]++;
    } else {
      // add our tree type to the seen map
      isSeens[treeType] = 1;
      // increase seen count
      isSeenCount++;

      // while we have 3 types of trees
      while (isSeenCount > 2) {
        let leftTreeType = tree[left];
        // get rid of the type of tree type of our left most pointer
        isSeens[leftTreeType]--;
        // increase our left pointer
        left++;
        // if our left pointer's tree type is now 0, then delete is from our map and decrease the seen count
        if (isSeens[leftTreeType] === 0) {
          delete isSeens[leftTreeType];
          isSeenCount--;
        }
      }
    }

    // update our max count to be the max of our current max count or the window that we have created with the two pointers
    maxCount = Math.max(maxCount, right - left + 1);
    // increase our right pointer and iterate through the trees
    right++;
  }
  return maxCount;
};

// Time: O(N) since we iterate through all the trees in the array
// Space: O(N) since we have a map of all the tree types
