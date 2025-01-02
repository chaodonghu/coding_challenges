/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowels = ["a", "e", "i", "o", "u"];

  const ans = [];

  const validVowels = [];

  for (word of words) {
    const start = word[0];
    const end = word[word.length - 1];

    if (vowels.includes(start) && vowels.includes(end)) {
      validVowels.push(true);
    } else {
      validVowels.push(false);
    }
  }

  console.log("validVowels", validVowels);

  for ([startIndex, endIndex] of queries) {
    ans.push(
      validVowels.slice(startIndex, endIndex + 1).filter((e) => e === true)
        .length
    );
  }

  return ans;
};
