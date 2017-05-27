console.log("running boo...");

var x = 5;

function addOne(x) {
  return x + 1;
}

function subtractOne(x) {
  return x - 1;
}

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
