const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(m) {
  let res = [];
  for (let i = 0; i < m.length; i++) {
    let arr = [];
    for (let j = 0; j < m[i].length; j++) {
      let count = 0;
      if (i > 0) m[i - 1][j] ? count++ : count;
      if (i > 0 && j < m[i].length - 1) m[i - 1][j + 1] ? count++ : count;
      if (j < m[i].length - 1) m[i][j + 1] ? count++ : count;
      if (i < m.length - 1 && j < m[i].length - 1) m[i + 1][j + 1] ? count++ : count;
      if (i < m.length - 1) m[i + 1][j] ? count++ : count;
      if (i < m.length - 1 && j > 0) m[i + 1][j - 1] ? count++ : count;
      if (j > 0) m[i][j - 1] ? count++ : count;
      if (i > 0 && j > 0) m[i - 1][j - 1] ? count++ : count;
      arr.push(count);
    }
    res.push(arr);
  }
  return res;
}

module.exports = {
  minesweeper
};
