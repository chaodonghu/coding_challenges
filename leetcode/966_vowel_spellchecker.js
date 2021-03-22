/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  // create a new set with all the as is words
  const asIs = new Set(wordlist);
  // create a map of all the words in word list lowercased along with it's original value
  const lowercased = createLowercasedList(wordlist);
  // create a map of all the words in word list with a placeholder on the vowel along with it's original value
  const vowelCorrected = createVowelCorrectedList(wordlist);

  return queries.map((query) => {
    // if query matches a word in asIs, then return that query
    if (asIs.has(query)) {
      return query;
    }

    const lowercasedQuery = query.toLowerCase();
    // if the lowercased query is in our lowercased set, then return the first original value that matches this lowercased query
    if (lowercased.has(lowercasedQuery)) {
      return lowercased.get(lowercasedQuery);
    }

    const correctedQuery = toVowelCorrected(query);
    // if the correct query is in our vowelcorrected set, then return the first original value that matches this vowelcorrect query
    if (vowelCorrected.has(correctedQuery)) {
      return vowelCorrected.get(correctedQuery);
    }

    return "";
  });
};

// Time: O(N) since we loop through our word list 3 times
// Space: O(N) since we store each word in a set, additionally we store every unique lowercased and vowelcorrected word in a map

const createLowercasedList = (wordlist) => {
  const map = new Map();

  for (const word of wordlist) {
    const lowercased = word.toLowerCase();
    if (!map.has(lowercased)) {
      map.set(lowercased, word);
    }
  }

  return map;
};

const createVowelCorrectedList = (wordlist) => {
  const map = new Map();

  for (const word of wordlist) {
    const corrected = toVowelCorrected(word);
    // we'll take the first instance of the already vowelcorrected word in wordlist
    if (!map.has(corrected)) {
      map.set(corrected, word);
    }
  }

  return map;
};

// hello => h*ll*
const toVowelCorrected = (word) =>
  word.toLowerCase().replace(/a|e|i|o|u/g, "*");
