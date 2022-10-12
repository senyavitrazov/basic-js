const { NotImplementedError } = require('../extensions/index.js');

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
  let pos = [], j = 0;
  pos = arr.filter(i => i >= 0).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = pos[j];
      j++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
