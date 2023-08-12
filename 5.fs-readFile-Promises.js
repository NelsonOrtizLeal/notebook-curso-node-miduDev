const fs = require('node:fs/promises')

console.log("Leyendo el primer archivo...")
fs.readFile('./archivo1.txt', 'utf-8')
    .then( text => {
        console.log('Primer texto:', text)
    })

console.log('--->>>> hacer cosas mientras lees el archivo')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto:', text)
    })

