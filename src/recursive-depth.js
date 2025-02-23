const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1, depthNumber = []) {
    depthNumber.push(depth);
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        this.calculateDepth(elem, depth + 1, depthNumber)
      }
    });
    return depthNumber.reduce((previousValue, currentValue) => previousValue > currentValue ? previousValue : currentValue)
  }
}

module.exports = {
  DepthCalculator
};
