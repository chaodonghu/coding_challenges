/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (!digits == null || digits.length === 0) return [];

  // create a map of the combinations
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  const makeCombination = (i, s) => {
    // if our pointer equals the digit lenght, push the string and exit
    if (i === digits.length) {
      res.push(s);
      return;
    }

    // for every mapping of the digit, iterate through it (at least 3 letters)
    for (const c of map[digits[i]]) {
      makeCombination(i + 1, s + c);
    }
  };

  // start at index 0 and empty string
  makeCombination(0, "");
  return res;
};
