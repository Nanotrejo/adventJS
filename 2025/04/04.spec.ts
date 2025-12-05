import { decodeSantaPin } from './04';

describe('Challenge Day 4', () => {
  it('decodeSantaPin function', () => {
    expect(decodeSantaPin('[1++][2-][3+][<]')).toBe('3144');
    expect(decodeSantaPin('[9+][0-][4][<]')).toBe('0944');
    expect(decodeSantaPin('[1+][2-]')).toBeNull();
    expect(decodeSantaPin('[1+++++++++][2--][3----][<]')).toBe('0099')
  });

  it('should return null for less than 3 digits', () => {
    expect(decodeSantaPin('[5+]')).toBeNull();
    expect(decodeSantaPin('[]')).toBeNull();
  });

  it('should handle different operations correctly', () => {
    expect(decodeSantaPin('[0++][1++][2++][3++]')).toBe('2345');
    expect(decodeSantaPin('[5--][6--][7--][8--]')).toBe('3456');
  });

  it('should handle edge cases correctly', () => {
    expect(decodeSantaPin('[0-][0-][0-][0-]')).toBe('9999');
    expect(decodeSantaPin('[9+][9+][9+][9+]')).toBe('0000');
  });
});
