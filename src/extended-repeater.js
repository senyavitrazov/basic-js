const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let separator = typeof options.separator !== "undefined" ? String(options.separator) : '+';
  let additionSeparator = typeof options.additionSeparator !== "undefined" ? String(options.additionSeparator) : '|';
  let addition = typeof options.addition !== "undefined" ? String(options.addition) : "";
  let result = "";
  for (let i = 0; i < repeatTimes; i++) {
    result += i === 0 ? str : separator + str;
    if (addition !== "") {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += j === 0 ? addition : additionSeparator + addition;
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};
