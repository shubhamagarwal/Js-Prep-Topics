var obj = {name: 'Hari'};

function getName(a, b, c) {
  return this.name + " " + a + " " + b + " " +c;
}

console.log(getName.call(obj, "Newtown","KOLKATA","WB"));

console.log(getName.apply(obj, ["Newtown","KOLKATA","HB"]));

var bound = getName.bind(obj); 
console.log(bound("Newtown","KOLKATA","MP"));