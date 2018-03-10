/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

 const solution = () => {
   Array.prototype.gsMap = function (cb, res = []) {
     if (res.length === this.length) return res;
     res.push(cb(this[res.length]));
     return this.gsMap(cb, res);
   };
 };

 // const solution = () => {
 //   Array.prototype.gsMap = function (cb) {
 //     for (let i = 0; i < this.length; i++) {
 //       this[i] = cb(this[i]);
 //     }
 //   }
 // }

 module.exports = {
   solution,
 };
