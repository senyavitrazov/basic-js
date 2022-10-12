const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  let arr = domains.map(i => i.split('.').reverse());
  let dns = [];
  let map = new Map();
  for (let i of arr) {
    let str = '';
    for (let j = 0; j < i.length; j++) {
      str += '.' + i[j];
      if (j < i.length) dns.push(str);
    }
  }
  for (let i of dns) {
    let count = 0;
    for (let j of dns) {
      i === j ? count++ : count;
    }
    map.set(i, count);
  }
  const obj = Object.fromEntries(map);
  return obj;
}

module.exports = {
  getDNSStats
};
