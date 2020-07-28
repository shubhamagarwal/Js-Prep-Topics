// old interface
//The Adapter design pattern converts a class interface into another one the client expects. 
//This pattern lets classes work together otherwise they couldn't because their interfaces are incompatible. 
//The essence of the pattern is transferring an interface (object's properties and methods) to another. 
//A common scenario of the pattern use is when new components and modules need to be integrated to work with 
//existing ones in an application or when part of code is refactored with improved interface but still needs to work with old parts. 
//The example code presents an online flight ticket pricing calculation system. The old version used to make computations one way, 
//now the improved one uses user identification and modernized pricing calculation. We introduce an adapter allowing the client program 
//to continue working without any API changes by matching the old interface with the new one. 

function TicketPrice() {
    this.request = function (start, end, overweightLuggage) {
      // price calculation ...
      return "$150.34";
    };
  }
  
  // new interface
  function NewTicketPrice() {
    this.login = function (credentials) {
      /* process credentials */
    };
    this.setStart = function (start) {
      /* set start point */
    };
    this.setDestination = function (destination) {
      /* set destination */
    };
    this.calculate = function (overweightLuggage) {
      //price calculation ...
      return "$120.20";
    };
  }
  
  // adapter interface
  function TicketAdapter(credentials) {
    var pricing = new NewTicketPrice();
  
    pricing.login(credentials);
  
    return {
      request: function (start, end, overweightLuggage) {
        pricing.setStart(start);
        pricing.setDestination(end);
        return pricing.calculate(overweightLuggage);
      }
    };
  }
  
  var pricing = new TicketPrice();
  var credentials = { token: "30a8-6ee1" };
  var adapter = new TicketAdapter(credentials);
  
  // original ticket pricing and interface
  var price = pricing.request("Bern", "London", 20);
  console.log("Old price: " + price);
  
  // new ticket pricing with adapted interface
  price = adapter.request("Bern", "London", 20);
  console.log("New price: " + price);