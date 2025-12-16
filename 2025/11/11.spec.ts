import { findUnsafeGifts } from './11';

describe('Challenge Day 11', () => {
  it('should return 0 when all gifts are next to a camera', () => {
    expect(findUnsafeGifts([
      '.*.',
      '*#*',
      '.*.'
    ])).toBe(0);
  });

  it('should return 1 when there is one gift with no cameras around', () => {
    expect(findUnsafeGifts([
      '...',
      '.*.',
      '...'
    ])).toBe(1);
  });

  it('should return 2 when gifts in corners have no cameras', () => {
    expect(findUnsafeGifts([
      '*.*',
      '...',
      '*#*'
    ])).toBe(2);
  });

  it('should return 4 when gifts are diagonal to camera', () => {
    expect(findUnsafeGifts([
      '.....',
      '.*.*.',
      '..#..',
      '.*.*.',
      '.....'
    ])).toBe(4);
  });

  it('should handle empty warehouse', () => {
    expect(findUnsafeGifts([])).toBe(0);
  });

  it('should handle warehouse with no gifts', () => {
    expect(findUnsafeGifts([
      '...',
      '.#.',
      '...'
    ])).toBe(0);
  });
});
