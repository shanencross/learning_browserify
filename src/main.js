var boo = require("./boo.js");
var foo = require("./foo.js");


/**
 * This function adds one to its input.
 * @param {number} num any number
 */console.log("requiring boo from main...");
function test(num) {
  boo.setXto3();
  console.log(foo.multiplyBy111(num));
  console.log(boo.addOne(num));
  console.log(boo.subtractOne(num));
  console.log(foo.multiplyBy111thenAddOne(num));
  console.log(boo.x);
}

test(5);
