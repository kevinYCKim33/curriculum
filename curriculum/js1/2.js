/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  if (b > a && b > c) {
    return b;
  }
  if (a > b && a > c) {
    return a;
  }
  return c;
}

module.exports = {
  solution,
};
