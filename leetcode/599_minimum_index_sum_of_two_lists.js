// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
//
// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
//
//
//
// Example 1:
//
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:
//
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Example 3:
//
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 4:
//
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 5:
//
// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let hash = {};
  let result = [];
  let lowest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < list1.length; i++) {
    hash[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    let index = hash[list2[i]];
    // see if element is in list 1
    if (index >= 0) {
      // if the current index plus the index in list 1 is less than lowest
      if (index + i < lowest) {
        // replace our result array
        result = [list2[i]];
        // update lowest index
        lowest = index + i;
      } else if (index + i === lowest) {
        // if they equal then push into the result array
        result.push(list2[i]);
      }
    }
  }

  return result;
};
