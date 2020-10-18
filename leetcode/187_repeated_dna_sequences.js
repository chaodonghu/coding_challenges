// All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
//
// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
//
//
//
// Example 1:
//
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:
//
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
//
//
// Constraints:
//
// 0 <= s.length <= 105
// s[i] is 'A', 'C', 'G', or 'T'.

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // instantiate seen hash
  let seen = {};
  // output array
  let output = [];
  let i = 0;

  // 10 characters long
  while (i + 10 <= s.length) {
    const dnaSequence = s.slice(i, i + 10);

    seen[dnaSequence] = seen[dnaSequence] += 1;

    if (seen[dnaSequence] === 2) {
      output.push(dnaSequence);
    }

    i++;
  }

  return output;
};
