const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numToString = n.toString();
  let arr = [];
  for (let i = 0; i < numToString.length; i += 1) {
  number = numToString.substring( 0, i ) + numToString.substring( i + 1 );
  arr.push(number);
 }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
