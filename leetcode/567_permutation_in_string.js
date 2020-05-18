/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // instantiate lengths of strings
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 > len2) return false;

  let count = Array(26).fill(0);

  let aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - aCharCode]++;
    count[s2.charCodeAt(i) - aCharCode]--;
  }

  if (allZero(count)) return true;

  for (let j = len1; j < len2; j++) {
    count[s2.charCodeAt(j) - aCharCode]--;
    count[s2.charCodeAt(j - len1) - aCharCode]++;
    if (allZero(count)) return true;
  }

  return false;

  // go through entire count array and check if they are all zeros
  function allZero(count) {
    for (let i of count) {
      if (i !== 0) return false;
    }
    return true;
  };
};
