/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a, i=0, maxNum) => {
  if (a.length === 0) {return ''};
  if (!maxNum) { maxNum = a[0] };

  if (i === a.length) { return maxNum }
  maxNum = maxNum > a[i] ? maxNum : a[i];
  return solution(a, i + 1, maxNum);
};

module.exports = {
  solution,
};
