var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = "Tesla";
    this.make = "Model S";
  };
  
  TeslaModelS.prototype.go = function () {
    console.log(this.make);
  };
  
  var aa = new TeslaModelS();
  aa.go();