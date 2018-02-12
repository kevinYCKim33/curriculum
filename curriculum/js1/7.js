/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

 const solution = (num, counter=2) => {
   if (num <= 1) { return false }
   if (num === 2) { return true }
   if (num === counter) { return true }
   if (num % counter === 0) { return false }
   return solution(num, counter + 1);
 };

module.exports = {
  solution,
};
