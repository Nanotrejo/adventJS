'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.filterGifts = filterGifts;
function filterGifts(gifts) {
  return gifts.filter(function (gift) {
    return !gift.includes('#');
  });
}
var gifts1 = ['car', 'doll#arm', 'ball', '#train'];
var good1 = filterGifts(gifts1);
console.log(good1);
// ['car', 'ball']
var gifts2 = ['#broken', '#rusty'];
var good2 = filterGifts(gifts2);
console.log(good2);
// []
var gifts3 = [];
var good3 = filterGifts(gifts3);
console.log(good3);
// []
