import { drawTree } from './07';

describe('Challenge Day 7', () => {
  it('should draw a tree with the given parameters', () => {
    const result = drawTree(5, 'o', 2);
    expect(result).toEqual(`    *
   o*o
  *o*o*
 o*o*o*o
*o*o*o*o*
    #`);
  });

  it('should place ornaments at the correct frequency', () => {
    const result = drawTree(3, '@', 3);
    expect(result).toEqual(`  *
 *@*
*@**@
  #`);
  });

  it('should handle all ornaments with frequency 1', () => {
    const result = drawTree(4, '+', 1);
    expect(result).toEqual(`   +
  +++
 +++++
+++++++
   #`);
  });

  it('should handle height of 1', () => {
    const result = drawTree(1, 'o', 2);
    expect(result).toEqual(`*
#`);
  });
});
