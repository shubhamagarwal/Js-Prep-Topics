// https://dev.to/spukas/curring-in-javascript-1o45
function add(...a) {
    function curried(...b) {
      return add(...a, ...b);
    }
  
    curried.sum = a.reduce((first, second) => first + second);
  
    return curried;
  }
  
  add(2, 3, 5)(5, 5)(2)(1).sum; // 23
  
  function addition(a) {
    var sum = a;
    return function resultFn(b) {
      if (arguments.length) {
        sum = sum + b;
        return resultFn;
      }
      return sum;
    };
  }
  
  addition(2)(4)();
  