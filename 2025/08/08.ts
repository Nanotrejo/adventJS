export { findUniqueToy };

function findUniqueToy(toy: string): string {
  const count: Record<string, number> = {};

  for (const char of toy) {
    const lower = char.toLowerCase();
    count[lower] = (count[lower] || 0) + 1;
  }

  for (const char of toy) {
    if (count[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return '';
}
