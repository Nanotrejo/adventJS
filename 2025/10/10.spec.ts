import { maxDepth } from './10';

describe('Challenge Day 10', () => {
  it('should return correct depth for valid brackets', () => {
    expect(maxDepth('[]')).toBe(1);
    expect(maxDepth('[[]]')).toBe(2);
    expect(maxDepth('[][]')).toBe(1);
    expect(maxDepth('[[][]]')).toBe(2);
    expect(maxDepth('[[[]]]')).toBe(3);
    expect(maxDepth('[][[]][]')).toBe(2);
  });

  it('should return -1 for invalid brackets', () => {
    expect(maxDepth('][')).toBe(-1);
    expect(maxDepth('[[[')).toBe(-1);
    expect(maxDepth('[]]]')).toBe(-1);
    expect(maxDepth('[][][')).toBe(-1);
  });

  it('should handle empty string', () => {
    expect(maxDepth('')).toBe(0);
  });
});
