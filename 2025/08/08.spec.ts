import { findUniqueToy } from './08';

describe('Challenge Day 8', () => {
  it('should return the first non-repeated letter', () => {
    expect(findUniqueToy('Gift')).toBe('G');
  });

  it('should return empty string when all letters are repeated', () => {
    expect(findUniqueToy('sS')).toBe('');
    expect(findUniqueToy('AaBbCc')).toBe('');
  });

  it('should ignore case when counting but preserve original case in result', () => {
    expect(findUniqueToy('reindeeR')).toBe('i');
    expect(findUniqueToy('sTreSS')).toBe('T');
  });

  it('should return first unique letter', () => {
    expect(findUniqueToy('abcDEF')).toBe('a');
    expect(findUniqueToy('aAaAaAF')).toBe('F');
  });

  it('should handle single character', () => {
    expect(findUniqueToy('z')).toBe('z');
  });
});
