'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.drawGift = drawGift;
function drawGift(size, symbol) {
  if (size < 2) {
    return '';
  }
  var gift = '';
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        gift += symbol;
      } else {
        gift += ' ';
      }
    }
    gift += '\n';
  }
  return gift.trim();
}
var g1 = drawGift(4, '*');
console.log(g1);
/*
 ****
 *  *
 *  *
 ****
 */
var g2 = drawGift(3, '#');
console.log(g2);
/*
###
# #
###
*/
var g3 = drawGift(2, '-');
console.log(g3);
/*
--
--
*/
var g4 = drawGift(1, '+');
console.log(g4);
// ""  poor intern…
