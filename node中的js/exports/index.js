var module_a = require('./module_a');

console.log(module_a.name);
console.log(module_a.data);
console.log(module_a.getPrivate());

var Person = require('./person');
var oPerson = new Person('John');
oPerson.talk();