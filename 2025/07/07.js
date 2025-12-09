'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.drawTree = drawTree;
function drawTree(height, ornament, frequency) {
  var maxWidth = 2 * height - 1;
  var lines = [];
  var position = 0;
  for (var row = 1; row <= height; row++) {
    var chars = 2 * row - 1;
    var padding = ' '.repeat((maxWidth - chars) / 2);
    var rowContent = '';
    for (var j = 0; j < chars; j++) {
      position++;
      rowContent += position % frequency === 0 ? ornament : '*';
    }
    lines.push(padding + rowContent);
  }
  // Add trunk
  var trunkPadding = ' '.repeat((maxWidth - 1) / 2);
  lines.push(trunkPadding + '#');
  return lines.join('\n');
}
