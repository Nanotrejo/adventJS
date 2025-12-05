"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSantaPin = decodeSantaPin;
function decodeSantaPin(code) {
    var pinDigits = [];
    var regex = /\[(\d)?([+-]*|<)\]/g;
    var match;
    while ((match = regex.exec(code))) {
        var digitStr = match[1], op = match[2];
        var digit = void 0;
        if (op === '<') {
            // digit = pinDigits.at(-1) ?? 0;
            pinDigits.push(pinDigits.length > 0 ? pinDigits[pinDigits.length - 1] : 0);
        }
        else {
            if (!digitStr)
                continue;
            digit = parseInt(digitStr, 10);
            if (op && /^[+-]+$/.test(op)) {
                var offset = 0;
                for (var _i = 0, op_1 = op; _i < op_1.length; _i++) {
                    var c = op_1[_i];
                    offset += c === '+' ? 1 : -1;
                }
                digit = ((digit + offset) % 10 + 10) % 10;
            }
        }
        pinDigits.push(digit);
    }
    return pinDigits.length < 4 ? null : pinDigits.slice(0, 4).join('');
}
console.log(decodeSantaPin('[1++][2-][3+][<]'));
// "3144"
decodeSantaPin('[9+][0-][4][<]');
// "0944"
decodeSantaPin('[1+][2-]');
// null (only 2 digits)
