'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.manufactureGifts = manufactureGifts;
function manufactureGifts(giftsToProduce) {
  // Optimized implementation:
  // 1) Calcula la cantidad total de juguetes a fabricar
  // 2) Prealoca el array de resultado con ese tamaño
  // 3) Rellena el array por índice (evita re-asignaciones dinámicas)
  var total = giftsToProduce.reduce(function (sum, _a) {
    var quantity = _a.quantity;
    return sum + Math.max(0, quantity);
  }, 0);
  var manufacturedGifts = new Array(total);
  var idx = 0;
  for (
    var _i = 0, giftsToProduce_1 = giftsToProduce;
    _i < giftsToProduce_1.length;
    _i++
  ) {
    var _a = giftsToProduce_1[_i],
      toy = _a.toy,
      quantity = _a.quantity;
    var q = Math.max(0, quantity);
    for (var i = 0; i < q; i++) {
      manufacturedGifts[idx++] = toy;
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
