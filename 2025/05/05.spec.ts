import { timeUntilTakeOff } from './05';

describe('Challenge Day 5', () => {
  it('should return the correct time difference in seconds', () => {
    const takeoff = '2025*12*25@00|00|00 NP';
    expect(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)).toBe(30);
    expect(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)).toBe(0);
    expect(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)).toBe(-12);
  });

  it('should handle different dates correctly', () => {
    const takeoff = '2025*01*01@12|00|00 NP';
    expect(timeUntilTakeOff('2024*12*31@12|00|00 NP', takeoff)).toBe(86400);
    expect(timeUntilTakeOff('2025*01*01@11|59|59 NP', takeoff)).toBe(1);
    expect(timeUntilTakeOff('2025*01*01@12|00|01 NP', takeoff)).toBe(-1);
  });

  it('should return negative values for times after takeoff', () => {
    const takeoff = '2025*06*15@15|30|00 NP';
    expect(timeUntilTakeOff('2025*06*15@15|30|10 NP', takeoff)).toBe(-10);
    expect(timeUntilTakeOff('2025*06*15@16|00|00 NP', takeoff)).toBe(-1800);
  });
});
