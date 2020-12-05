/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = n;

  for (let i = 0; i < flowerbed.length; i++) {
    // if the current element is 0 AND
    // we are at the first element OR the previous element is 0 AND
    // we are at the last element OR next element is 0

    // then
    // decrement counter and place a flower at the current index
    if (
      flowerbed[i] == 0 &&
      (i == 0 || flowerbed[i - 1] == 0) &&
      (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
    ) {
      flowerbed[i] = 1;
      count--;
    }
  }

  return count <= 0;
};
