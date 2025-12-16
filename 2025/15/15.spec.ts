import { drawTable } from './15';

describe('Challenge Day 15', () => {
  it('should draw table sorted by name', () => {
    const result = drawTable(
      [
        { name: 'Charlie', city: 'New York' },
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' }
      ],
      'name'
    );

    expect(result).toBe(
      `+---------+----------+
` +
      `| A       | B        |
` +
      `+---------+----------+
` +
      `| Alice   | London   |
` +
      `| Bob     | Paris    |
` +
      `| Charlie | New York |
` +
      `+---------+----------+`
    );
  });

  it('should draw table sorted by quantity', () => {
    const result = drawTable(
      [
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
        { gift: 'Doll', quantity: 10 }
      ],
      'quantity'
    );

    expect(result).toBe(
      `+----------+----+
` +
      `| A        | B  |
` +
      `+----------+----+
` +
      `| Music CD | 1  |
` +
      `| Book     | 5  |
` +
      `| Doll     | 10 |
` +
      `+----------+----+`
    );
  });

  it('should handle single row', () => {
    const result = drawTable(
      [{ name: 'Alice', age: 30 }],
      'name'
    );

    expect(result).toBe(
      `+-------+----+
` +
      `| A     | B  |
` +
      `+-------+----+
` +
      `| Alice | 30 |
` +
      `+-------+----+`
    );
  });

  it('should handle empty array', () => {
    expect(drawTable([], 'name')).toBe('');
  });
});
