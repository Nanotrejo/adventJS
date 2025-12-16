export { packGifts };

type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  if (!gifts.length) return 0;

  let sleighCount = 1;
  let currentWeight = 0;

  for (const gift of gifts) {
    if (gift > maxWeight) {
      return null;
    }

    if (currentWeight + gift > maxWeight) {
      sleighCount++;
      currentWeight = gift;
    } else {
      currentWeight += gift;
    }
  }

  return sleighCount;
}
