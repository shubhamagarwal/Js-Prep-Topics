Array.prototype.myFilter = function (fn, context) {
    if (typeof fn !== "function") {
      throw new TypeError(fn + " is not a function");
    }
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      if (fn.call(context, this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
  var arr = [40, 50, 70, 80];
  arr.myFilter((value) => value > 50);