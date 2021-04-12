/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let a = 1;
  const b = names;
  for (let i = 0; i < b.length; i++) {
    for (let y = i + 1; y < b.length; y++) {
      if (b[i] === b[y]) {
        b[y] += `(${a})`;
        a++;
      }
    }
    a = 1;
  }
  return b;
}

module.exports = renameFiles;
