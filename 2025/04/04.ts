export { decodeSantaPin };

function decodeSantaPin(code: string): string | null {
  const pinDigits: number[] = [];
  const regex = /\[(\d)?([+-]*|<)\]/g;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(code))) {
    const [, digitStr, op] = match;
    let digit: number;

    if (op === '<') {
      // digit = pinDigits.at(-1) ?? 0;
      pinDigits.push(
        pinDigits.length > 0 ? pinDigits[pinDigits.length - 1] : 0
      );
    } else {
      if (!digitStr) continue;
      digit = parseInt(digitStr, 10);

      if (op && /^[+-]+$/.test(op)) {
        let offset = 0;
        for (const c of op) offset += c === '+' ? 1 : -1;
        digit = (((digit + offset) % 10) + 10) % 10;
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
