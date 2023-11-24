function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  let coins = 0;
  while (piles.length) {
    // pop off max pile
    piles.pop();
    // add the second max pile available
    coins += piles.pop();
    // pop off the lowest pile
    piles.shift();
  }

  return coins;
}

// Time: O(N log N)
// Space: O(1)
