var testModule = (function () {
    var counter = 0;
  
    return {
      incrementCounter: function () {
        return counter++;
      },
  
      resetCounter: function () {
        console.log("counter value prior to reset: " + counter);
        counter = 0;
      }
    };
  })();
  
  // Usage:
  
  // Increment our counter
  testModule.incrementCounter();
  testModule.resetCounter();

//-----------------------------------------------



  var dwightSalary = (function () {
    var salary = 60000;
    function changeBy(amount) {
      salary += amount;
    }
    return {
      raise: function () {
        changeBy(5000);
      },
      lower: function () {
        changeBy(-5000);
      },
      currentAmount: function () {
        return salary;
      }
    };
  })();
  
  console.log(dwightSalary.currentAmount()); // $60,000
  dwightSalary.raise();
  console.log(dwightSalary.currentAmount()); // $65,000
  dwightSalary.lower();
  dwightSalary.lower();
  console.log(dwightSalary.currentAmount()); // $55,000
  
  dwightSalary.changeBy(10000);