// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.
//
//
//
//
//
// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//
//
//
// Example:
//
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // instantiate max_area and temp_area variables
  let max_area = 0;
  let temp_area = 0;
  // instantiate two pointers
  let head = 0;
  let tail = height.length - 1;

  // loop through heights
  for (h of height) {
    // get the base of the area or the width of the area by subtracting the tail and the head
    let width = tail - head;

    // if the head's height is less than the tails height then the temp_area is height x width
    if (height[head] < height[tail]) {
      temp_area = height[head] * width;
      // increase the head's pointer
      head++;
    } else {
      // if the tail is greater than the head then the temp_area is height x width
      temp_area = height[tail] * width;
      // decrease the tails pointer
      tail--;
    }
    // after every height, find the max_area from getting the max of the temp_area and max_area
    max_area = Math.max(temp_area, max_area);
  }
  return max_area;
};
