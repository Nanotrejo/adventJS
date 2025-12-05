import { filterGifts } from './01';

describe('Challenge Day 1', () => {
  it('should filter out gifts with a #', () => {
    const gifts1 = ['car', 'doll#arm', 'ball', '#train'];
    const good1 = filterGifts(gifts1);
    expect(good1).toEqual(['car', 'ball']);

    const gifts2 = ['#broken', '#rusty'];
    const good2 = filterGifts(gifts2);
    expect(good2).toEqual([]);

    const gifts3: string[] = [];
    const good3 = filterGifts(gifts3);
    expect(good3).toEqual([]);
  });

  it('should return an empty array if all gifts are invalid', () => {
    const gifts = ['#broken', '#rusty'];
    const result = filterGifts(gifts);
    expect(result).toEqual([]);
  });

  it('should return an empty array if no gifts are provided', () => {
    const gifts: string[] = [];
    const result = filterGifts(gifts);
    expect(result).toEqual([]);
  });
});
