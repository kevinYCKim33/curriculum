/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const isPrime = (num, counter=2) => {
   if (num <= 1) { return false }
   if (num === counter) { return true }
   if (num % counter === 0) { return false }
   return isPrime(num, counter + 1);
 };

const solution = (a) => {
  return a.map((num) => {
    if (isPrime(num)) { return num }
    return 1;
  });
};

module.exports = {
  solution,
};
