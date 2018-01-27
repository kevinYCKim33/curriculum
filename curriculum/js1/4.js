/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  const arr = []
  for (let i = 0; i < a; i++) {
    arr.push(b);
  }
  return arr.join("");
};

module.exports = {
  solution,
};
