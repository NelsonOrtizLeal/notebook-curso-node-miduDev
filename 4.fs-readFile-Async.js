const fs = require('node:fs')

console.log("Leyendo el primer archivo...")
fs.readFile('./archivo1.txt', 'utf-8', (err, text) => { // Cuando termines, ejecuta este callback
    console.log('primer texto', text)
})

console.log('hacer cosas mientras lees el archivo ---->>>>> ')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto', text)
})

