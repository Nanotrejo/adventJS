export { runFactory };

type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'
      
function runFactory(factory: Factory): Result {
  if (!factory.length || !factory[0]) return 'broken';

  const height = factory.length;
  const width = factory[0].length;
  const visited = new Set<string>();
  
  let x = 0;
  let y = 0;

  const directions: Record<string, [number, number]> = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0]
  };

  while (true) {
    // Check bounds
    if (y < 0 || y >= height || x < 0 || x >= width) {
      return 'broken';
    }

    const cell = factory[y][x];

    // Check exit
    if (cell === '.') {
      return 'completed';
    }

    // Check loop
    const posKey = `${y},${x}`;
    if (visited.has(posKey)) {
      return 'loop';
    }
    visited.add(posKey);

    // Move
    const [dy, dx] = directions[cell];
    if (!dy && !dx && dy !== 0) {
      return 'broken';
    }

    y += dy;
    x += dx;
  }
}
