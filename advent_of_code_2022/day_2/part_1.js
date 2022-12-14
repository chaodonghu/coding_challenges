const { input } = require("./input");

const SHAPES = {
  A: 1, // Rock
  X: 1, // Rock
  B: 2, // Paper
  Y: 2, // Paper
  C: 3, // Scissors
  Z: 3, // Scissors
};

const roundsScore = input.map(([opponentSign, mySign]) => {
  const opponentScore = SHAPES[opponentSign];
  const myScore = SHAPES[mySign];
  const diff = Math.abs(opponentScore - myScore);

  if (opponentScore === myScore) {
    // There is a draw
    // A X
    // B Y
    // C Z
    // can either return myScore or opponentScore plus 3
    return (opponentScore || myScore) + 3;
  } else if (
    (diff === 1 && myScore > opponentScore) ||
    (myScore === 1 && opponentScore === 3)
  ) {
    // I win
    // A Y
    // B Z
    // C X
    return myScore + 6;
  } else {
    // Lose
    // A Z
    // B X
    // C Y
    return myScore;
  }
});

console.log(roundsScore.reduce((sum, v) => sum + v, 0));
