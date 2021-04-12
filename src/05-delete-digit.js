/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = String(n).split('');
  let param = Number(a[0]);
  for (let i = 0; i < a.length; i++) {
    if (param > Number(a[i])) {
      param = Number(a[i]);
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (param === Number(a[i])) {
      a.splice(i, 1);
      break;
    }
  }
  return Number(a.join(''));
}

module.exports = deleteDigit;
