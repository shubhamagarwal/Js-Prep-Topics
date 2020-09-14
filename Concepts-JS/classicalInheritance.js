function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  
  function Professional(fName, lName) {
    Person.call(this, fName, lName);
  }
  
  Professional.prototype.showName = function () {
    return this.fName;
  };
  
  let prof = new Professional("abc", "def");
  console.log(prof.showName());
  