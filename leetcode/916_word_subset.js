/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
  const result = [];
  //merge B into array of single characters
  const arrayOfChars = B.join("").split("");

  //get only distinct chars in B
  const distinctCharsSet = new Set(arrayOfChars);
  const filter = {};

  // for each distinct char
  // get max frequency of char in all words of B
  for (let key of distinctCharsSet) {
    // max frequency of char through all words
    let max = 0;
    for (let word of B) {
      // current count of key in word
      let count = 0;
      for (let char of word) {
        if (char === key) {
          count++;
        }
        if (count > max) {
          max = count;
        }
      }
    }
    filter[key] = max;
  }

  // go through each word of A
  for (let word of A) {
    // create a copy of filter where we'll mark found characters
    // reinstantiate this object everytime we go through the next word
    const currFilter = { ...filter };

    for (let char of word) {
      // how many of these chars we need to find in word to satisfy filter
      // if it is 0 then it is not a required character
      const needThisMany = currFilter[char] || 0;

      // if we need 2 and found 1 - set filter to know we need only 1 more
      if (needThisMany > 1) {
        currFilter[char] = needThisMany - 1;
      } else if (needThisMany === 1) {
        // once we used the last character we can delete the key from the filter, we have used up all it's characters
        delete currFilter[char];
      }
    }

    // we went through the word
    // if filter is empty === we found all chars
    // push current word to result array
    if (Object.keys(currFilter).length === 0) {
      result.push(word);
    }
  }

  return result;
};

// Time: O (A + B) where is A is the number of characters in A array and B is the number in B array
// Space: O (A.length + B.length) since we have a resultant array which can contain all the words in A
