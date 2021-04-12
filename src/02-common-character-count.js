/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');
  let summ = 0;
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < b.length; y++) {
      if (a[i] === b[y]) {
        summ++;
        b.splice(y, 1);
        a.splice(i, 1);
        i--;
        y--;
      }
    }
  }
  return summ;
}

module.exports = getCommonCharacterCount;
