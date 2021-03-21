// Given a non-empty array of integers, return the k most frequent elements.
//
// Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
// Note:
//
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // step 1:
  // map will store the frequencies of each element
  const map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  // we will then have a bucket, with each bucket and it's associated index representing its frequency, our bucket length will be as much as the nums length (say if all of our nums were one number)
  let bucket = new Array(nums.length + 1).fill().map(() => []);
  //     // go through all of the nums in the map and add them into their corresponding index in the bucket
  for (let num in map) {
    bucket[map[num]].push(parseInt(num));
  }

  let results = [];
  // starting from the length of our nums, we iterate our bucket, with the last bucket in our bucket array being possible if all of our nums are the same
  for (let i = nums.length; i >= 0 && k > 0; k--) {
    // if the bucket is empty, then go into the next bucket, this will occur when we haven't found the k most frequent element yet
    while (!bucket[i].length) i--;
    // empty out each bucket before decreasing our k
    results.push(bucket[i].shift());
  }

  return results;
};

// Time: O(N log K)
// Space: O(N + k) to store the hash map with not more than N elements and a heap with K elements
