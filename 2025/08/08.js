'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.findUniqueToy = findUniqueToy;
function findUniqueToy(toy) {
  var count = {};
  for (var _i = 0, toy_1 = toy; _i < toy_1.length; _i++) {
    var char = toy_1[_i];
    var lower = char.toLowerCase();
    count[lower] = (count[lower] || 0) + 1;
  }
  for (var _a = 0, toy_2 = toy; _a < toy_2.length; _a++) {
    var char = toy_2[_a];
    if (count[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return '';
}
