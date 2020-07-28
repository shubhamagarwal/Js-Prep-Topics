Array.prototype.myForEach = function (fn) {
    if (typeof fn !== "function") {
      throw new TypeError(fn + " is not a function");
    }
  
    for (var i = 0; i < this.length; i++) {
      fn(this[i]);
    }
  };
  var arr = [1, 2, 3, 4];
  arr.myForEach((value) => console.log(value));