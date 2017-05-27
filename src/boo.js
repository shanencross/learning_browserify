console.log("running boo...");
/** boo module.
  * Does some example math functions..
  * @module src/boo
  */

exports.x = 5;

/** Add 1 to x.
  * @param {number} x Any number.
  * @return {number} That number, plus one.
  */
exports.addOne = function(x) {
  return x + 1;
}

/** Subtract 1 from x
  * @param {number} x Any number.
  * @return {number} That number, minus one.
  */
exports.subtractOne = function(x) {
  return x - 1;
}

/** Set x property of module to 3.
  */
exports.setXto3 = function() {
  x = 3;
}

Object.defineProperty(exports, "x", { get: function() { return x; } });

// module.exports = {
//   addOne: addOne,
//   subtractOne: subtractOne,
//
//   setXto3: setXto3,
//
//   x: x,
//   get x() { return x; },
//   // set x(n) { x=n },
// };
