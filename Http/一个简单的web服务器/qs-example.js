const querystring = require('querystring');
console.log(querystring.parse('name=Guillermo')); //{ name: GUillermo }
console.log(querystring.parse('q=guillermo+rauch')); // { q: quillermo rauch }
console.log(querystring.stringify({ name: 123 , age: 22}));