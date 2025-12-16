import { elfBattle } from './12';

describe('Challenge Day 12', () => {
  it('should return 0 when elf 2 blocks elf 1 attack', () => {
    expect(elfBattle('A', 'B')).toBe(0);
  });

  it('should return 1 when elf 1 uses strong attack', () => {
    expect(elfBattle('F', 'B')).toBe(1);
  });

  it('should return 0 when all attacks are blocked', () => {
    expect(elfBattle('AAB', 'BBA')).toBe(0);
  });

  it('should return 1 when elf 1 wins with mixed attacks', () => {
    expect(elfBattle('AFA', 'BBA')).toBe(1);
  });

  it('should end battle when elf reaches 0 HP', () => {
    expect(elfBattle('AFAB', 'BBAF')).toBe(1);
  });

  it('should return 2 when elf 2 wins', () => {
    expect(elfBattle('AA', 'FF')).toBe(2);
  });

  it('should handle draw when both reach 0 at same time', () => {
    expect(elfBattle('FFF', 'FFF')).toBe(0);
  });

  it('should handle empty moves', () => {
    expect(elfBattle('', '')).toBe(0);
  });
});
