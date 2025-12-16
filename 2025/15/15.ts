export { drawTable };

type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
  if (!data.length) return '';

  // Sort data
  const sorted = [...data].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    return valA < valB ? -1 : valA > valB ? 1 : 0;
  });

  // Get column names and calculate widths
  const keys = Object.keys(sorted[0]);
  const colWidths = keys.map(key => {
    const headerWidth = 1; // Single letter A, B, C...
    const dataWidth = Math.max(...sorted.map(row => String(row[key]).length));
    return Math.max(headerWidth, dataWidth);
  });

  // Build separator line
  const separator = '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';

  // Build header
  const header = '|' + keys.map((_, i) => {
    const letter = String.fromCharCode(65 + i); // A, B, C...
    return ' ' + letter.padEnd(colWidths[i] + 1);
  }).join('|') + '|';

  // Build rows
  const rows = sorted.map(row => {
    return '|' + keys.map((key, i) => {
      const value = String(row[key]);
      return ' ' + value.padEnd(colWidths[i] + 1);
    }).join('|') + '|';
  });

  return [separator, header, separator, ...rows, separator].join('\n');
}
