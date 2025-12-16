import { packGifts } from './16';

describe('Challenge Day 16', () => {
  it('should calculate minimum sleighs needed', () => {
    expect(packGifts([2, 3, 4, 1], 5)).toBe(2);
    expect(packGifts([3, 3, 2, 1], 3)).toBe(3);
    expect(packGifts([1, 1, 1, 1], 2)).toBe(2);
  });

  it('should return null when a gift exceeds max weight', () => {
    expect(packGifts([5, 6, 1], 5)).toBe(null);
  });

  it('should return 0 for empty gifts array', () => {
    expect(packGifts([], 10)).toBe(0);
  });

  it('should handle single gift that fits', () => {
    expect(packGifts([3], 5)).toBe(1);
  });

  it('should handle all gifts in one sleigh', () => {
    expect(packGifts([1, 2, 3], 10)).toBe(1);
  });

  it('should handle each gift in separate sleigh', () => {
    expect(packGifts([5, 5, 5], 5)).toBe(3);
  });
});
