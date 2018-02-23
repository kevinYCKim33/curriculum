/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, i = 0, counter = 0) => {
  if (i === a.length) {return counter};
  if (a[i] === b) {counter += 1}
  return solution(a, b, i + 1, counter);
};

module.exports = {
  solution,
};
