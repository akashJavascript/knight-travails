let start = [1, 1];
let end = [7,7 ];
let visited = [];
function getKnightMoves(x, y) {
  const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
  const moves = [];

  for (let i = 0; i < 8; i++) {
    const newX = x + dx[i];
    const newY = y + dy[i];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      moves.push([newX, newY]);
    }
  }

  return moves;
}
function includesArray(arr, target) {
  return arr.some(
    e => e.length === target.length && e.every((v, i) => v === target[i])
  );
}
function knightPath(start, end) {
  let targetSquare = end;
  let numMoves = [];
  let queue = [start];

  while (queue.length > 0) {
    let currMove = queue.shift();
    let moves = getKnightMoves(currMove[0], currMove[1]);
    if (currMove[0] === targetSquare[0] && currMove[1] === targetSquare[1]) {
      break;
    } else {
      visited.push(currMove);
      for (let move of moves) {
        if (!includesArray(visited, move)) {
          queue.push(move);
          numMoves.push([currMove, move]);
        }
      }
    }
  }
  console.log(numMoves);
  let path = [];
  let prevSquare = end;
  for (let i = numMoves.length - 1; i >= 0; i--) {
    if (numMoves[i][1].toString() === prevSquare.toString()) {      path.unshift(numMoves[i][1]);
      prevSquare = numMoves[i][0];
    }
  }
  path.unshift(start);
  return path;
}
console.log(knightPath(start, end));
