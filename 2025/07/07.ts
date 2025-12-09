export { drawTree };

function drawTree(height: number, ornament: string, frequency: number): string {
  const maxWidth = 2 * height - 1;
  const lines: string[] = [];
  let position = 0;

  for (let row = 1; row <= height; row++) {
    const chars = 2 * row - 1;
    const padding = ' '.repeat((maxWidth - chars) / 2);
    let rowContent = '';

    for (let j = 0; j < chars; j++) {
      position++;
      rowContent += position % frequency === 0 ? ornament : '*';
    }

    lines.push(padding + rowContent);
  }

  // Add trunk
  const trunkPadding = ' '.repeat((maxWidth - 1) / 2);
  lines.push(trunkPadding + '#');

  return lines.join('\n');
}
