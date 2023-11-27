/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (moves) {
  const MOD = 1e9 + 7;
  const memo = new Map();

  // each number can go to these array of numbers through a horse jump
  const nextValidKeys = {
    0: [4, 6],
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    5: [],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
  };

  let count = 0;

  // count the distinct ways from each number on the num pad 0 - 9
  for (let i = 0; i <= 9; i++) {
    // subtract from the moves available
    count = (count + countDistinctWays(i, moves - 1)) % MOD;
  }

  return count;

  function countDistinctWays(currKey, n) {
    // key represents the current key and the # of move we are on
    const key = `${currKey}#${n}`;

    // base case
    if (n == 0) return 1;
    if (memo.has(key)) return memo.get(key);

    let count = 0;

    // go through valid keys available for the current key
    for (const nextKey of nextValidKeys[currKey]) {
      count = (count + countDistinctWays(nextKey, n - 1)) % MOD;
    }

    // set the key and the count in our memo to keep track of how many times this current key can be visited
    memo.set(key, count);
    return count;
  }
};
