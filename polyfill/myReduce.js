Array.prototype.myReduce = function (fn, initialValue) {
    if (typeof fn !== "function") {
      throw new TypeError(fn + " is not a function");
    }
    var acc = initialValue;
    for (var i = 0; i < this.length; i++) {
      if (acc !== undefined) {
        acc = fn.call(undefined, acc, this[i], i, this);
      } else {
        acc = this[i];
      }
    }
    return acc;
  };
  var arr = [40, 50, 70, 80];
  arr.myReduce((first, second) => first + second, 10);