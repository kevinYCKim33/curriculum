/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if (a.length === 0) { return '' }
  
  return a.reduce((acc, num) => {
    return acc + num;
  }, 0)
};

module.exports = {
  solution,
};
