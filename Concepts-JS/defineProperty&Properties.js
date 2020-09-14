const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1); // 42

Object.defineProperty(object1, "property2", {
  value: 42,
  writable: true
});

object1.property2 = 77;
// throws an error in strict mode

console.log(object1.property2); // 77

//--------------------------------------------//

const object2 = {};

Object.defineProperties(object2, {
  property1: {
    value: 422,
    writable: true
  },
  property2: {}
});

console.log(object2.property1);
