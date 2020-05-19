/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // if length of array is 1, then return element
  // sort the stones in ascending order then pop the highest element (last) and the second highest element (second last) and subtract them
  // recursively call
  return 1 === stones.length
    ? stones[0]
    : lastStoneWeight(
        stones.sort((a, b) => a - b).concat(stones.pop() - stones.pop())
      );
};
