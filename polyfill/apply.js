// https://reeversedev.com/polyfill-for-foreach-map-filter-reduce


Function.prototype.myApplyMethod = function (myObj, passingArgs) {
    var index = Math.random();
    var args = [];
    myObj[index] = this;
    for (var i = 0; i < passingArgs.length; i++) {
      args.push("passingArgs[" + i + "]");
    }
  
    var result = eval("myObj[index](" + args + ")");
    return result;
  };
  
  var obj = { first: "shubham", last: "agarwal" };
  var printName = function (city) {
    console.log(`${this.first} ${this.last} ${city}`);
  };
  
  printName.myApplyMethod(obj, ["Hapur"]);
  