import { manufactureGifts } from './02';

describe('Challenge Day 2', () => {
  it('should manufacture the correct number of gifts', () => {
    const production1 = [
      { toy: 'car', quantity: 3 },
      { toy: 'doll', quantity: 1 },
      { toy: 'ball', quantity: 2 },
    ];
    const result1 = manufactureGifts(production1);
    expect(result1).toEqual(['car', 'car', 'car', 'doll', 'ball', 'ball']);

    const production2 = [
      { toy: 'train', quantity: 0 },
      { toy: 'bear', quantity: -2 },
      { toy: 'puzzle', quantity: 1 },
    ];
    const result2 = manufactureGifts(production2);
    expect(result2).toEqual(['puzzle']);

    const production3: Array<{ toy: string; quantity: number }> = [];
    const result3 = manufactureGifts(production3);
    expect(result3).toEqual([]);
  });

  it('should not manufacture gifts with zero or negative quantity', () => {
    const production = [
      { toy: 'train', quantity: 0 },
      { toy: 'bear', quantity: -5 },
      { toy: 'puzzle', quantity: 2 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['puzzle', 'puzzle']);
  });

  it('should return an empty array if no gifts are to be produced', () => {
    const production: Array<{ toy: string; quantity: number }> = [];
    const result = manufactureGifts(production);
    expect(result).toEqual([]);
  });
});
