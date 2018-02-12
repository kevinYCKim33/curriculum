/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

 const solution = (num1, num2, denominator) => {
   if (!denominator) {
     denominator = num1 < num2 ? num1 : num2
   }
   if (num1 % denominator === 0 && num2 % denominator === 0) {
     return denominator;
   }
   return (solution(num1, num2, denominator - 1));
 }

module.exports = {
  solution,
};
