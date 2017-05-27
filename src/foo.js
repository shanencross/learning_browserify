console.log("running foo...");

console.log("requiring boo from foo...");
var boo = require("./boo.js");

function multiplyBy111(n) {
  return n * 111;
}

function multiplyBy111thenAddOne(n) {
  // boo.setXto3();
  console.log("(from foo function) " + boo.x)
  return boo.addOne(multiplyBy111(n));
}

module.exports = {
  multiplyBy111: multiplyBy111,
  multiplyBy111thenAddOne: multiplyBy111thenAddOne,
};
