const { input } = require("./input");

const SHAPES = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
};

const roundsScore = input.map(([opponentSign, result]) => {
  // Result should be a draw
  if (result === "Y") {
    return SHAPES[opponentSign] + 3;
  } else if (result === "X") {
    // I need to lose
    // If opponent has Rock then I need to play Scissors
    if (opponentSign === "A") {
      return SHAPES["C"];
    } else if (opponentSign === "B") {
      // If opponent has Paper then I need to play Rock
      return SHAPES["A"];
    } else {
      return SHAPES["B"];
    }
  } else {
    // I win
    // If opponent has Rock then I need to play Scissors
    if (opponentSign === "A") {
      return SHAPES["B"] + 6;
    } else if (opponentSign === "B") {
      // If opponent has Paper then I need to play Rock
      return SHAPES["C"] + 6;
    } else {
      return SHAPES["A"] + 6;
    }
  }
});

console.log(roundsScore.reduce((sum, v) => sum + v, 0));
