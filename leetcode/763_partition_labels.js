function partitionLabels(S) {
  // create a hash map to store the last indexes of each character
  let map = {};
  let parition = [];

  // go through the input list and store the last index/occurance of each character
  // every subsequent character that is seen again will be overwritten
  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }

  // instantiate a starting pointer
  let start = 0;
  // instantiate a ending pointer
  let end = 0;

  // if the last character/letter of a scene is the same as the index
  // we stored in our map that means we are at the end of the scene
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, map[S[i]]);
    // once we reach the end of our scene and that index equals the last index/occurance of the character
    // take the size of that scene and add it to our answer parition array
    if (i === end) {
      parition.push(i - start + 1);
      // move our scene start
      start = i + 1;
    }
  }

  return parition;
}
// Time -> O(N) -> N is the length of the input list
// Space -> O(1) -> We create a new auxillary data structure of a map,
// but the map will not contain anymore than 26 characters of the alphabet
