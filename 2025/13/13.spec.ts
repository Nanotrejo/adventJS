import { runFactory } from './13';

describe('Challenge Day 13', () => {
  it('should return completed when reaching exit', () => {
    expect(runFactory(['>>.'])).toBe('completed');
    expect(runFactory([
      '>>v',
      '..<'
    ])).toBe('completed');
    expect(runFactory([
      '>v.',
      '^..'
    ])).toBe('completed');
  });

  it('should return broken when going out of bounds', () => {
    expect(runFactory(['>>>'])).toBe('broken');
    expect(runFactory([
      '>>v',
      '<<<'
    ])).toBe('broken');
  });

  it('should return loop when visiting same position twice', () => {
    expect(runFactory(['>><'])).toBe('loop');
    expect(runFactory([
      'v.',
      '^.'
    ])).toBe('loop');
  });

  it('should handle single cell exit', () => {
    expect(runFactory(['.'])).toBe('completed');
  });
});
