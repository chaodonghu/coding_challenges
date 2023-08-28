/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const dp = new Map();
  stones.forEach((stone) => dp.set(stone, new Set()));
  dp.get(0).add(0);

  for (const stone of stones) {
    for (const jump of dp.get(stone)) {
      for (const jumpDistance of [jump - 1, jump, jump + 1]) {
        if (jumpDistance > 0 && dp.has(stone + jumpDistance)) {
          // each key will represent a stone and the set will represent the jump distance needed to get to it
          dp.get(stone + jumpDistance).add(jumpDistance);
        }
      }
    }
  }

  console.log("dp", dp);

  // get the last stone and see if it's set is has any valid jumps
  return dp.get(stones[stones.length - 1]).size > 0;
};
