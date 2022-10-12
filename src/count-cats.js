const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsCounter = 0;
  for (let index = 0; index < matrix.length; index++) {
    let filter = matrix[index].filter(e => e === '^^');
    catsCounter += filter.length;
  }
  return catsCounter;
}

module.exports = {
  countCats
};
