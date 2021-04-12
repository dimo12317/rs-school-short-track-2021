/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const a = n.split('-');
  if (a.length !== 6) return false;
  for (let i = 0; i < a.length; i++) {
    a[i].split('');
  }
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < a[i].length; y++) {
      if (a[i][y] !== 'A' && a[i][y] !== 'B' && a[i][y] !== 'C' && a[i][y] !== 'D' && a[i][y] !== 'E' && a[i][y] !== 'F') {
        if (a[i][y] !== '0' && a[i][y] !== '1' && a[i][y] !== '2' && a[i][y] !== '3' && a[i][y] !== '4' && a[i][y] !== '5' && a[i][y] !== '6' && a[i][y] !== '7' && a[i][y] !== '8' && a[i][y] !== '9') {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = isMAC48Address;
