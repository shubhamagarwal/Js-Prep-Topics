class School {
    #property;
  
    constructor() {
      this.#property = 'xyz';
    }
  
    #privateMethod() {
      return this.#property;
    }
  
    getPrivateMethod(){
      return this.#privateMethod();
    }
  }
  
  const instance = new School();
  console.log(instance.property);
  console.log(instance.privateMethod); 
  console.log(instance.getPrivateMethod())