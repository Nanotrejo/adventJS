'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.manufactureGifts = manufactureGifts;
function manufactureGifts(giftsToProduce) {
  var manufacturedGifts = [];
  for (
    var _i = 0, giftsToProduce_1 = giftsToProduce;
    _i < giftsToProduce_1.length;
    _i++
  ) {
    var gift = giftsToProduce_1[_i];
    var toy = gift.toy,
      quantity = gift.quantity;
    if (quantity > 0) {
      for (var i = 0; i < quantity; i++) {
        manufacturedGifts.push(toy);
      }
    }
  }
  return manufacturedGifts;
}
var production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 },
];
var result1 = manufactureGifts(production1);
console.log(result1);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']
var production2 = [
  { toy: 'train', quantity: 0 }, // not manufactured
  { toy: 'bear', quantity: -2 }, // neither
  { toy: 'puzzle', quantity: 1 },
];
var result2 = manufactureGifts(production2);
console.log(result2);
// ['puzzle']
var production3 = [];
var result3 = manufactureGifts(production3);
console.log(result3);
// []
