function knightMoves(start, end, queue = [start]) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const current = queue.shift();
  const directChildren = [];

  if (end[0] === current[0] && end[1] === current[1]) return [current];

  for (let move of moves) {
    const newSquare = [current[0] + move[0], current[1] + move[1]];

    if (
      newSquare[0] < 8 &&
      newSquare[0] >= 0 &&
      newSquare[1] < 8 &&
      newSquare[1] >= 0
    ) {
      queue.push(newSquare);
      directChildren.push(newSquare);
    }
  }

  const returnedValue = knightMoves(start, end, queue);

  if (directChildren.includes(returnedValue[0])) {
    const squaresHistory = [current, ...returnedValue];

    if (current === start) {
      console.log(
        `You made it in ${squaresHistory.length - 1} moves! Here's your path:`
      );

      for (let i = 0; i < squaresHistory.length; i++) {
        console.log(squaresHistory[i]);
      }
    }

    return squaresHistory;
  }

  return returnedValue;
}

knightMoves([0, 0], [7, 7]);
