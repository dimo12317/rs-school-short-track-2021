/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const a = str.split('');
  let b = a[0];
  let kol = 0;
  let strin = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      kol++;
    } else {
      strin += kol;
      strin += b;
      b = a[i];
      kol = 1;
    }
    if (i === a.length - 1) {
      strin += kol;
      strin += b;
      b = a[i];
      kol = 1;
    }
  }
  strin = strin.split('');
  for (let i = 0; i < strin.length; i++) {
    if (strin[i] === '1') {
      strin.splice(i, 1);
      i--;
    }
  }
  strin = strin.join('');
  return strin;
}

module.exports = encodeLine;
