/**
 * @param {number[]} nums
 * @return {number}
 */
 var loot = function(nums) {
   // Instead of creating an array to save all of the previous maxes just take the previous two maxes
   // We only need to take the previous two maxes
   // because at most we would only go two spaces away
   // to check our maximum value
   let prevMax = 0;
   let twoAwayFromMax = 0;
   nums.forEach(house => {
     // destructuring assignment to swap prevMax and twoAwayFromMax values
     [prevMax, twoAwayFromMax] = [
       Math.max(house + twoAwayFromMax, prevMax),
       prevMax
     ];
   });
   return prevMax;
 };

var rob = function (nums) {
  let length = nums.length;

  if (length === 0) {
    return 0;
  }

  if (length <= 3) {
    return Math.max.apply(null, nums);
  }

  return Math.max(loot(nums.slice(0, -1), loot(nums.slice(1))));
    // return loot(nums.slice(0, -1));
};
