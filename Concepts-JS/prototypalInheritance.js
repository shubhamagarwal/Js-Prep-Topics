function Rectangle(length, width) {
    this.length = length;
    this.width = width;
  }
  
  Rectangle.prototype.area = function () {
    return this.length * this.width;
  };
  
  function Square(value) {
    this.length = value;
    this.width = value;
  }
  
  Square.prototype = Object.create(Rectangle.prototype);
  
  var ar = new Square(3);
  console.log(ar.area());
  