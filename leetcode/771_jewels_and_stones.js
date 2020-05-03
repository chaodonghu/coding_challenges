/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// Utilizing array
var numJewelsInStones = function(J, S) {
  let jewelsCount = 0;

  S.split('').forEach((e) => {
    if (J.split('').includes(e)) {
      jewelsCount++;
    }
  });

  return jewelsCount;
};

// Utilizing hash map
var numJewelsInStones = function(J, S) {
  let jewelsCount = 0;

  // O(J)
  const jewelsHash = {}; // {a: true, A: true}
  for (const jewel of J) {
    jewelsHash[jewel] = true;
  }

  // O(S)
  for (const stone of S) {
    if (jewelsHash[stone]) {
      jewelsCount++;
    }
  }

  return jewelsCount;
}

// Time Complexity: O(J + S)
// Space Complexity: O(J)
