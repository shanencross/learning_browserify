/** boo module.
  * Does some example math functions..
  * @module boo
  * @see module:foo
  */

console.log("running boo...");

var x = 5;

/** Add 1 to x.
  * @param {number} x Any number.
  * @return {number} That number, plus one.
  * @alias module:boo.addOne
  */
function addOne(x) {
  return x + 1;
}

/** Subtract 1 from x
  * @param {number} x Any number.
  * @return {number} That number, minus one.
  */
function subtractOne(x) {
  return x - 1;
}

/** Set x property of module to 3.
  */
function setXto3() {
  x = 3;
}

module.exports = {
  addOne: addOne,
  subtractOne: subtractOne,

  setXto3: setXto3,

  x: x,
  get x() { return x; },
  // set x(n) { x=n },
};
