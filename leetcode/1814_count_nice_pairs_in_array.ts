function countNicePairs(nums: number[]): number {
  let revNums: number[] = [];

  // logic is nums[i] + rev(nums[j]) = rev(nums[i]) + nums[j]
  // x + rev(y) = rev(x) + y
  // x - rev(x) = y - rev(y)
  // therefore go through the array of nums and find the either the left or right side of the equation, if there are two numbers that appear then add them to the frequency map and update our count of nice pairs
  for (let num of nums) {
    let reversedNum = Number(String(num).split("").reverse().join(""));

    revNums.push(num - reversedNum);
  }

  let map = {};
  let count = 0;

  for (let num of revNums) {
    count += map[num] || 0;
    map[num] = (map[num] || 0) + 1;
  }

  return count % (1e9 + 7);
}
