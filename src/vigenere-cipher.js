const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultStr = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        resultStr[i] = String.fromCharCode(message.charCodeAt(i));
      }
      else {
        resultStr[i] = String.fromCharCode((((message.charCodeAt(i) - 65) + (key.charCodeAt(j % key.length) - 65)) % 26) + 65);
        j++;
      }
    }
    if (this.type !== true) return resultStr.reverse().join("");
    else return resultStr.join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultStr = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        resultStr[i] = String.fromCharCode(message.charCodeAt(i));
      }
      else {
        resultStr[i] = String.fromCharCode((((message.charCodeAt(i) - 65) + 26 - (key.charCodeAt(j % key.length) - 65)) % 26) + 65);
        j++
      }
    }
    if (this.type !== true) return resultStr.reverse().join("");
    else return resultStr.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
