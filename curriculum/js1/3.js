/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a,b) => {
  var arr = [];
  for (let i = 0; i < a; i++) {
    arr.push("hello");
  }
  return arr.join("");
};

module.exports = {
  solution,
};
