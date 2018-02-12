/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

 const solution = (num, divisor=2, sum=0) => {
   if (divisor === num) { return sum }
   if (num % divisor === 0) { sum+= divisor }
   return solution(num, divisor + 1, sum);
 };

module.exports = {
  solution,
};
