/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (cb, acc=0, i=0) {
    if (i === this.length) return acc;
    acc = cb(acc, this[i]);
    return this.gsReduce(cb, acc, i + 1);
  };
};

module.exports = {
  solution,
};
