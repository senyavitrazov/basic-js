const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(s) {
  let b = '';
  for (let i = 0, a = 0, c = 0; i <= s.length; ++i) {
    if (s.charAt(i) == s.charAt(i + 1)) a++;
    else {
      if (a + 1 == 1) {
        b += s.charAt(i);
      } else {
        b += a + 1 + s.charAt(i);
      }
      a = 0;
    }
  }
  return b;
}

module.exports = {
  encodeLine
};
