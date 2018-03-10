/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function (cb, res = []) {
   if (res.length === this.length) return;
   res.push(cb(this[res.length]));
   return this.gsForEach(cb, res);
  };
};

module.exports = {
  solution,
};
