/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr;
  const mas = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) mas.push(arr[i]);
  }
  for (let i = 0; i < mas.length; i++) {
    for (let y = 0; y < mas.length; y++) {
      if (mas[i] < mas[y]) {
        const a = mas[i];
        mas[i] = mas[y];
        mas[y] = a;
      }
    }
  }
  let a = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      result[i] = mas[a];
      a++;
    } else {
      result[i] = -1;
    }
  }
  return result;
}

module.exports = sortByHeight;
