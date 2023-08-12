// .js -> por defecto utiliza CommonJS
// .mks -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum, sub, mult } from './sum.mjs'

console.log(sum(1,4))
console.log(sub(1,4))
console.log(mult(1,4))