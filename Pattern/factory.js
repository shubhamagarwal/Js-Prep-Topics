const Animal = function (name) {
    const animal = {};
    animal.name = name;
    animal.walk = function () {
      console.log(this.name + " walks");
    };
    return animal;
  };
  
  const poo = Animal("poo");
  const tommy = Animal("tommy");
  poo.walk(); // poo walks
  tommy.walk(); // tommy walks