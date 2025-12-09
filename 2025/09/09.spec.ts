import { moveReno } from './09';

describe('Challenge Day 9', () => {
  const board = `
.....
.*#.*
.@...
.....
`;

  it('should return fail when moving without picking anything', () => {
    expect(moveReno(board, 'D')).toBe('fail');
    expect(moveReno(board, 'RR')).toBe('fail');
  });

  it('should return success when picking something up', () => {
    expect(moveReno(board, 'U')).toBe('success');
    expect(moveReno(board, 'RRRUU')).toBe('success');
  });

  it('should return crash when hitting an obstacle', () => {
    expect(moveReno(board, 'RU')).toBe('crash');
  });

  it('should return crash when going off the board', () => {
    expect(moveReno(board, 'DD')).toBe('crash');
  });

  it('should return success if picked something before crashing', () => {
    expect(moveReno(board, 'UUU')).toBe('success');
  });
});
