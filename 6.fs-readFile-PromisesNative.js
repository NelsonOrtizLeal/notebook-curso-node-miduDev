const fs = require('node:fs')

// Esto solo en los módulos nativos
// que no tienen promesas nativas
const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)

console.log("Leyendo el primer archivo...")
fs.readFilePromise('./archivo1.txt', 'utf-8')
    .then(text => {
        console.log('Primer texto:', text)
    })

console.log('hacer cosas mientras lees el archivo ---->>>>> ')

fs.readFilePromise('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segunto texto:', text)
    })

