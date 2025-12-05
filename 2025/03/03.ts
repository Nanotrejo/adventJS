export { drawGift };
function drawGift(size: number, symbol: string): string {
  if (size < 2) return '';

  const border = symbol.repeat(size);
  const middleRow = symbol + ' '.repeat(Math.max(0, size - 2)) + symbol;
  const rows: string[] = [border];

  for (let i = 0; i < size - 2; i++) {
    rows.push(middleRow);
  }

  rows.push(border);
  return rows.join('\n');
}

const g1 = drawGift(4, '*');
console.log(g1);
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#');
console.log(g2);
/*
###
# #
###
*/

const g3 = drawGift(2, '-');
console.log(g3);
/*
--
--
*/

const g4 = drawGift(1, '+');
console.log(g4);
// ""  poor intern…
