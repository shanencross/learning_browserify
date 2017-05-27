var boo = require("./boo.js");
var foo = require("./foo.js");

/**
 * Tests a bunch of boo and foo functions using number parameter
 * and outputs results to console.
 * @param {number} num number sent to various foo/boo functions.
 */
function test(num) {
  boo.setXto3();
  console.log(foo.multiplyBy111(num));
  console.log(boo.addOne(num));
  console.log(boo.subtractOne(num));
  console.log(foo.multiplyBy111thenAddOne(num));
  console.log(boo.x);
}

test(5);
