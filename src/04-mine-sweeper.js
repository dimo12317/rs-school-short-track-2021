/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const a = [];
  for (let i = 0; i < matrix.length; i++) {
    a[i] = [];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      a[i][y] = 0;
    }
  }
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < a[i].length; y++) {
      if (y !== a.length - 1) {
        if (matrix[i][y + 1] === true) {
          ++a[i][y];
        }
      }
      if (i !== a.length - 1) {
        if (matrix[i + 1][y] === true) {
          ++a[i][y];
        }
      }
      if (i !== 0) {
        if (matrix[i - 1][y] === true) {
          ++a[i][y];
        }
      }
      if (y !== 0) {
        if (matrix[i][y - 1] === true) {
          ++a[i][y];
        }
      }
      if (i !== a.length - 1 && y !== a.length - 1) {
        if (matrix[i + 1][y + 1] === true) ++a[i][y];
      }
      if (i !== 0 && y !== a.length - 1) {
        if (matrix[i - 1][y + 1] === true) ++a[i][y];
      }
      if (i !== a.length - 1 && y !== 0) {
        if (matrix[i + 1][y - 1] === true) ++a[i][y];
      }
      if (i !== 0 && y !== 0) {
        if (matrix[i - 1][y - 1] === true) ++a[i][y];
      }
    }
  }
  return a;
}

module.exports = minesweeper;
