const minWindow = function (s, t) {
  // initialize variables
  let charCount = t.length;
  let minLength = Number.MAX_SAFE_INTEGER;
  let minStartIndex = 0;
  const charMap = {};

  // create a map of the characters of T
  for (let char of t) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // this sets conditional for 1st pointer
  for (let l = 0, r = 0; r < s.length; ) {
    // first pointer
    // charMap[s[r]] is the number of characters left for character at 1st pointer
    if (charMap[s[r]] > 0) charCount--;
    charMap[s[r]]--;
    r++;

    // this sets conditional for 2nd pointer
    while (charCount === 0) {
      // check if current window is less than the minimum length
      if (r - l < minLength) {
        minLength = r - l;
        console.log('current window', minLength);
        minStartIndex = l;
        console.log('minStartIndex', minStartIndex);
      }

      // second pointer
      charMap[s[l]]++;
      if (charMap[s[l]] > 0) charCount++;
      l++;
    }
  }

  // return empty string if no valid candidate
  // otherwise return smallest substring
  return minLength === Number.MAX_SAFE_INTEGER
    ? ""
    : s.substr(minStartIndex, minLength);
};
