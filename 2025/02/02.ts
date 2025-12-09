export { manufactureGifts };

function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  const total = giftsToProduce.reduce(
    (sum, { quantity }) => sum + Math.max(0, quantity),
    0
  );
  const manufacturedGifts: string[] = new Array(total);
  let idx = 0;

  for (const { toy, quantity } of giftsToProduce) {
    const q = Math.max(0, quantity);
    for (let i = 0; i < q; i++) {
      manufacturedGifts[idx++] = toy;
    }
  }

  return manufacturedGifts;
}

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 },
];

const result1 = manufactureGifts(production1);
console.log(result1);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: 'train', quantity: 0 }, // not manufactured
  { toy: 'bear', quantity: -2 }, // neither
  { toy: 'puzzle', quantity: 1 },
];

const result2 = manufactureGifts(production2);
console.log(result2);
// ['puzzle']

const production3 = [];
const result3 = manufactureGifts(production3);
console.log(result3);
// []
