const fs = require('node:fs')

console.log('Leyendo el primer archivo....')
const text = fs.readFileSync('./archivo1.txt', 'utf-8')
console.log(text)

console.log('Despues de finalizar la primera lectura')

console.log('Leyendo el segundo archivo....')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2)