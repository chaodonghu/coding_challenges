/**
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
  // sort deck in increasing order
  deck.sort((a, b) => a - b);

  const result = Array.from(deck).fill(0);
  const q = [];

  // push all the indexs of the card into queue
  for (let i = 0; i < deck.length; i++) q.push(i);

  // go through the deck and reveal the cards
  for (let i = 0; i < deck.length; i++) {
    // Reveal the top card
    let index = q.shift();
    result[index] = deck[i];

    console.log("result", result);
    console.log("deck", deck);

    // push top card index to bottom
    let bottomCard = q.shift();
    q.push(bottomCard);
  }
  return result;
}

// Time: O(N log N)
// Space: O(N)
