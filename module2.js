// Here some files are imported using the ES6 'import' keyword
// .mjs has been resolved by using the "type":"module" in the package,json file

import * as module1Modules from './module1.js';

console.log(module1Modules.add(2,2));
console.log(module1Modules.multi(2,2));