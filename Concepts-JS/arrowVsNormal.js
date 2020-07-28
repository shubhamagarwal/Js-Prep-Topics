// arrow
let obj = {
    myVar: "foo",
  
    myFunc: function () {
      console.log(this.myVar);
  
      setTimeout(() => {
        console.log(this.myVar);
      }, 1000);
    }
  };
  obj.myFunc();
  
  // function
  let obj = {
    myVar: "foo",
  
    myFunc: function () {
      console.log(this.myVar);
  
      setTimeout(function () {
        console.log(this.myVar);
      }, 1000);
    }
  };
  obj.myFunc();
  