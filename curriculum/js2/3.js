/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

//imports module.exports = {
  // solution,
// } from js1/7

const isPrime = require('../js1/7.js').solution;

const solution = (a) => {
  return a.map( num => isPrime(num) ? num : 1)
};

module.exports = {
  solution,
};
