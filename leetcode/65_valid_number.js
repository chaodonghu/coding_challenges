/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let seenDigit = false;
  let seenDot = false;
  let seenExponent = false;

  // loop through our string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if the character is a digit
    if (char >= "0" && char <= "9") {
      seenDigit = true;
    }
    // if the character is a sign
    // it must be either the first character of the string or after an exponent
    else if (char === "+" || char === "-") {
      if (i > 0 && s[i - 1] != "e" && s[i - 1] != "E") {
        return false;
      }
    }
    // character is a sign, then it must be the first character or if it isn't it must be after an exponent
    else if (char === "+" || char === "-") {
      if (i > 0 && s[i - 1] != "e" && s[i - 1] != "E") {
        return false;
      }
    }
    // character is an exponent
    else if (char === 'e' || char === 'E') {
      // if we have already seen an exponent or we haven't seen a digit yet then return false
      if (seenExponent || !seenDigit) {
        return false;
      }

      seenExponent = true;
      seenDigit = false;
    }
    // if character is a dot
    else if (char === '.') {
      // if we have already seen a dot or have already seen an exponent return false
      if (seenDot || seenExponent) {
        return false;
      }

      seenDot = true;
    } else {
      return false;
    }
  }

  return seenDigit;
};

// Time: O(N) since we go through the entire string
// Space: O(1)
