/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let a = String(n).split('');
  for (let i = 0; i < a.length; i++) {
    a[i] = Number(a[i]);
  }
  let number = 0;
  for (let i = 0; i < a.length; i++) {
    number += a[i];
    if (i === a.length - 1) {
      if (number < 10) {
        return number;
      }
      a = String(number).split('');
      for (let j = 0; j < a.length; j++) {
        a[j] = Number(a[j]);
      }
      i = -1;
      number = 0;
    }
  }
  return true;
}

module.exports = getSumOfDigits;
