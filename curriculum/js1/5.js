/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

 const solution = (num, func) => {
   if(num === 1) { return func() }
   func();
   return solution(num-1, func);
 };

module.exports = {
  solution,
};
