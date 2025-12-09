"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveReno = moveReno;
function moveReno(board, moves) {
    var _a;
    var grid = board.split('\n').filter(function (row) { return row.length > 0; });
    var height = grid.length;
    var width = ((_a = grid[0]) === null || _a === void 0 ? void 0 : _a.length) || 0;
    var y = grid.findIndex(function (row) { return row.includes('@'); });
    var x = grid[y].indexOf('@');
    var directions = {
        L: [0, -1],
        R: [0, 1],
        U: [-1, 0],
        D: [1, 0],
    };
    var pickedUp = false;
    for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
        var move = moves_1[_i];
        var _b = directions[move], dy = _b[0], dx = _b[1];
        var newY = y + dy;
        var newX = x + dx;
        if (newY < 0 ||
            newY >= height ||
            newX < 0 ||
            newX >= width ||
            grid[newY][newX] === '#') {
            return pickedUp ? 'success' : 'crash';
        }
        if (grid[newY][newX] === '*') {
            pickedUp = true;
        }
        y = newY;
        x = newX;
    }
    return pickedUp ? 'success' : 'fail';
}
