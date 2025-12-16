export { findUnsafeGifts };

function findUnsafeGifts(warehouse: string[]): number {
  const height = warehouse.length;
  const width = warehouse[0]?.length || 0;
  let unsafeCount = 0;

  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (warehouse[y][x] === '*') {
        let hasCameraAdjacent = false;

        for (const [dy, dx] of directions) {
          const newY = y + dy;
          const newX = x + dx;

          if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
            if (warehouse[newY][newX] === '#') {
              hasCameraAdjacent = true;
              break;
            }
          }
        }

        if (!hasCameraAdjacent) {
          unsafeCount++;
        }
      }
    }
  }

  return unsafeCount;
}
