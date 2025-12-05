import { drawGift } from './03';

describe('Challenge Day 3', () => {
  it('drawGift function', () => {
    expect(drawGift(4, '*')).toBe('****\n*  *\n*  *\n****');
    expect(drawGift(3, '#')).toBe('###\n# #\n###');
    expect(drawGift(2, '-')).toBe('--\n--');
    expect(drawGift(1, '+')).toBe('');
  });

  it('should return an empty string for size less than 2', () => {
    expect(drawGift(0, '*')).toBe('');
    expect(drawGift(1, '#')).toBe('');
  });

  it('should handle different symbols correctly', () => {
    expect(drawGift(3, '@')).toBe(`@@@\n@ @\n@@@`);
    expect(drawGift(5, '$')).toBe(`$$$$$\n$   $\n$   $\n$   $\n$$$$$`);
  });

  it('should handle larger sizes correctly', () => {
    expect(drawGift(6, '%')).toBe(
      `%%%%%%\n%    %\n%    %\n%    %\n%    %\n%%%%%%`
    );
  });
});

it('should handle larger sizes correctly', () => {
  expect(drawGift(6, '%')).toBe(
    `%%%%%%\n%    %\n%    %\n%    %\n%    %\n%%%%%%`
  );
});
