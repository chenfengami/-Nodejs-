const fs = require('fs');
const buf = new Buffer('==ii1j2i3h1i23h', 'base64');
console.log(buf);
fs.writeFile('logo.png', buf);