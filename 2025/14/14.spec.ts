import { findGiftPath } from './14';

describe('Challenge Day 14', () => {
  const workshop = {
    storage: {
      shelf: {
        box1: 'train',
        box2: 'switch'
      },
      box: 'car'
    },
    gift: 'doll'
  };

  it('should find path for deeply nested gift', () => {
    expect(findGiftPath(workshop, 'train')).toEqual(['storage', 'shelf', 'box1']);
    expect(findGiftPath(workshop, 'switch')).toEqual(['storage', 'shelf', 'box2']);
  });

  it('should find path for medium nested gift', () => {
    expect(findGiftPath(workshop, 'car')).toEqual(['storage', 'box']);
  });

  it('should find path for top level gift', () => {
    expect(findGiftPath(workshop, 'doll')).toEqual(['gift']);
  });

  it('should return empty array when gift not found', () => {
    expect(findGiftPath(workshop, 'plane')).toEqual([]);
  });

  it('should handle numbers and booleans', () => {
    const workshopWithNumbers = {
      area: {
        zone: 42
      },
      active: true
    };

    expect(findGiftPath(workshopWithNumbers, 42)).toEqual(['area', 'zone']);
    expect(findGiftPath(workshopWithNumbers, true)).toEqual(['active']);
  });

  it('should handle empty workshop', () => {
    expect(findGiftPath({}, 'gift')).toEqual([]);
  });
});
