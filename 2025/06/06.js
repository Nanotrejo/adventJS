'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.matchGloves = matchGloves;
function matchGloves(gloves) {
  var leftGloves = {};
  var rightGloves = {};
  var matchedColors = [];
  for (var _i = 0, gloves_1 = gloves; _i < gloves_1.length; _i++) {
    var _a = gloves_1[_i],
      hand = _a.hand,
      color = _a.color;
    if (hand === 'L') {
      if (rightGloves[color] > 0) {
        matchedColors.push(color);
        rightGloves[color]--;
      } else {
        leftGloves[color] = (leftGloves[color] || 0) + 1;
      }
    } else {
      if (leftGloves[color] > 0) {
        matchedColors.push(color);
        leftGloves[color]--;
      } else {
        rightGloves[color] = (rightGloves[color] || 0) + 1;
      }
    }
  }
  return matchedColors;
}
