Array.prototype.myMap = function (fn) {
    if (typeof fn !== "function") {
      throw new TypeError(fn + " is not a function");
    }
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      newArray.push(fn(this[i]));
    }
    return newArray;
  };
  var arr = [4, 5, 7, 8];
  arr.myMap((value) => console.log(value * 3));