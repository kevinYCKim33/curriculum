/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */
const isPrime = require('../js1/7.js').solution;

const solution = (a) => {
  return a.map((num) => {
    if (isPrime(num)) { return num }
    return 1;
  });
};

module.exports = {
  solution,
};
