export { matchGloves };

export type Glove = { hand: 'L' | 'R'; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const leftGloves: Record<string, number> = {};
  const rightGloves: Record<string, number> = {};
  const matchedColors: string[] = [];

  for (const { hand, color } of gloves) {
    if (hand === 'L') {
      if (rightGloves[color] > 0) {
        matchedColors.push(color);
        rightGloves[color]--;
      } else {
        leftGloves[color] = (leftGloves[color] || 0) + 1;
      }
    } else {
      if (leftGloves[color] > 0) {
        matchedColors.push(color);
        leftGloves[color]--;
      } else {
        rightGloves[color] = (rightGloves[color] || 0) + 1;
      }
    }
  }

  return matchedColors;
}
