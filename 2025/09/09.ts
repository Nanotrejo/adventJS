export { moveReno };

type Board = string;
type Moves = string;
type Result = 'fail' | 'crash' | 'success';

function moveReno(board: Board, moves: Moves): Result {
  const grid = board.split('\n').filter((row) => row.length > 0);
  const height = grid.length;
  const width = grid[0]?.length || 0;

  let y = grid.findIndex((row) => row.includes('@'));
  let x = grid[y].indexOf('@');

  const directions: Record<string, [number, number]> = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  let pickedUp = false;

  for (const move of moves) {
    const [dy, dx] = directions[move];
    const newY = y + dy;
    const newX = x + dx;

    if (
      newY < 0 ||
      newY >= height ||
      newX < 0 ||
      newX >= width ||
      grid[newY][newX] === '#'
    ) {
      return pickedUp ? 'success' : 'crash';
    }

    if (grid[newY][newX] === '*') {
      pickedUp = true;
    }

    y = newY;
    x = newX;
  }

  return pickedUp ? 'success' : 'fail';
}
