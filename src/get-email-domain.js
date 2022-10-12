const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let a = email.slice(email.search('@') + 1);
  if (a.search('@') == -1) return a;
  else return getEmailDomain(a);
}

module.exports = {
  getEmailDomain
};
