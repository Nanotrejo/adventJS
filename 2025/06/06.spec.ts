import { Glove, matchGloves } from './06';

describe('Challenge Day 6', () => {
  it('should match gloves correctly', () => {
    const gloves: Glove[] = [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'R', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'R', color: 'green' },
      { hand: 'R', color: 'yellow' },
    ];

    const result = matchGloves(gloves);
    expect(result).toEqual(['blue', 'red', 'green']);
  });

  it('should return an empty array when there are no matches', () => {
    const gloves: Glove[] = [
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'blue' },
      { hand: 'R', color: 'green' },
    ];

    const result = matchGloves(gloves);
    expect(result).toEqual([]);
  });

  it('should handle an empty input array', () => {
    const gloves: Glove[] = [];

    const result = matchGloves(gloves);
    expect(result).toEqual([]);
  });

  it('should handle multiple pairs of the same color', () => {
    const gloves: Glove[] = [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
    ];

    const result = matchGloves(gloves);
    expect(result).toEqual(['red', 'red']);
  });

  it('should respect order of appearance', () => {
    const gloves: Glove[] = [
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
    ];

    const result = matchGloves(gloves);
    expect(result).toEqual(['red', 'green']);
  });
});
