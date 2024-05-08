/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  const ranking = [...score]
    .sort((a, b) => b - a) // sort the scores in descending order
    .reduce((acc, curr, index) => {
      // make a object of the scores
      // acc is the current object ({})
      // if the index of the current value is less than 3 then it is a podium ranking, if not then record it's index
      acc[curr] = index < 3 ? `${medals[index]}` : `${index + 1}`;
      return acc;
    }, {});

  // the keys in the ranking will represent the score and the value their position

  return score.map((scores) => ranking[scores]);
};

// Time: O(N log N)
// Space: O(N)
